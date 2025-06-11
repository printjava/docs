import dynamic from "next/dynamic";

const examplePages: Record<string, any> = {
  "example-1": dynamic(() => import("../example-1")),
  "example-2": dynamic(() => import("../example-2")),
};

export default function ExamplesPage({ params }: { params: { slug: string[] } }) {
  const slug = params?.slug?.[0] || "example-1";
  const ExampleComponent = examplePages[slug] || examplePages["example-1"];
  return <ExampleComponent />;
}

export async function generateStaticParams() {
  return [
    { slug: ["example-1"] },
    { slug: ["example-2"] },
  ];
}
