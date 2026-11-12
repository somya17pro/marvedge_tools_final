import { MARVEDGE_URL, type Tool } from "./tools";
import { freeToolSeo } from "./tool-seo-free";
import { aiToolSeo } from "./tool-seo-ai";
import type { ToolSeoData } from "./tool-seo-types";

export type {
  ToolCompatibilityRow,
  ToolEnvironmentCard,
  ToolRuleCard,
  ToolSeoData,
  ToolSpecItem,
  ToolStatusValue,
  ToolStepItem,
  ToolTroubleshootingItem,
} from "./tool-seo-types";

export const SITE_URL = "https://marvedge.com";

export const toolSeo: Record<string, ToolSeoData> = {
  ...freeToolSeo,
  ...aiToolSeo,
};

export function getToolSeo(slug: string): ToolSeoData {
  const data = toolSeo[slug];
  if (!data) {
    throw new Error(`Missing SEO data for tool slug: ${slug}`);
  }
  return data;
}

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

export function buildToolJsonLd(
  tool: Tool,
  seo: ToolSeoData,
  faqs: readonly { q: string; a: string }[],
): JsonObject {
  const pageUrl = `${SITE_URL}/${tool.slug}`;
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const webAppId = `${pageUrl}#webapp`;

  const graph: JsonObject[] = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: "Marvedge",
      url: MARVEDGE_URL,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: "Marvedge Tools",
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.seoTitle,
      description: seo.metaDescription,
      dateModified: seo.lastUpdatedIso,
      isPartOf: { "@id": websiteId },
      breadcrumb: { "@id": breadcrumbId },
      mainEntity: { "@id": webAppId },
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "All 19 tools",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: tool.category === "Free utility" ? "Free utilities" : "AI tools",
          item: `${SITE_URL}/#tools`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: tool.name,
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": webAppId,
      name: tool.name,
      url: pageUrl,
      description: seo.definitionLead,
      applicationCategory: seo.applicationCategory,
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript. Supported in modern desktop and mobile browsers.",
      featureList: [...seo.capabilities],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      creator: { "@id": orgId },
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: seo.howItWorks.heading,
      description: seo.howItWorks.intro,
      step: seo.howItWorks.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.body,
      })),
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
