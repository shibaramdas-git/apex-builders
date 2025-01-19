import Banner from "@/components/Banner";
import Blocks from "@/components/Blocks";
import fetchSanityPageBySlug from "../actions";
import Custom404 from "@/components/404";

export default async function Services() {
  const page = await fetchSanityPageBySlug({ slug: "home" });

  if (!page) {
    return <Custom404 />;
  }

  return (
    <>
      <Banner
        heading="Services"
        path="/services"
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <Blocks blocks={page?.blocks} />
    </>
  );
}
