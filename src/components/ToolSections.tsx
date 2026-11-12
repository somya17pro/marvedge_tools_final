import type { ToolSeoData, ToolStatusValue } from "@/lib/tool-seo";

const STATUS_STYLE: Record<ToolStatusValue, { mark: string; cls: string }> = {
  Yes: { mark: "✓ Yes", cls: "font-semibold text-[#14532D]" },
  Partial: { mark: "◐ Partial", cls: "font-semibold text-[#78350F]" },
  No: { mark: "✕ No", cls: "font-medium text-[#4A4740]" },
};

export function ToolEditorialSections({ seo }: { seo: ToolSeoData }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-16 px-5 pb-8 pt-6 sm:px-8 sm:pb-12">
      {/* 1. HOW IT WORKS IN 3 STEPS (SYNCED WITH HOWTO JSON-LD) */}
      <section className="border-t border-[#D6CCB5] pt-12">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-balance text-[#000000] sm:text-4xl">
            {seo.howItWorks.heading}
          </h2>
          <p className="mt-2.5 text-pretty text-sm leading-relaxed text-[#4A4740] sm:text-base">
            {seo.howItWorks.intro}
          </p>
        </div>

        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {seo.howItWorks.steps.map((step, idx) => (
            <li key={step.title} className="grid content-start gap-2.5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#000000] text-xs font-semibold tabular-nums text-[#FFFFFF]">
                {idx + 1}
              </span>
              <h3 className="mt-1 font-serif text-xl font-normal leading-snug tracking-tight text-[#000000] sm:text-2xl">
                {step.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-[#4A4740]">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 2. ENVIRONMENTS & WORKFLOW SETUP */}
      <section className="border-t border-[#D6CCB5] pt-12">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-balance text-[#000000] sm:text-4xl">
            {seo.environments.heading}
          </h2>
          <p className="mt-2.5 text-pretty text-sm leading-relaxed text-[#4A4740] sm:text-base">
            {seo.environments.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {seo.environments.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#D6CCB5] bg-[#FAF7F0]/80 p-6"
            >
              <h3 className="font-serif text-xl font-normal tracking-tight text-[#000000] sm:text-2xl">
                {card.title}
              </h3>
              <ul className="mt-3.5 grid gap-2">
                {card.steps.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm leading-relaxed text-[#4A4740]"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#537190]"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 text-pretty text-xs leading-relaxed text-[#4A4740] sm:text-sm">
          {seo.environments.note}
        </p>
      </section>

      {/* 3. SPECIFICATIONS GRID & TECHNICAL TAKEAWAYS */}
      <section className="border-t border-[#D6CCB5] pt-12">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-balance text-[#000000] sm:text-4xl">
            {seo.specs.heading}
          </h2>
          <p className="mt-2.5 text-pretty text-sm leading-relaxed text-[#4A4740] sm:text-base">
            {seo.specs.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[#D6CCB5] bg-[#D6CCB5] sm:grid-cols-2 lg:grid-cols-3">
          {seo.specs.items.map((spec) => (
            <div key={spec.label} className="bg-[#FFFFFF] p-5 sm:p-6">
              <p className="text-xs font-medium text-[#537190]">{spec.label}</p>
              <p className="mt-1 font-serif text-2xl font-normal tracking-tight tabular-nums text-[#000000]">
                {spec.value}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#4A4740]">{spec.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {seo.specs.callouts.map((note) => (
            <div key={note.title}>
              <h3 className="text-sm font-semibold text-[#000000]">{note.title}</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-[#4A4740]">
                {note.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COMPATIBILITY TABLE */}
      <section className="border-t border-[#D6CCB5] pt-12">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-balance text-[#000000] sm:text-4xl">
            {seo.compatibility.heading}
          </h2>
          <p className="mt-2.5 text-pretty text-sm leading-relaxed text-[#4A4740] sm:text-base">
            {seo.compatibility.intro}
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-[#D6CCB5] bg-[#FFFFFF]">
          <table className="w-full min-w-[580px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#D6CCB5] bg-[#FAF7F0]">
                <th scope="col" className="px-5 py-3.5 text-xs font-semibold text-[#4A4740]">
                  {seo.compatibility.columns[0]}
                </th>
                <th scope="col" className="w-28 px-5 py-3.5 text-xs font-semibold text-[#4A4740]">
                  {seo.compatibility.columns[1]}
                </th>
                <th scope="col" className="px-5 py-3.5 text-xs font-semibold text-[#4A4740]">
                  {seo.compatibility.columns[2]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6CCB5]/70">
              {seo.compatibility.rows.map((row) => {
                const st = STATUS_STYLE[row.status];
                return (
                  <tr key={row.target} className="hover:bg-[#FAF7F0]/50">
                    <th scope="row" className="px-5 py-3.5 font-medium text-[#000000]">
                      {row.target}
                    </th>
                    <td className="px-5 py-3.5 whitespace-nowrap text-xs">
                      <span className={st.cls}>{st.mark}</span>
                    </td>
                    <td className="px-5 py-3.5 leading-relaxed text-[#4A4740]">{row.detail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. TROUBLESHOOTING */}
      <section className="border-t border-[#D6CCB5] pt-12">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-balance text-[#000000] sm:text-4xl">
            {seo.troubleshooting.heading}
          </h2>
          <p className="mt-2.5 text-pretty text-sm leading-relaxed text-[#4A4740] sm:text-base">
            {seo.troubleshooting.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {seo.troubleshooting.items.map((item) => (
            <div key={item.issue} className="border-t border-[#D6CCB5]/70 pt-4">
              <h3 className="text-sm font-semibold text-[#000000] sm:text-base">{item.issue}</h3>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-[#4A4740]">
                {item.fix}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRIVACY & OWNERSHIP RULES */}
      <section className="border-t border-[#D6CCB5] pt-12">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-balance text-[#000000] sm:text-4xl">
            {seo.privacy.heading}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-[#4A4740] sm:text-base">
            {seo.privacy.paragraphs[0]}
          </p>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-[#4A4740] sm:text-base">
            {seo.privacy.paragraphs[1]}
          </p>
        </div>
      </section>
    </div>
  );
}
