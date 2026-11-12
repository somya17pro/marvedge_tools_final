import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { MARVEDGE_URL } from "@/lib/tools";

export function MarvedgeCTA({ context }: { context?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#000000] p-8 text-[#FFFFFF] shadow-2xl sm:p-14 lg:p-16">
        {/* Subtle structural ambient grid line */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#AEBDCA]">
              <Sparkles className="h-3.5 w-3.5 text-[#7895B2]" />
              <span>THE MARVEDGE PLATFORM</span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-[#FFFFFF] sm:text-5xl">
              Turn everyday screen recordings into interactive product demos.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#AEBDCA] sm:text-lg">
              {context ?? "These 19 utilities are lightweight stepping stones."} Marvedge transforms your screen captures into click-through interactive showcases, auto-reframes to 9:16 mobile feeds, and translates voiceovers across 30 languages.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={MARVEDGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-6 py-3.5 text-sm font-semibold text-[#000000] shadow-md transition-all duration-200 hover:bg-[#E8DFCA] hover:shadow-lg active:scale-[0.98]"
              >
                <span>Explore the Marvedge Platform</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={MARVEDGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-3.5 text-sm font-medium text-[#FFFFFF] transition-colors hover:border-white/40 hover:bg-white/5 active:scale-[0.98]"
              >
                <Play className="h-3.5 w-3.5 fill-current text-[#7895B2]" />
                <span>Watch 60s Demo</span>
              </a>
            </div>
          </div>

          {/* Apple-style Interactive Screen Preview Mockup */}
          <div className="relative rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-inner">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#D95338]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#7895B2]" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <span className="font-mono text-[11px] text-white/50">marvedge.engine // live</span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs">
                <span className="text-white/80">Auto-Reframe Subject Lock</span>
                <span className="rounded-md bg-[#7895B2]/20 px-2 py-0.5 font-mono text-[11px] text-[#7895B2]">
                  Active · 9:16
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs">
                <span className="text-white/80">Synthetic Voice Generation</span>
                <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[11px] text-[#AEBDCA]">
                  Studio Model · 0.2s latency
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs">
                <span className="text-white/80">Interactive Hotspot Telemetry</span>
                <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[11px] text-white/90">
                  Click-to-Advance
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-[#7895B2]/40 bg-[#7895B2]/5 p-3 text-center text-xs text-[#7895B2]">
              Interactive canvas ready · Zero install required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#D6CCB5] bg-[#E8DFCA] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000000] text-xs font-semibold text-[#FFFFFF]">
            M
          </span>
          <p className="text-xs text-[#000000]/70">
            © {new Date().getFullYear()} Marvedge Inc. 19 Browser-Native & AI Media Tools.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-[#000000]/75">
          <Link
            to="/"
            className="rounded transition-colors hover:text-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]"
          >
            All 19 Tools
          </Link>
          <span className="text-[#D6CCB5]">·</span>
          <span className="text-[#000000]/70">Client-Side Wasm &amp; GPU</span>
          <span className="text-[#D6CCB5]">·</span>
          <a
            href={MARVEDGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded font-semibold text-[#000000] hover:text-[#537190] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]"
          >
            marvedge.com <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
