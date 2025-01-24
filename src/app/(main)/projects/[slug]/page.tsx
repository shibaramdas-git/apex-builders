import Banner from "@/components/Banner";
import Blocks from "@/components/Blocks";
import { fetchSanityProjectBySlug } from "../../actions";
import Custom404 from "@/components/404";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await fetchSanityProjectBySlug({ slug: slug });

  if (!page) {
    return <Custom404 />;
  }

  return (
    <>
      <Banner
        heading={page?.title}
        path={"/projects/" + slug}
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <Blocks blocks={page?.blocks} />
    </>
  );
}
