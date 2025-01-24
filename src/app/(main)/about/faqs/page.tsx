import Banner from "@/components/Banner";
import Blocks from "@/components/Blocks";
import fetchSanityPageBySlug from "../../actions";
import Custom404 from "@/components/404";

export default async function AboutPage() {
  const page = await fetchSanityPageBySlug({ slug: "faqs" });

  if (!page) {
    return <Custom404 />;
  }

  return (
    <>
      <Banner
        heading="Frequently Asked Questions"
        path={"/about/faqs"}
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <Blocks blocks={page?.blocks} />
    </>
  );
}
