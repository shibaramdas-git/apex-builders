import Blocks from "@/components/Blocks";
import fetchSanityPageBySlug from "../actions";
import Custom404 from "@/components/Custom404";

export default async function QuotePage() {
  const page = await fetchSanityPageBySlug({ slug: "quote" });

  if (!page) {
    return <Custom404 />;
  }

  return <Blocks blocks={page?.blocks} />;
}
