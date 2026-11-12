import { useEffect, useState } from "react";

import { CalendarClock, ClipboardPaste, Link2, Loader2, QrCode, ShieldCheck, Sparkles } from "lucide-react";
import QRCode from "qrcode";
import { createShortLink } from "@/lib/links.functions";
import { CopyBtn, ErrorNote, Field, Panel, inputCls } from "./ui";

const EXPIRY = [
  { label: "1 hour", h: 1 },
  { label: "24 hours", h: 24 },
  { label: "7 days", h: 168 },
  { label: "30 days", h: 720 },
  { label: "Custom date", h: -1 },
];

type Opt = "custom" | "password" | "expiry" | "qr";
const OPTS: { id: Opt; label: string; Icon: typeof Link2 }[] = [
  { id: "custom", label: "Custom Link", Icon: Link2 },
  { id: "password", label: "Password Protection", Icon: ShieldCheck },
  { id: "expiry", label: "Set Expiration", Icon: CalendarClock },
  { id: "qr", label: "Generate QR Code", Icon: QrCode },
];

export function LinkShortener() {
  const [url, setUrl] = useState("");
  const [on, setOn] = useState<Record<Opt, boolean>>({ custom: false, password: false, expiry: false, qr: false });
  const [code, setCode] = useState("");
  const [pw, setPw] = useState("");
  const [exp, setExp] = useState(1);
  const [custom, setCustom] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [out, setOut] = useState<{ link: string; note: string } | null>(null);
  const [qr, setQr] = useState("");

  useEffect(() => {
    if (!out || !on.qr) { setQr(""); return; }
    QRCode.toDataURL(out.link, { width: 320, margin: 1, color: { dark: "#000000", light: "#FFFFFF" } })
      .then(setQr).catch(() => setQr(""));
  }, [out, on.qr]);

  const paste = async () => {
    try { setUrl((await navigator.clipboard.readText()).trim()); } catch { setErr("Your browser blocked pasting — press Ctrl+V in the box instead."); }
  };

  const go = async () => {
    setErr(null); setOut(null);
    let expiresAt: string | undefined;
    if (on.expiry) {
      const h = EXPIRY[exp]?.h ?? 0;
      if (h > 0) expiresAt = new Date(Date.now() + h * 3600e3).toISOString();
      else {
        if (!custom) return setErr("Pick an expiry date.");
        const d = new Date(custom);
        if (d <= new Date()) return setErr("The expiry must be in the future.");
        expiresAt = d.toISOString();
      }
    }
    const password = on.password && pw ? pw : undefined;
    setBusy(true);
    try {
      const r = await createShortLink({ data: { url: url.trim(), code: (on.custom && code.trim()) || undefined, password, expiresAt } });
      if (!r.ok) return setErr(r.error);
      const formattedExpiry = expiresAt
        ? `Expires ${new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(expiresAt))}`
        : "Never expires";
      setOut({
        link: `${window.location.origin}/go/${r.code}`,
        note: [password && "Password protected", formattedExpiry].filter(Boolean).join(" · "),
      });
    } catch (e) {
      setErr(e instanceof Error && e.message.includes("[") ? "Check the link and custom name (3–40 letters, numbers, - or _; password at least 4 characters)." : "Something went wrong.");
    } finally { setBusy(false); }
  };

  return (
    <Panel>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded-2xl border border-[#D6CCB5] bg-[#FAF7F0] p-2 pl-4 transition-colors focus-within:border-[#000000] focus-within:bg-[#FFFFFF] focus-within:ring-2 focus-within:ring-[#7895B2]/40">
          <input
            type="url"
            aria-label="Destination URL"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#000000] placeholder:text-[#4A4740]/60 focus:outline-none"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && url && go()}
            placeholder="Paste your URL here… (e.g. https://mysite.com/very-long-link)"
          />
          <button
            type="button"
            onClick={paste}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border border-[#D6CCB5] bg-[#FFFFFF] px-3 py-2 text-xs font-semibold text-[#000000] transition-colors hover:bg-[#E8DFCA]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]"
          >
            <ClipboardPaste className="h-3.5 w-3.5 text-[#537190]" aria-hidden="true" />
            Paste
          </button>
        </div>
        <button
          type="button"
          onClick={go}
          disabled={!url || busy}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#000000] px-7 py-3.5 text-sm font-semibold text-[#FFFFFF] shadow-sm transition-[background-color,transform] duration-150 hover:bg-[#1A1A1A] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Sparkles className="h-4 w-4" aria-hidden="true" />}
          {busy ? "Shortening…" : "Shorten Now"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {OPTS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            aria-pressed={on[id]}
            onClick={() => setOn((s) => ({ ...s, [id]: !s[id] }))}
            className={`flex cursor-pointer flex-col items-center gap-2.5 rounded-2xl border p-4 text-center text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] sm:p-5 sm:text-sm ${
              on[id]
                ? "border-[#000000] bg-[#E8DFCA]/55 text-[#000000]"
                : "border-[#D6CCB5] bg-[#FAF7F0] text-[#4A4740] hover:border-[#7895B2] hover:bg-[#FFFFFF] hover:text-[#000000]"
            }`}
          >
            <span
              className={`grid h-10 w-10 place-items-center rounded-xl transition-colors ${
                on[id] ? "bg-[#000000] text-[#FFFFFF]" : "border border-[#D6CCB5] bg-[#FFFFFF] text-[#000000]"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            {label}
          </button>
        ))}
      </div>

      {(on.custom || on.password || on.expiry) && (
        <div className="grid gap-4 rounded-2xl border border-[#D6CCB5]/80 bg-[#FAF7F0] p-4 md:grid-cols-3">
          {on.custom && (
            <Field label="Custom name">
              <div className="flex items-center rounded-xl border border-[#D6CCB5] bg-[#FFFFFF] px-3 py-2.5 text-sm text-[#4A4740] transition-colors focus-within:border-[#000000] focus-within:ring-2 focus-within:ring-[#7895B2]/40">
                <span className="select-none font-mono text-xs text-[#4A4740]">/go/</span>
                <input
                  aria-label="Custom short code"
                  className="min-w-0 flex-1 bg-transparent pl-1 text-sm text-[#000000] placeholder:text-[#4A4740]/50 focus:outline-none"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/[^A-Za-z0-9_-]/g, ""))}
                  placeholder="summer-sale"
                />
              </div>
            </Field>
          )}
          {on.password && (
            <Field label="Password">
              <input
                type="password"
                className={inputCls.replace("bg-[#FAF7F0]", "bg-[#FFFFFF]")}
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="At least 4 characters"
              />
            </Field>
          )}
          {on.expiry && (
            <Field label="Expires after">
              <select
                className={inputCls.replace("bg-[#FAF7F0]", "bg-[#FFFFFF]")}
                value={exp}
                onChange={(e) => setExp(+e.target.value)}
              >
                {EXPIRY.map((x, i) => <option key={x.label} value={i}>{x.label}</option>)}
              </select>
              {EXPIRY[exp]?.h === -1 && (
                <input
                  type="datetime-local"
                  aria-label="Custom expiry date and time"
                  className={`mt-2 ${inputCls.replace("bg-[#FAF7F0]", "bg-[#FFFFFF]")}`}
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                />
              )}
            </Field>
          )}
        </div>
      )}

      <ErrorNote msg={err} />

      {out && (
        <div
          aria-live="polite"
          className="flex flex-wrap items-center gap-5 rounded-2xl border border-[#D6CCB5] bg-[#FAF7F0] p-5 text-[#000000]"
        >
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#537190]">Short link ready</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-3">
              <a
                href={out.link}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all font-serif text-xl font-normal tracking-tight text-[#000000] underline decoration-[#D6CCB5] underline-offset-4 hover:decoration-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]"
              >
                {out.link}
              </a>
              <CopyBtn text={out.link} />
            </div>
            <p className="mt-1.5 text-sm tabular-nums text-[#4A4740]">{out.note}</p>
          </div>
          {qr && (
            <a
              href={qr}
              download="qr-code.png"
              title="Download QR code"
              className="shrink-0 rounded-2xl border border-[#D6CCB5] bg-[#FFFFFF] p-3 text-center transition-colors hover:border-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]"
            >
              <img src={qr} alt={`QR code for ${out.link}`} width={112} height={112} className="h-28 w-28 rounded-lg" />
              <span className="mt-1.5 block text-[11px] font-semibold text-[#4A4740]">Download PNG</span>
            </a>
          )}
        </div>
      )}
    </Panel>
  );
}
