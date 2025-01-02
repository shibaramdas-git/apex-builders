import Custom404 from "@/components/404";
import fetchSanityPageBySlug from "../actions";
import Blocks from "@/components/Blocks";

// Dynamic page for all sanity pages.
export default async function DynamicPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = await fetchSanityPageBySlug({ slug: params.slug });

  if (!page) {
    return (
      <div>
        <Custom404 />
      </div>
    );
  }

  return <Blocks blocks={page?.blocks} />;
}
