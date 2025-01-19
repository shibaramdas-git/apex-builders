import Banner from "@/components/Banner";
import Blocks from "@/components/Blocks";
import fetchSanityPageBySlug from "../actions";
import Custom404 from "@/components/404";

export default async function ProjectsPage() {
  const page = await fetchSanityPageBySlug({ slug: "home" });

  if (!page) {
    return <Custom404 />;
  }
  return (
    <>
      <Banner
        heading="Projects"
        path={"/projects"}
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <Blocks blocks={page?.blocks} />;
    </>
  );
}
