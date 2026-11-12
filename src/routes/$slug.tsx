import { createFileRoute, notFound } from "@tanstack/react-router";
import { tools } from "@/lib/tools";
import { toolFaqs } from "@/lib/tool-faqs";
import { buildToolJsonLd, getToolSeo, SITE_URL } from "@/lib/tool-seo";
import { ToolPage } from "@/components/ToolPage";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const tool = tools.find((t) => t.slug === params.slug);
    if (!tool) throw notFound();
    return { tool };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.tool;
    if (!t) {
      return {
        meta: [
          { title: "Tool not found | Marvedge" },
          { name: "description", content: "This tool could not be found." },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const seo = getToolSeo(t.slug);
    const faqs = toolFaqs[t.slug] ?? [];
    const pageUrl = `${SITE_URL}/${t.slug}`;
    return {
      meta: [
        { title: seo.seoTitle },
        { name: "description", content: seo.metaDescription },
        { property: "og:title", content: seo.seoTitle },
        { property: "og:description", content: seo.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: pageUrl },
        { property: "og:site_name", content: "Marvedge" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.seoTitle },
        { name: "twitter:description", content: seo.metaDescription },
        { "script:ld+json": buildToolJsonLd(t, seo, faqs) },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
    };
  },
  component: Page,
});

function Page() {
  const { tool } = Route.useLoaderData();
  return <ToolPage key={tool.slug} tool={tool} />;
}
