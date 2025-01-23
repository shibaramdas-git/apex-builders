import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function ProjectSection(props: any) {
  const { sectionPreheading, heading, projects } = props;
  // console.log(props);
  return (
    <section>
      <div className="container py-12">
        <p className="text-xl md:text-2xl font-normal mb-2 text-center uppercase">
          {sectionPreheading || "OUR PROJECTS"}
        </p>
        <h2 className="text-3xl lg:text-4xl mb-3 text-center">
          {heading || "Lorem ipsum dolor sit amet."}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center">
          {projects.length > 0 &&
            projects.map((project: any, idx: number) => (
              <div
                key={project._id}
                className={cn(
                  `relative h-[300px] bg-cover bg-center bg-no-repeat shadow-md rounded-md hover:shadow-lg transition-shadow overflow-hidden`,
                  idx === 0 ? "md:col-span-2" : ""
                )}
              >
                <img
                  src={urlFor(project.thumbnailImage).url()}
                  alt="Thumbnail image"
                  className="object-cover w-full h-full absolute inset-0"
                />
                <div className="bg-black/60 absolute inset-0 h-full w-full"></div>
                <div className="flex flex-col pl-[8%] pr-3 justify-center items-start h-full w-full absolute z-10 hover:bg-black/65 hover:pl-[10%] transition-all duration-300">
                  <span className="text-xs md:text-sm font-semibold text-white mb-2 uppercase">
                    {project.category || "Category"}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-white mb-6">
                    {project.shortDescription}
                  </p>
                  <Link
                    href={`/projects/${project.slug.current}`}
                    className="bg-transparent px-4 py-2 text-yellow hover:bg-yellow hover:text-black font-semibold border-yellow border-[2px]"
                  >
                    {"EXPLORE PROJECT"}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

const projectSectionData = {
  sectionHeading: "work of excellence",
  heading: "OUR PROJECTS",
  projects: [
    {
      id: 1,
      title: "Modern Architecture",
      description: "A sleek and modern design for urban living spaces.",
      category: "Architecture",
      imageUrl: "https://picsum.photos/seed/modern/800/600",
      link: "#",
      span: "md:col-span-2",
    },
    {
      id: 2,
      title: "Eco-Friendly Design",
      description: "Sustainable homes designed for the future.",
      category: "Sustainability",
      imageUrl: "https://picsum.photos/seed/eco/800/600",
      link: "#",
    },
    {
      id: 3,
      title: "Luxury Villa",
      description: "Opulent villas crafted for premium comfort.",
      category: "Luxury",
      imageUrl: "https://picsum.photos/seed/luxury/800/600",
      link: "#",
    },
    {
      id: 4,
      title: "Urban Office Spaces",
      description: "Efficient office layouts for the modern workforce.",
      category: "Commercial",
      imageUrl: "https://picsum.photos/seed/office/800/600",
      link: "#",
    },
    {
      id: 5,
      title: "Cultural Center",
      description: "Spaces designed to celebrate local heritage.",
      category: "Cultural",
      imageUrl: "https://picsum.photos/seed/culture/800/600",
      link: "#",
    },
  ],
};
