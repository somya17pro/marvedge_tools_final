import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getTool, MARVEDGE_URL, type Tool } from "@/lib/tools";
import { getToolSeo } from "@/lib/tool-seo";
import { ToolWorkspace } from "./tools/registry";
import { ToolEditorialSections } from "./ToolSections";
import { ToolFaqSection } from "./ToolFaq";

export function ToolPage({ tool }: { tool: Tool }) {
  const isUtility = tool.category === "Free utility";
  const seo = getToolSeo(tool.slug);
  const statusCopy =
    tool.slug === "link-shortener"
      ? "Free utility · Instant short links"
      : isUtility
        ? "Free utility · Runs locally in your browser"
        : "AI tool · Ephemeral cloud processing";

  return (
    <div className="min-h-screen bg-[#E8DFCA] text-[#000000]">
      {/* HERO, DEFINITION LEAD & INTERACTIVE TOOL WORKSPACE */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 sm:pt-10">
        <div className="mb-8 animate-fade-up">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#4A4740]">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-medium text-[#000000] transition-colors hover:text-[#537190] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              All 19 tools
            </Link>
            <span className="text-[#D6CCB5]" aria-hidden="true">
              /
            </span>
            <span>{statusCopy}</span>
          </div>

          <h1 className="font-serif text-4xl font-normal leading-[1.06] tracking-tight text-balance text-[#000000] sm:text-5xl md:text-[3.5rem]">
            {tool.name}
          </h1>

          <p className="mt-3 max-w-3xl text-pretty text-base leading-relaxed text-[#4A4740] sm:text-lg">
            {seo.definitionLead}
          </p>
        </div>

        <ToolWorkspace slug={tool.slug} />

        {/* QUIET INLINE CAPABILITY HIGHLIGHTS */}
        <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#4A4740]">
          {seo.capabilities.map((cap) => (
            <li key={cap} className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#537190]" aria-hidden="true" />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* MINIMALIST EDITORIAL GUIDE & SPECIFICATIONS */}
      <ToolEditorialSections seo={seo} />

      {/* FAQ ACCORDION (SYNCED WITH FAQPAGE JSON-LD) */}
      <ToolFaqSection slug={tool.slug} toolName={tool.name} />

      {/* BOTTOM CONVERSION BANNER & INTERNAL LINKS */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-[#000000] p-8 text-[#FFFFFF] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)] md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-balance text-[#FFFFFF] sm:text-4xl">
              Want to enjoy the full potential?
            </h2>
            <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-[#AEBDCA] sm:text-base">
              Turn your product into interactive demos that sell, onboard, and explain with
              Marvedge.
            </p>
          </div>
          <div className="flex shrink-0 items-center">
            <a
              href={MARVEDGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-5 py-3 text-xs font-semibold text-[#000000] shadow-md transition-[background-color,transform] duration-150 hover:bg-[#E8DFCA] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AEBDCA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000000]"
            >
              Sign up <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* RELATED TOOLS */}
        <div className="mt-12 border-t border-[#D6CCB5] pt-8">
          <h2 className="font-serif text-2xl font-normal tracking-tight text-[#000000]">
            Related tools
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tool.related.map((slug) => {
              const r = getTool(slug);
              return (
                <Link
                  key={slug}
                  to="/$slug"
                  params={{ slug }}
                  className="group rounded-2xl border border-[#D6CCB5] bg-[#FFFFFF]/80 px-5 py-4 transition-[border-color,background-color] duration-150 hover:border-[#000000]/40 hover:bg-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2]"
                >
                  <p className="font-serif text-xl font-normal text-[#000000] group-hover:underline">
                    {r.name}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#4A4740]">{r.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
