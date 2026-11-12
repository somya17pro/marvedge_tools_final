import { useState } from "react";
import { Plus } from "lucide-react";
import { toolFaqs, type ToolFaq } from "@/lib/tool-faqs";

export function ToolFaqSection({ slug, toolName }: { slug: string; toolName: string }) {
  const faqs: ToolFaq[] = toolFaqs[slug] || [];
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  if (faqs.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-14 sm:px-8">
      {/* Minimal Header */}
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="font-serif text-3xl font-normal tracking-tight text-balance text-[#000000] sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-pretty text-sm text-[#4A4740] sm:text-base">
          Common questions about {toolName} inputs, privacy, and exports.
        </p>
      </div>

      {/* Minimal Apple-Style Accordion List */}
      <div className="divide-y divide-[#D6CCB5]/70 border-y border-[#D6CCB5]/70">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          const panelId = `${slug}-faq-panel-${index}`;

          return (
            <div key={faq.q} className="group">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-xl py-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#E8DFCA]"
              >
                <span className="text-base font-medium tracking-tight text-[#000000] transition-colors group-hover:text-[#537190] sm:text-lg">
                  {faq.q}
                </span>

                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D6CCB5] bg-transparent text-[#000000] transition-[transform,background-color,border-color,color] duration-300 ${
                    isOpen
                      ? "rotate-45 border-[#000000] bg-[#000000] text-[#FFFFFF]"
                      : "group-hover:border-[#7895B2]"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>

              {/* Smooth Grid Accordion */}
              <div
                id={panelId}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] pb-6 opacity-100"
                    : "pointer-events-none grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pr-12 text-pretty text-sm leading-relaxed text-[#4A4740] sm:text-[15px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
