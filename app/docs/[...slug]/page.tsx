import dynamic from "next/dynamic";

const docPages: Record<string, any> = {
  "getting-started": dynamic(() => import("../getting-started")),
};

export default function DocsPage({ params }: { params: { slug: string[] } }) {
  const slug = params?.slug?.[0] || "introduction";
  const DocComponent = docPages[slug] || docPages["introduction"];
  return <DocComponent />;
}

export async function generateStaticParams() {
  return [
    { slug: ["getting-started"] },
  ];
}
