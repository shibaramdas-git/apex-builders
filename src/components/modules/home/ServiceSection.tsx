import Link from "next/link";

export type ServiceSectionProps = {};

export default function ServiceSection(props: any) {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl font-light uppercase text-gray-600">
            {data.sectionPreheading || "OUR Services"}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            {data.heading || "Services"}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Left Services */}
          <div className="flex flex-col gap-6">
            {data.services
              .slice(0, Math.ceil(data.services.length / 2))
              .map((service) => (
                <ServiceItem key={service.id} service={service} />
              ))}
          </div>

          {/* Center Image */}
          <div className="border border-gray-300 w-full lg:w-1/3 h-64 bg-gray-200">
            <img
              src="/peoples/white-shirt.png"
              alt="Service Showcase"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Services */}
          <div className="flex flex-col gap-6">
            {data.services
              .slice(Math.ceil(data.services.length / 2))
              .map((service) => (
                <ServiceItem key={service.id} service={service} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ service }: { service: any }) {
  return (
    <div className="flex gap-4 items-start">
      {/* Icon */}
      <div className="flex justify-center items-center p-3 bg-yellow rounded-lg shadow-md">
        <img
          src={service.icon}
          alt={`${service.title} icon`}
          className="w-10 h-auto"
        />
      </div>

      {/* Content */}
      <div>
        <h5 className="text-lg font-semibold">
          <Link href={service.link} className="hover:text-yellow-500">
            {service.title}
          </Link>
        </h5>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
}

const data = {
  sectionPreheading: "What We Do",
  heading: "Services We Offer",
  image: "https://picsum.photos/800/350?random=1",
  services: [
    {
      id: 1,
      title: "Home Construction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
      icon: "/icons/settings.svg",
      link: "/services/01",
    },
    {
      id: 2,
      title: "Interior Designing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
      icon: "/icons/settings.svg",
      link: "/services/02",
    },
    {
      id: 3,
      title: "Renovation Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
      icon: "/icons/settings.svg",
      link: "/services/03",
    },
    {
      id: 4,
      title: "Architecture Planning  04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
      icon: "/icons/settings.svg",
      link: "/services/04",
    },
    {
      id: 5,
      title: "Renovation Service 05",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
      icon: "/icons/settings.svg",
      link: "/services/03",
    },
    {
      id: 6,
      title: "Architecture Planning 06",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
      icon: "/icons/settings.svg",
      link: "/services/04",
    },
  ],
};
