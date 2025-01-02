import Blocks from "@/components/Blocks";
import fetchSanityPageBySlug from "./actions";
import Custom404 from "@/components/404";

export default async function IndexPage() {
  const page = await fetchSanityPageBySlug({ slug: "home" });
  if (!page) {
    return <Custom404 />;
  }

  return <Blocks blocks={page?.blocks} />;
}
