import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export type ServiceSectionProps = {};

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

export default function ServiceSection(props: any) {
  console.log(props);
  return (
    <>
      {props.design && props.design === "designOne" ? (
        <ServiceDesign1 {...props} />
      ) : (
        <ServiceDesign2 />
      )}
    </>
  );
}
function ServiceItem({ service, idx }: { service: any; idx: number }) {
  return (
    <div className="flex gap-4 items-start">
      {/* Icon */}
      <div className="flex justify-center items-center p-3 bg-yellow rounded-lg shadow-md">
        <img
          src={urlFor(service.icon).url()}
          alt={`${service.title} icon`}
          className="w-10 h-auto"
        />
      </div>

      {/* Content */}
      <div>
        <h5 className="text-lg font-semibold">
          <Link
            href={`/services/${service.slug.current}`}
            className="hover:text-yellow-500"
          >
            {service.title}
          </Link>
        </h5>
        <p className="text-gray-600">{service.shortDescription}</p>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// Design 01 Default
// --------------------------------------------------------------------------
function ServiceDesign1(props: any) {
  const { heading, image, sectionPreheading, services } = props;
  // console.log(props);
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl font-light uppercase text-gray-600">
            {sectionPreheading || "OUR Services"}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            {heading || "Services"}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Left Services */}
          <div className="flex flex-col gap-6">
            {services
              .slice(0, Math.ceil(services.length / 2))
              .map((service: any, idx: number) => (
                <ServiceItem key={service._key} service={service} idx={idx} />
              ))}
          </div>

          {/* Center Image */}
          <div className="border border-gray-300 w-full lg:w-1/3 h-64 bg-gray-200">
            <img
              src={urlFor(image).url()}
              alt="Service Showcase"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Services */}
          <div className="flex flex-col gap-6">
            {services
              .slice(Math.ceil(services.length / 2))
              .map((service: any, idx: number) => (
                <ServiceItem key={service._key} service={service} idx={idx} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------------------------
// Design 02
// --------------------------------------------------------------------------

function ServiceDesign2() {
  return <div>Design 02</div>;
}
