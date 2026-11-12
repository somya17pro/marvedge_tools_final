import { useState } from "react";
import { Briefcase, Check, FileText, Smartphone, ShoppingCart } from "lucide-react";
import { COUNTRY_SHAPES } from "@/lib/country-shapes";
import { PRESET_GROUPS, type Preset, type PresetGroup } from "@/lib/presets";

const fmtKB = (kb: number) => (kb >= 1024 ? `${kb / 1024} MB` : `${kb} KB`);

function GroupMark({ group }: { group: PresetGroup }) {
  if (group.shape) {
    return (
      <svg viewBox="0 0 100 100" className="h-10 w-10" aria-hidden="true">
        <path d={COUNTRY_SHAPES[group.shape]} className="fill-current" stroke="var(--background)" strokeWidth="1.2" />
      </svg>
    );
  }
  if (group.icon === "phone") return <Smartphone className="h-8 w-8" aria-hidden="true" />;
  if (group.icon === "file") return <FileText className="h-8 w-8" aria-hidden="true" />;
  if (group.icon === "cart") return <ShoppingCart className="h-8 w-8" aria-hidden="true" />;
  return <Briefcase className="h-8 w-8" aria-hidden="true" />;
}

/** Country/category cards + preset tiles. A preset reads as applied while the
 *  width, height and KB limit still match it — so typing over it clears the mark. */
export function PresetPicker({
  onPick,
  w,
  h,
  kb,
}: {
  onPick: (p: Preset) => void;
  w: number;
  h: number;
  kb: number | "";
}) {
  const [groupId, setGroupId] = useState(PRESET_GROUPS[0]!.id);
  const [catIndex, setCatIndex] = useState(0);
  const group = PRESET_GROUPS.find((g) => g.id === groupId) ?? PRESET_GROUPS[0]!;
  const cat = Math.min(catIndex, group.categories.length - 1);
  const active = group.categories[cat] ?? group.categories[0]!;

  const applied = (p: Preset) => p.w === w && p.h === h && (p.kb ?? "") === kb;

  const chooseGroup = (g: PresetGroup) => {
    setGroupId(g.id);
    setCatIndex(0);
  };

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-sm font-bold">Size presets — pick a country or a job</p>
        <p className="text-xs text-muted-foreground">Common official sizes; always confirm on the portal you upload to.</p>
      </div>

      <div role="group" aria-label="Country or category" className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-6">
        {PRESET_GROUPS.map((g) => {
          const on = g.id === groupId;
          const count = g.categories.reduce((n, c) => n + c.items.length, 0);
          return (
            <button
              key={g.id}
              type="button"
              aria-pressed={on}
              onClick={() => chooseGroup(g)}
              className={`group grid cursor-pointer gap-1 rounded-2xl border p-3 text-left transition-[transform,background-color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] ${
                on
                  ? "-translate-y-0.5 border-[#000000] bg-[#E8DFCA]/60 shadow-xs"
                  : "border-[#D6CCB5] bg-[#FAF7F0] hover:-translate-y-0.5 hover:border-[#7895B2] hover:bg-[#FFFFFF]"
              }`}
            >
              <span className={`flex h-11 items-center justify-center transition-colors ${on ? "text-[#000000]" : "text-[#4A4740] group-hover:text-[#000000]"}`}>
                <GroupMark group={g} />
              </span>
              <span className="flex items-center gap-1 text-sm font-bold leading-tight text-[#000000]">
                {g.flag && <span aria-hidden="true">{g.flag}</span>}
                {g.name}
              </span>
              <span className="text-xs leading-snug tabular-nums text-[#4A4740]">
                {count} sizes · {g.blurb}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 rounded-2xl border border-[#D6CCB5] bg-[#FAF7F0] p-3 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {group.categories.length > 1 &&
              group.categories.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  aria-pressed={i === cat}
                  onClick={() => setCatIndex(i)}
                  className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] ${
                    i === cat
                      ? "bg-[#000000] text-[#FFFFFF]"
                      : "border border-[#D6CCB5] bg-[#FFFFFF] text-[#4A4740] hover:border-[#7895B2] hover:text-[#000000]"
                  }`}
                >
                  {c.name} · {c.items.length}
                </button>
              ))}
          </div>
          <p className="text-xs font-semibold tabular-nums text-[#4A4740]">
            {group.name} — {active.name.toLowerCase()} {active.items.length}
          </p>
        </div>

        <div key={`${group.id}-${cat}`} className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {active.items.map((p, i) => {
            const on = applied(p);
            return (
              <button
                key={p.title}
                type="button"
                aria-pressed={on}
                onClick={() => onPick(p)}
                style={{ animationDelay: `${Math.min(i, 9) * 40}ms` }}
                className={`preset-in cursor-pointer rounded-xl border p-3 text-left transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7895B2] ${
                  on
                    ? "border-[#000000] bg-[#E8DFCA]/60 shadow-xs"
                    : "border-[#D6CCB5] bg-[#FFFFFF] hover:border-[#7895B2]"
                }`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-[#000000]">{p.title}</span>
                  {on && <Check className="h-4 w-4 shrink-0 text-[#000000]" aria-hidden="true" />}
                </span>
                <span className="mt-0.5 block text-xs tabular-nums text-[#4A4740]">
                  {p.w}×{p.h} px{p.mm ? ` · ${p.mm}` : ""}
                </span>
                {p.note && <span className="mt-0.5 block text-[11px] leading-snug text-[#4A4740]">{p.note}</span>}
                {p.kb != null && (
                  <span className="mt-2 inline-block rounded-full border border-[#D6CCB5] bg-[#FAF7F0] px-2 py-0.5 text-[11px] font-semibold tabular-nums text-[#000000]">
                    ≤ {fmtKB(p.kb)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
