import Link from "next/link";

export default function ProjectSection() {
  return (
    <section>
      <div className="container py-12">
        <h3 className="text-xl md:text-2xl font-normal mb-2 text-center">
          {projectSectionData.sectionHeading || "OUR PROJECTS"}
        </h3>
        <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 items-center">
          {projectSectionData.projects.map((project) => (
            <div
              key={project.id}
              className={`relative h-[300px] bg-cover bg-center bg-no-repeat shadow-md rounded-lg hover:shadow-lg transition-shadow ${
                project.span || ""
              }`}
            >
              <img
                src={project.imageUrl}
                alt="image"
                className="object-cover"
              />
              <div className="bg-black/50 absolute inset-0 h-full w-full"></div>
              <div className="flex flex-col pl-[8%] pr-3 justify-center items-start h-full w-full absolute z-50 hover:bg-black/65 hover:pl-[10%] transition-all duration-300">
                <span className="text-xs md:text-sm font-semibold text-white mb-2 uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-white mb-6">
                  {project.description}
                </p>
                <Link
                  href={project.link}
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
  sectionHeading: "OUR PROJECTS",
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
