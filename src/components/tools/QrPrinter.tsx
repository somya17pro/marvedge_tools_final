import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, Printer } from "lucide-react";
import { drawQr, type QrCorner, type QrShape } from "@/lib/qr-render";
import { Btn, Field, inputCls, rangeCls } from "./ui";

const MM = 96 / 25.4; // css px per mm

const PAPERS = [
  { id: "a4", label: "A4", w: 210, h: 297 },
  { id: "a5", label: "A5", w: 148, h: 210 },
  { id: "a6", label: "A6", w: 105, h: 148 },
  { id: "letter", label: "Letter", w: 215.9, h: 279.4 },
] as const;
type PaperId = (typeof PAPERS)[number]["id"];

const SWATCHES = ["#000000", "#1e1b4b", "#537190", "#0f766e", "#b45309", "#be123c"];

type SheetProps = {
  png: string | null; paperW: number; paperH: number; margin: number;
  qrMm: number; borderOn: boolean; borderMm: number; borderColor: string; radiusMm: number;
  caption: string; fg: string; cols: number; rows: number; gap: number;
};

function Sheet(p: SheetProps) {
  const itemW = p.qrMm + (p.borderOn ? p.borderMm * 2 + 3 : 0);
  const itemH = itemW + (p.caption ? 7 : 0);
  return (
    <div
      className="grid content-start overflow-hidden bg-white"
      style={{
        width: `${p.paperW}mm`, height: `${p.paperH}mm`, padding: `${p.margin}mm`,
        gridTemplateColumns: `repeat(${p.cols}, ${itemW}mm)`, gap: `${p.gap}mm`,
        justifyContent: "center", alignContent: "center",
      }}
    >
      {Array.from({ length: p.cols * p.rows }).map((_, i) => (
        <div key={i} className="flex flex-col items-center justify-center" style={{ width: `${itemW}mm`, height: `${itemH}mm` }}>
          <div
            style={{
              border: p.borderOn ? `${p.borderMm}mm solid ${p.borderColor}` : undefined,
              borderRadius: `${p.radiusMm}mm`, padding: p.borderOn ? "1.5mm" : 0, lineHeight: 0,
            }}
          >
            {p.png && <img src={p.png} alt="QR code" style={{ width: `${p.qrMm}mm`, height: `${p.qrMm}mm` }} />}
          </div>
          {p.caption && (
            <p className="text-center font-bold" style={{ color: p.fg, fontSize: `${Math.max(2.2, p.qrMm * 0.09)}mm`, marginTop: "1.2mm", lineHeight: 1.2 }}>
              {p.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/** Print-layout section for the QR Generator — reuses the designed code (content,
 *  shape, corners, colors, logo) and adds paper, border and copies-per-sheet settings. */
export function QrPrintLayout({ value, fg, bg, shape, corner, logo }: {
  value: string; fg: string; bg: string; shape: QrShape; corner: QrCorner; logo: HTMLImageElement | null;
}) {
  const [paper, setPaper] = useState<PaperId>("a4");
  const [landscape, setLandscape] = useState(false);
  const [margin, setMargin] = useState(10);
  const [qrMm, setQrMm] = useState(45);
  const [borderOn, setBorderOn] = useState(true);
  const [borderMm, setBorderMm] = useState(1);
  const [borderColor, setBorderColor] = useState("#000000");
  const [radiusMm, setRadiusMm] = useState(3);
  const [caption, setCaption] = useState("Scan me");
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(4);
  const [gap, setGap] = useState(6);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [png, setPng] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c || !value.trim()) { setPng(null); return; }
    try {
      drawQr(c, value, { fg, bg, size: 800, level: logo ? "H" : "Q", shape, corner, frame: "none", logo });
      setPng(c.toDataURL("image/png"));
    } catch { /* invalid content — keep last render */ }
  }, [value, fg, bg, shape, corner, logo]);

  const p = PAPERS.find((x) => x.id === paper)!;
  const paperW = landscape ? p.h : p.w;
  const paperH = landscape ? p.w : p.h;
  const itemW = qrMm + (borderOn ? borderMm * 2 + 3 : 0);
  const itemH = itemW + (caption ? 7 : 0);
  const fitsW = cols * itemW + (cols - 1) * gap <= paperW - margin * 2;
  const fitsH = rows * itemH + (rows - 1) * gap <= paperH - margin * 2;
  const fits = fitsW && fitsH;

  const sheetProps: SheetProps = { png, paperW, paperH, margin, qrMm, borderOn, borderMm, borderColor, radiusMm, caption, fg, cols, rows, gap };
  const previewScale = Math.min(1, 340 / (paperW * MM));

  const chip = (on: boolean) =>
    `cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] ${
      on
        ? "border-[#000000] bg-[#000000] text-[#FFFFFF]"
        : "border-[#D6CCB5] bg-[#FAF7F0] text-[#4A4740] hover:border-[#7895B2] hover:bg-[#FFFFFF] hover:text-[#000000]"
    }`;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <canvas ref={canvasRef} className="hidden" aria-hidden />

      <div className="grid content-start gap-6">
        <div className="grid gap-3">
          <span className="text-sm font-semibold text-[#000000]">Paper</span>
          <div className="flex flex-wrap gap-1.5">
            {PAPERS.map((x) => (
              <button key={x.id} type="button" aria-pressed={paper === x.id} onClick={() => setPaper(x.id)} className={chip(paper === x.id)}>
                {x.label} · {x.w}×{x.h} mm
              </button>
            ))}
            <button type="button" aria-pressed={landscape} onClick={() => setLandscape((v) => !v)} className={chip(landscape)}>
              {landscape ? "Landscape" : "Portrait"}
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={`QR size · ${qrMm} mm`} hint="25–30 mm scans well at arm's length; go bigger for posters.">
              <input type="range" min={15} max={120} step={1} value={qrMm} onChange={(e) => setQrMm(+e.target.value)} className={rangeCls} />
            </Field>
            <Field label={`Page margin · ${margin} mm`}>
              <input type="range" min={0} max={30} step={1} value={margin} onChange={(e) => setMargin(+e.target.value)} className={rangeCls} />
            </Field>
          </div>
        </div>

        <div className="grid gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#000000]">
            <input type="checkbox" checked={borderOn} onChange={(e) => setBorderOn(e.target.checked)} className="accent-[#000000]" /> Border around each code
          </label>
          {borderOn && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={`Thickness · ${borderMm} mm`}><input type="range" min={0.5} max={5} step={0.5} value={borderMm} onChange={(e) => setBorderMm(+e.target.value)} className={rangeCls} /></Field>
              <Field label={`Corner radius · ${radiusMm} mm`}><input type="range" min={0} max={10} step={1} value={radiusMm} onChange={(e) => setRadiusMm(+e.target.value)} className={rangeCls} /></Field>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#4A4740]">Border color:</span>
                {SWATCHES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-label={`Border color ${c}`}
                    aria-pressed={borderColor === c}
                    onClick={() => setBorderColor(c)}
                    className={`h-7 w-7 cursor-pointer rounded-full border-2 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] ${
                      borderColor === c ? "scale-110 border-[#000000] ring-2 ring-[#7895B2]/50" : "border-[#D6CCB5] hover:scale-105"
                    }`}
                    style={{ background: c }}
                  />
                ))}
                <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} aria-label="Custom border color" className="h-7 w-10 cursor-pointer rounded-lg border border-[#D6CCB5]" />
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-3">
          <span className="text-sm font-semibold text-[#000000]">Copies per sheet</span>
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label={`Columns · ${cols}`}><input type="range" min={1} max={6} value={cols} onChange={(e) => setCols(+e.target.value)} className={rangeCls} /></Field>
            <Field label={`Rows · ${rows}`}><input type="range" min={1} max={8} value={rows} onChange={(e) => setRows(+e.target.value)} className={rangeCls} /></Field>
            <Field label={`Gap · ${gap} mm`}><input type="range" min={0} max={20} value={gap} onChange={(e) => setGap(+e.target.value)} className={rangeCls} /></Field>
          </div>
          <Field label="Caption under each code (optional)">
            <input className={inputCls} value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Scan me" />
          </Field>
        </div>
      </div>

      {/* preview + print */}
      <div className="grid content-start justify-items-center gap-4 rounded-3xl border border-[#D6CCB5] bg-[#FAF7F0] p-6">
        <h3 className="font-serif text-xl font-normal tracking-tight text-[#000000]">Sheet preview</h3>
        <div className="overflow-hidden rounded-lg border border-[#D6CCB5] bg-[#FFFFFF] shadow-sm" style={{ width: paperW * MM * previewScale, height: paperH * MM * previewScale }}>
          <div style={{ transform: `scale(${previewScale})`, transformOrigin: "top left" }}>
            <Sheet {...sheetProps} />
          </div>
        </div>
        <p className="text-center text-xs tabular-nums text-[#4A4740]">
          {p.label} {landscape ? "landscape" : "portrait"} · {cols * rows} code{cols * rows > 1 ? "s" : ""} · {qrMm} mm each
        </p>
        {!fits && (
          <p role="alert" className="flex items-center gap-2 rounded-xl border border-[#D95338]/30 bg-[#D95338]/10 px-4 py-2.5 text-center text-xs font-medium text-[#9F2D18]">
            <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" /> This layout doesn't fit the page — shrink the code, add margin room, or use fewer copies.
          </p>
        )}
        <Btn onClick={() => window.print()} disabled={!png || !fits}><Printer className="h-4 w-4" aria-hidden="true" />Print this sheet</Btn>
        <p className="text-center text-xs text-[#4A4740]">In the print dialog choose “Actual size / 100%” so the millimetre sizes stay exact.</p>
      </div>

      {mounted && createPortal(
        <div className="qr-print-portal">
          <style>{`@page { size: ${p.id === "letter" ? "letter" : p.id} ${landscape ? "landscape" : "portrait"}; margin: 0; }`}</style>
          <Sheet {...sheetProps} />
        </div>,
        document.body,
      )}
    </div>
  );
}
