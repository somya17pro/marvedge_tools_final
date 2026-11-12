import { useRef, useState, type ReactNode } from "react";
import { Upload, Download, Copy, Check, Loader2, Wand2 } from "lucide-react";

export const SAMPLE_NOTE = "A dummy file so you can see the result before uploading your own.";
export type Sample = { label: string; onPick: () => void; busy?: boolean; note?: string };

export const fmtBytes = (n: number) =>
  n < 1024 ? `${n} B` : n < 1048576 ? `${(n / 1024).toFixed(1)} KB` : `${(n / 1048576).toFixed(2)} MB`;

export function download(blob: Blob | string, name: string) {
  const url = typeof blob === "string" ? blob : URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  if (typeof blob !== "string") setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function Dropzone({ accept, multiple, onFiles, label, sample }: { accept: string; multiple?: boolean; onFiles: (f: File[]) => void; label: string; sample?: Sample }) {
  const ref = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); onFiles(Array.from(e.dataTransfer.files)); }}
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-7 text-center transition-colors sm:p-9 ${
        over
          ? "border-[#000000] bg-[#E8DFCA]/55"
          : "border-[#D6CCB5] bg-[#FAF7F0] hover:border-[#7895B2]"
      }`}
    >
      <button
        type="button"
        onClick={() => ref.current?.click()}
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl py-1 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000000] text-[#FFFFFF] shadow-sm">
          <Upload className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="text-base font-semibold text-[#000000]">{label}</span>
        <span className="text-sm text-[#4A4740]">Drag &amp; drop or click to choose · processed on your device</span>
      </button>
      {sample && (
        <div className="flex flex-col items-center gap-1.5 pt-1">
          <button
            type="button"
            disabled={sample.busy}
            onClick={() => sample.onPick()}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#D6CCB5] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#000000] shadow-xs transition-colors hover:border-[#000000]/40 hover:bg-[#E8DFCA]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] disabled:pointer-events-none disabled:opacity-60"
          >
            {sample.busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" /> : <Wand2 className="h-3.5 w-3.5 text-[#537190]" aria-hidden="true" />}
            {sample.busy ? "Loading sample…" : sample.label}
          </button>
          <p className="text-xs text-[#4A4740]">{sample.note ?? SAMPLE_NOTE}</p>
        </div>
      )}
      <input
        ref={ref}
        type="file"
        hidden
        accept={accept}
        multiple={multiple}
        onChange={(e) => { onFiles(Array.from(e.target.files ?? [])); e.target.value = ""; }}
      />
    </div>
  );
}

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-semibold text-[#000000]">{label}</span>
      {children}
      {hint && <span className="text-xs text-[#4A4740]">{hint}</span>}
    </label>
  );
}

export const inputCls =
  "w-full rounded-xl border border-[#D6CCB5] bg-[#FAF7F0] px-3.5 py-2.5 text-sm text-[#000000] placeholder:text-[#4A4740]/60 transition-colors hover:border-[#AEBDCA] focus-visible:border-[#000000] focus-visible:bg-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]/40";
export const rangeCls = "w-full cursor-pointer rounded accent-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]";

export function Btn({ children, onClick, disabled, busy, variant = "primary" }: { children: ReactNode; onClick?: () => void; disabled?: boolean; busy?: boolean; variant?: "primary" | "ghost" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || busy}
      className={`${variant === "primary" ? "btn-primary" : "btn-ghost"} cursor-pointer disabled:pointer-events-none disabled:opacity-50`}
    >
      {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}{children}
    </button>
  );
}

export function DownloadBtn({ onClick, children = "Download" }: { onClick: () => void; children?: ReactNode }) {
  return <Btn onClick={onClick}><Download className="h-4 w-4" aria-hidden="true" />{children}</Btn>;
}

export function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <Btn variant="ghost" onClick={() => { navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 1500); }}>
      {ok ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}{ok ? "Copied" : "Copy"}
    </Btn>
  );
}

export function ErrorNote({ msg }: { msg: string | null }) {
  if (!msg) return null;
  return (
    <p
      role="alert"
      aria-live="polite"
      className="rounded-xl border border-[#D95338]/30 bg-[#D95338]/10 px-4 py-3 text-sm font-medium text-[#9F2D18]"
    >
      {msg}
    </p>
  );
}

export function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 rounded-3xl border border-[#D6CCB5] bg-[#FFFFFF] p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.18)] md:p-8">
      {children}
    </div>
  );
}

export const loadImage = (file: Blob) =>
  new Promise<HTMLImageElement>((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => rej(new Error("Could not read that image."));
    img.src = URL.createObjectURL(file);
  });

export const canvasBlob = (c: HTMLCanvasElement, type: string, q?: number) =>
  new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("Export failed"))), type, q));

export const extFor = (mime: string) => ({ "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" })[mime] ?? "img";
export const baseName = (n: string) => n.replace(/\.[^.]+$/, "");
