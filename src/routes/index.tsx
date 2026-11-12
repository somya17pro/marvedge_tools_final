import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Wrench,
  ShieldCheck,
  Zap,
  Layers,
  Play,
  Scissors,
  Image as ImageIcon,
  QrCode,
  Film,
  Minimize2,
  FileCheck,
  FileText,
  Bookmark,
  Share2,
  Link2,
  FileSearch,
  Subtitles,
  Youtube,
  Repeat,
  ShoppingBag,
  ListOrdered,
  Mic,
  Video,
} from "lucide-react";
import { tools, MARVEDGE_URL, type Tool } from "@/lib/tools";
import { MarvedgeCTA } from "@/components/MarvedgeCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marvedge Tools — 19 Minimalist In-Browser & AI Media Tools" },
      {
        name: "description",
        content:
          "Nineteen focused tools to trim clips, compress images, generate transcripts, and structure demo scripts. Client-side execution with zero latency and zero server uploads.",
      },
      { property: "og:title", content: "Marvedge Tools — 19 Minimalist In-Browser & AI Media Tools" },
      {
        property: "og:description",
        content:
          "Nineteen focused tools to trim clips, compress images, and generate scripts. 100% private in-browser execution.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://marvedge.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://marvedge.com/" }],
  }),
  component: Index,
});

/* Helper to render visual interactive miniatures for each of the 19 tools */
function ToolVisualPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "mp4-to-gif":
      return (
        <div className="flex flex-col gap-2 rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center justify-between text-[11px] font-mono text-black/60">
            <span className="flex items-center gap-1.5 font-medium text-black">
              <Scissors className="h-3 w-3 text-[#7895B2]" /> Trim: 00:01.2 → 00:04.2
            </span>
            <span className="rounded bg-[#7895B2]/20 px-1.5 py-0.5 text-[#7895B2] font-semibold">60 FPS</span>
          </div>
          <div className="relative h-6 rounded-lg bg-[#E8DFCA] p-1 flex items-center">
            <div className="absolute left-3 right-8 h-4 rounded bg-[#7895B2] flex items-center justify-between px-1.5 text-[9px] font-mono text-white">
              <span>▶ IN</span>
              <span>OUT ◀</span>
            </div>
          </div>
        </div>
      );

    case "image-compressor":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="space-y-0.5">
            <div className="text-[10px] uppercase font-semibold text-black/50">Before / After</div>
            <div className="flex items-baseline gap-2 font-mono text-xs">
              <span className="text-black/40 line-through">4.8 MB</span>
              <span className="font-bold text-black">680 KB</span>
            </div>
          </div>
          <span className="rounded-full bg-[#000000] px-2.5 py-1 text-[11px] font-bold text-white">
            -86% Saved
          </span>
        </div>
      );

    case "qr-code-generator":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#000000] text-white">
              <QrCode className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-black">Print Sheet Ready</div>
              <div className="text-[11px] text-black/60 font-mono">35mm × 35mm · A4</div>
            </div>
          </div>
          <span className="rounded-md border border-[#D6CCB5] bg-white px-2 py-0.5 text-[10px] font-mono text-black">
            SVG / PNG
          </span>
        </div>
      );

    case "video-compressor":
      return (
        <div className="flex flex-col gap-2 rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-black/60">Target: Slack / Web</span>
            <span className="font-bold text-[#7895B2]">25 MB Limit</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#E8DFCA]">
            <div className="h-full w-2/3 rounded-full bg-[#000000]" />
          </div>
        </div>
      );

    case "gif-compressor":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg checker border border-[#AEBDCA]" />
            <span className="text-xs font-medium text-black">Delta Optimization</span>
          </div>
          <span className="font-mono text-xs font-semibold text-[#7895B2]">128 Colors</span>
        </div>
      );

    case "image-resizer":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex gap-1.5 text-[11px] font-mono text-black">
            <span className="rounded-md bg-white border border-[#D6CCB5] px-2 py-0.5">1:1 Square</span>
            <span className="rounded-md bg-[#E8DFCA] px-2 py-0.5">16:9 Wide</span>
          </div>
          <span className="text-[11px] text-black/60 font-mono">Aspect Locked</span>
        </div>
      );

    case "image-format-converter":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="rounded bg-[#E8DFCA] px-1.5 py-0.5 font-bold">PNG</span>
            <span className="text-black/40">→</span>
            <span className="rounded bg-[#000000] px-1.5 py-0.5 font-bold text-white">WebP</span>
          </div>
          <span className="text-[11px] font-medium text-black/60">Alpha Intact</span>
        </div>
      );

    case "pdf-merger":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex -space-x-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#D6CCB5] bg-white text-[10px] font-bold shadow-sm">1</div>
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#D6CCB5] bg-white text-[10px] font-bold shadow-sm">2</div>
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#000000] bg-[#000000] text-[10px] font-bold text-white shadow-sm">+</div>
          </div>
          <span className="text-[11px] font-medium text-black/70">Reorder & Merge</span>
        </div>
      );

    case "favicon-generator":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#000000] text-[10px] font-bold text-white">
              M
            </div>
            <div className="text-[11px] font-mono text-black/70">favicon.ico</div>
          </div>
          <div className="flex gap-1 text-[10px] font-mono text-black/50">
            <span>16×16</span>
            <span>·</span>
            <span>32×32</span>
          </div>
        </div>
      );

    case "video-aspect-ratio":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-black/60">16:9</span>
            <span className="text-black/40">→</span>
            <span className="rounded bg-[#7895B2] px-2 py-0.5 font-bold text-white">9:16 Vertical</span>
          </div>
          <span className="text-[11px] text-black/60">Smart Blur Fill</span>
        </div>
      );

    case "link-shortener":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <span className="font-mono text-xs font-semibold text-black">mrv.edge/launch</span>
          <span className="rounded-full bg-[#E8DFCA] px-2 py-0.5 text-[10px] font-mono font-medium text-black/70">
            7 Days Left
          </span>
        </div>
      );

    case "video-summarizer":
      return (
        <div className="flex flex-col gap-1.5 rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-2 text-[11px] font-mono text-black/70">
            <span className="rounded bg-black px-1.5 py-0.2 text-[10px] font-bold text-white">00:42</span>
            <span>Feature overview & navigation</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-black/70">
            <span className="rounded bg-black px-1.5 py-0.2 text-[10px] font-bold text-white">02:15</span>
            <span>Interactive hotspots breakdown</span>
          </div>
        </div>
      );

    case "subtitle-generator":
      return (
        <div className="flex flex-col gap-1.5 rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="rounded-lg bg-[#000000] px-3 py-1.5 text-center text-xs font-medium text-white">
            "Watch it click right here."
          </div>
          <div className="flex justify-between text-[10px] font-mono text-black/50 px-1">
            <span>00:03.120 → 00:05.400</span>
            <span>SRT / VTT</span>
          </div>
        </div>
      );

    case "youtube-title-generator":
      return (
        <div className="flex flex-col gap-1.5 rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center justify-between text-xs font-medium text-black">
            <span>"We Built an Interactive Screen Demo in 30s"</span>
            <span className="font-mono text-[10px] font-bold text-[#7895B2]">96%</span>
          </div>
          <span className="text-[10px] text-black/50">High-CTR Hook + SEO Description</span>
        </div>
      );

    case "content-repurposer":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-1.5">
            <span className="rounded-md bg-white border border-[#D6CCB5] px-2 py-0.5 text-[11px] font-medium text-black">LinkedIn</span>
            <span className="rounded-md bg-white border border-[#D6CCB5] px-2 py-0.5 text-[11px] font-medium text-black">X Thread</span>
          </div>
          <span className="font-mono text-[11px] font-bold text-[#7895B2]">1 → 4 Formats</span>
        </div>
      );

    case "product-description-generator":
      return (
        <div className="flex flex-col gap-1 rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="text-xs font-semibold text-black">Benefit-Led Narrative</div>
          <div className="text-[11px] text-black/60 line-clamp-1">"Turn quiet screen taps into engaging product stories..."</div>
        </div>
      );

    case "screenshot-to-guide":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#000000] text-[10px] font-bold text-white">1</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#000000] text-[10px] font-bold text-white">2</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#000000] text-[10px] font-bold text-white">3</span>
          </div>
          <span className="text-xs font-medium text-black/70">SOP & Tutorial Export</span>
        </div>
      );

    case "voiceover-generator":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex items-center gap-2">
            <Mic className="h-4 w-4 text-[#7895B2]" />
            <div className="flex items-end gap-1 h-4">
              <span className="w-1 bg-[#7895B2] h-2 rounded-full" />
              <span className="w-1 bg-[#7895B2] h-4 rounded-full" />
              <span className="w-1 bg-[#7895B2] h-3 rounded-full" />
              <span className="w-1 bg-[#7895B2] h-1 rounded-full" />
            </div>
          </div>
          <span className="rounded-full bg-white border border-[#D6CCB5] px-2 py-0.5 text-[10px] font-mono text-black">
            Studio Voice · 48kHz
          </span>
        </div>
      );

    case "demo-script-generator":
      return (
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F0] p-3.5 border border-[#E8DFCA]">
          <div className="flex gap-1.5 text-[11px] font-mono">
            <span className="text-black/60">Hook</span>
            <span className="text-black/30">→</span>
            <span className="text-black/60">Walkthrough</span>
            <span className="text-black/30">→</span>
            <span className="font-bold text-[#7895B2]">CTA</span>
          </div>
          <span className="text-[10px] text-black/50">3-Act Beat</span>
        </div>
      );

    default:
      return null;
  }
}

function Index() {
  const [filter, setFilter] = useState<"all" | "Free utility" | "AI tool">("all");
  const [activeAspect, setActiveAspect] = useState<"16:9" | "9:16" | "1:1">("16:9");

  const filteredTools = tools.filter((t) => {
    if (filter === "all") return true;
    return t.category === filter;
  });

  return (
    <div className="min-h-screen bg-[#E8DFCA] text-[#000000]">
      {/* ========================================================================
          1. HERO SECTION (APPLE MINIMAL EDITORIAL)
          ======================================================================== */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Eyebrow Chip */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D6CCB5] bg-[#FFFFFF] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#000000] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2E7D32]" />
              <span>19 BROWSER & AI TOOLS · ZERO SERVER UPLOADS</span>
            </div>
          </div>

          {/* Editorial Display Heading (Instrument Serif) */}
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[#000000] sm:text-6xl md:text-7xl lg:text-8xl">
              Every great product story starts with a crisp beat.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#2D2A26] sm:text-xl font-normal transition-all duration-300">
              Nineteen lightweight tools to trim clips, compress images, generate subtitles, and structure demo narratives. Processed instantly in your browser with zero latency.
            </p>

            {/* Apple Pill Action Group */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a href="#tools" className="btn-pure-black">
                Explore the 19 Tools
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={MARVEDGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-mist"
              >
                Experience Marvedge Platform
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Invariant Trust Strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#000000]/70 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#7895B2]" /> 100% Client-Side Privacy
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-[#7895B2]" /> WebAssembly & GPU Accelerated
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-[#7895B2]" /> 19 Modular Single-Purpose Tools
              </span>
            </div>
          </div>

          {/* ====================================================================
              2. APPLE-GRADE INTERACTIVE STUDIO CANVAS SHOWCASE
              ==================================================================== */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="overflow-hidden rounded-[2rem] border border-[#D6CCB5] bg-[#000000] p-4 shadow-2xl sm:p-8">
              {/* Top Viewport Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#D95338]" />
                  <span className="h-3 w-3 rounded-full bg-[#7895B2]" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="ml-3 hidden text-xs font-mono text-white/50 sm:inline-block">
                    marvedge.viewport // active-stream
                  </span>
                </div>

                {/* Aspect Ratio Switcher */}
                <div className="flex items-center rounded-full bg-white/10 p-1 text-xs">
                  {(["16:9", "9:16", "1:1"] as const).map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setActiveAspect(ratio)}
                      className={`rounded-full px-3 py-1 font-mono transition-all duration-200 ${
                        activeAspect === ratio
                          ? "bg-[#FFFFFF] text-[#000000] font-bold shadow-sm"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              {/* Viewport Canvas Screen */}
              <div className="relative mt-6 flex min-h-[280px] sm:min-h-[380px] items-center justify-center rounded-2xl bg-[#0F0F0F] p-6 transition-all duration-300">
                {/* Simulated Adaptive Frame */}
                <div
                  className={`relative flex flex-col justify-between rounded-xl border-2 border-[#7895B2] bg-[#1A1A1A] p-4 shadow-xl transition-all duration-300 ${
                    activeAspect === "16:9"
                      ? "h-[220px] w-full max-w-[420px] sm:h-[280px] sm:max-w-[500px]"
                      : activeAspect === "9:16"
                      ? "h-[260px] w-[160px] sm:h-[320px] sm:w-[190px]"
                      : "h-[200px] w-[200px] sm:h-[260px] sm:w-[260px]"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-white/60">
                    <span className="rounded bg-[#7895B2] px-1.5 py-0.5 font-bold text-white">
                      AUTO-CROP
                    </span>
                    <span className="font-mono text-[#AEBDCA]">Target 00:03.00</span>
                  </div>

                  {/* Subject Focus Corner Brackets */}
                  <div className="relative my-auto flex h-24 items-center justify-center rounded-lg border border-dashed border-[#AEBDCA]/40 bg-white/5">
                    <span className="text-xs font-medium text-white/80">Interactive Focal Subject</span>
                  </div>

                  {/* Telemetry line */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/50">
                    <span>1080p · 60fps</span>
                    <span>Wasm · 0ms delay</span>
                  </div>
                </div>
              </div>

              {/* Scrubber & Telemetry Controller */}
              <div className="mt-6 flex flex-col gap-3 rounded-xl bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFFFF] text-black">
                    <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                  </button>
                  <div className="text-xs font-mono tabular-nums text-white/90">
                    00:01.45 <span className="text-white/40">/ 00:03.00</span>
                  </div>
                </div>

                {/* Scrubber Bar */}
                <div className="relative h-2 flex-1 mx-3 rounded-full bg-white/10">
                  <div className="h-full w-1/2 rounded-full bg-[#7895B2]" />
                </div>

                <span className="text-xs font-mono text-[#AEBDCA]">
                  Instant Browser Render
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          3. CATEGORY FILTER (APPLE SEGMENTED CONTROL) & TOOL CATALOG
          ======================================================================== */}
      <section id="tools" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-[#D6CCB5] pb-8 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-black/60">
              MODULAR TOOL SUITE
            </div>
            <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-[#000000] sm:text-5xl">
              Nineteen tools. Zero compromise.
            </h2>
          </div>

          {/* Apple-style Segmented Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full border border-[#D6CCB5] bg-[#FFFFFF] p-1 shadow-sm">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  filter === "all"
                    ? "bg-[#000000] text-[#FFFFFF] shadow-sm"
                    : "text-[#000000]/70 hover:text-[#000000]"
                }`}
              >
                All 19 Tools
              </button>
              <button
                onClick={() => setFilter("Free utility")}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  filter === "Free utility"
                    ? "bg-[#000000] text-[#FFFFFF] shadow-sm"
                    : "text-[#000000]/70 hover:text-[#000000]"
                }`}
              >
                Free Utilities (11)
              </button>
              <button
                onClick={() => setFilter("AI tool")}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  filter === "AI tool"
                    ? "bg-[#000000] text-[#FFFFFF] shadow-sm"
                    : "text-[#000000]/70 hover:text-[#000000]"
                }`}
              >
                AI Studio & Voice (8)
              </button>
            </div>
          </div>
        </div>

        {/* ====================================================================
            4. VISUAL-FIRST BENTO GRID OF 19 TOOLS
            ==================================================================== */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((t, index) => {
            const toolNumber = String(tools.indexOf(t) + 1).padStart(2, "0");
            const isAI = t.category === "AI tool";

            return (
              <Link
                key={t.slug}
                to="/$slug"
                params={{ slug: t.slug }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D6CCB5] bg-[#FFFFFF] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#7895B2] hover:shadow-xl active:scale-[0.99]"
              >
                <div>
                  {/* Card Header: Number & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#000000]/40 group-hover:text-black">
                      #{toolNumber}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        isAI
                          ? "bg-[#7895B2]/15 text-[#7895B2]"
                          : "bg-[#E8DFCA] text-[#000000]/80"
                      }`}
                    >
                      {isAI ? <Sparkles className="h-3 w-3" /> : <Wrench className="h-3 w-3" />}
                      <span>{t.category}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-[#000000] group-hover:text-[#000000]">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#000000]/70 transition-all duration-200">
                    {t.tagline}
                  </p>

                  {/* Visual Miniature Section */}
                  <div className="mt-5">
                    <ToolVisualPreview slug={t.slug} />
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 flex items-center justify-between border-t border-[#E8DFCA] pt-4 text-xs font-semibold text-[#000000]">
                  <span className="text-[#000000]/60 group-hover:text-[#000000]">
                    Launch tool
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8DFCA] text-black transition-transform duration-200 group-hover:translate-x-1 group-hover:bg-[#000000] group-hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ========================================================================
          5. APPLE 3-PILLAR STORYTELLING ("ENGINEERING PRINCIPLES")
          ======================================================================== */}
      <section className="border-t border-[#D6CCB5] bg-[#E8DFCA]/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-black/60">
              ENGINEERING INTEGRITY
            </span>
            <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#000000] sm:text-5xl">
              Why running tools in your browser changes everything.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#D6CCB5] bg-[#FFFFFF] p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000000] text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#000000]">
                Absolute Privacy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#000000]/70">
                Your videos, documents, and images are processed using client-side WebAssembly, Canvas, and browser GPUs. They never upload to a cloud server.
              </p>
            </div>

            <div className="rounded-3xl border border-[#D6CCB5] bg-[#FFFFFF] p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000000] text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#000000]">
                Zero Upload Latency
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#000000]/70">
                Forget waiting for 500MB uploads on slow connections. Processing begins the millisecond you drop a file onto the canvas.
              </p>
            </div>

            <div className="rounded-3xl border border-[#D6CCB5] bg-[#FFFFFF] p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000000] text-white">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#000000]">
                A Bridge to Marvedge
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#000000]/70">
                When you're ready to elevate simple video clips into clickable, interactive walkthroughs and automated multi-lingual demos, Marvedge is one click away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          6. FLAGSHIP CONVERSION BANNER
          ======================================================================== */}
      <MarvedgeCTA context="Experience the full power of screen intelligence." />
    </div>
  );
}
