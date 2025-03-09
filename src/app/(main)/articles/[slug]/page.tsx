import Banner from "@/components/Banner";
import Blocks from "@/components/Blocks";
import { fetchSanityArticleBySlug } from "../../actions";
import Custom404 from "@/components/404";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await fetchSanityArticleBySlug({ slug: slug });

  if (!page) {
    return <Custom404 />;
  }

  return (
    <>
      <Banner
        heading={page?.title}
        path={"/articles/" + slug}
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <Blocks blocks={page?.blocks} />
    </>
  );
}
