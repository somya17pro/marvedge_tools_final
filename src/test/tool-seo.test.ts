import { describe, expect, it } from "vitest";
import { tools } from "@/lib/tools";
import { toolFaqs } from "@/lib/tool-faqs";
import { buildToolJsonLd, getToolSeo, SITE_URL, toolSeo } from "@/lib/tool-seo";

const BANNED_PHRASES =
  /\b(seamlessly|seamless|comprehensive|leverage|robust|streamline|effortlessly|effortless|delve|cutting-edge|unlock|empower)\b/i;

describe("tool SEO & Schema.org coverage", () => {
  it("provides concise, complete SEO data for all 19 tools", () => {
    expect(Object.keys(toolSeo).length).toBe(tools.length);
    for (const tool of tools) {
      const seo = getToolSeo(tool.slug);
      expect(seo.seoTitle.endsWith("| Marvedge")).toBe(true);
      expect(seo.seoTitle.length).toBeGreaterThanOrEqual(30);
      expect(seo.seoTitle.length).toBeLessThanOrEqual(62);
      expect(seo.metaDescription.length).toBeGreaterThanOrEqual(110);
      expect(seo.metaDescription.length).toBeLessThanOrEqual(160);
      expect(seo.capabilities).toHaveLength(4);
      expect(seo.howItWorks.steps).toHaveLength(3);
      expect(seo.environments.cards).toHaveLength(3);
      expect(seo.specs.items).toHaveLength(6);
      expect(seo.specs.callouts).toHaveLength(3);
      expect(seo.compatibility.rows.length).toBeGreaterThanOrEqual(4);
      expect(seo.troubleshooting.items.length).toBeGreaterThanOrEqual(4);
      expect(seo.privacy.paragraphs).toHaveLength(2);
    }
  });

  it("contains zero em dashes or AI cliché phrasing across SEO data and FAQs", () => {
    const serialized = JSON.stringify({ toolSeo, toolFaqs });
    expect(serialized).not.toContain("\u2014");
    expect(serialized).not.toMatch(BANNED_PHRASES);
  });

  it("builds valid @graph JSON-LD synced with FAQ items for every tool", () => {
    for (const tool of tools) {
      const seo = getToolSeo(tool.slug);
      const faqs = toolFaqs[tool.slug] ?? [];
      expect(faqs.length).toBeGreaterThan(0);

      const schema = buildToolJsonLd(tool, seo, faqs);
      const roundTripped = JSON.parse(JSON.stringify(schema)) as {
        "@context": string;
        "@graph": Array<Record<string, unknown>>;
      };

      expect(roundTripped["@context"]).toBe("https://schema.org");
      const types = roundTripped["@graph"].map((node) => node["@type"]);
      expect(types).toEqual([
        "Organization",
        "WebSite",
        "WebPage",
        "BreadcrumbList",
        "WebApplication",
        "HowTo",
        "FAQPage",
      ]);

      const webPage = roundTripped["@graph"][2]!;
      expect(webPage["url"]).toBe(`${SITE_URL}/${tool.slug}`);

      const webApp = roundTripped["@graph"][4]!;
      expect(webApp["name"]).toBe(tool.name);
      expect(webApp["offers"]).toEqual({
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      });

      const faqNode = roundTripped["@graph"][6]!;
      expect((faqNode["mainEntity"] as unknown[]).length).toBe(faqs.length);
    }
  });
});
