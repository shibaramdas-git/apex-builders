import Banner from "@/components/Banner";
import { fetchAllProjects } from "../actions";
import Custom404 from "@/components/404";
import { Container } from "@/components/ui/container";
import ProjectCard, {
  IProject,
} from "@/components/modules/projects/projectCard";

export default async function ProjectsPage() {
  const projects = await fetchAllProjects();

  if (!projects) {
    return <Custom404 />;
  }
  return (
    <>
      <Banner
        heading="Our Projects"
        path={"/projects"}
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        {projects &&
          projects.map((project: IProject) => (
            <ProjectCard key={project.slug.current} project={project} />
          ))}
      </Container>
    </>
  );
}
