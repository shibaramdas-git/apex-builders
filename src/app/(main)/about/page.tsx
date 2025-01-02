import Banner from "@/components/Banner";
import Blocks from "@/components/Blocks";
import fetchSanityPageBySlug from "../actions";
import Custom404 from "@/components/404";

export default async function AboutPage() {
  const page = await fetchSanityPageBySlug({ slug: "about" });

  if (!page) {
    return <Custom404 />;
  }

  return (
    <section className="">
      <Banner
        heading="About US"
        path={"/about"}
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <Blocks blocks={page?.blocks} />;
    </section>
  );
}
