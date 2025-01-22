import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export type ServiceSectionProps = {};

// const data = {
//   sectionPreheading: "What We Do",
//   heading: "Services We Offer",
//   image: "https://picsum.photos/800/350?random=1",
//   services: [
//     {
//       id: 1,
//       title: "Home Construction",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
//       icon: "/icons/settings.svg",
//       link: "/services/01",
//     },
//     {
//       id: 2,
//       title: "Interior Designing",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
//       icon: "/icons/settings.svg",
//       link: "/services/02",
//     },
//     {
//       id: 3,
//       title: "Renovation Services",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
//       icon: "/icons/settings.svg",
//       link: "/services/03",
//     },
//     {
//       id: 4,
//       title: "Architecture Planning  04",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
//       icon: "/icons/settings.svg",
//       link: "/services/04",
//     },
//     {
//       id: 5,
//       title: "Renovation Service 05",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
//       icon: "/icons/settings.svg",
//       link: "/services/03",
//     },
//     {
//       id: 6,
//       title: "Architecture Planning 06",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, accusantium.",
//       icon: "/icons/settings.svg",
//       link: "/services/04",
//     },
//   ],
// };

export default function ServiceSection(props: any) {
  const { heading, sectionPreheading } = props;

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
        {props.design && props.design === "designOne" ? (
          <ServiceDesign1 {...props} />
        ) : (
          <ServiceDesign2 {...props} />
        )}
      </div>
    </section>
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
  const { image, services } = props;

  return (
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
  );
}

// --------------------------------------------------------------------------
// Design 02
// --------------------------------------------------------------------------
function ServiceDesign2(props: any) {
  const { services } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      {services.map((service: any) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <div className="group bg-slate-100 dark:bg-black/60 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
      {/* Icon */}
      <div className="flex justify-center items-center w-16 h-14 mx-auto border-b-2 border-yellow mb-2">
        <img
          src={urlFor(service.icon).url()}
          alt={`${service.title} icon`}
          className="w-10 p-1 rounded-md h-auto border-b-2 border-yellow bg-slate-100"
        />
      </div>

      {/* Content */}
      <h5 className="text-center text-lg md:text-lg font-bold mb-2 text-text-black group-hover:text-yellow">
        <Link href={`/services/${service.slug.current}`}>{service.title}</Link>
      </h5>
      <p className="text-center text-sm text-gray-600">
        {service.shortDescription}
      </p>
    </div>
  );
}
