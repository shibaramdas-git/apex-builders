import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { urlFor } from "@/sanity/lib/image";

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
          <h3 className="text-xl md:text-2xl font-normal mb-2 uppercase text-muted-foreground">
            {sectionPreheading || "OUR Services"}
          </h3>
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
      <div className="flex justify-center items-center p-3 rounded-lg shadow-sm bg-primary dark:bg-accent-foreground">
        <Image
          src={urlFor(service.icon).url()}
          alt={`${service.title} icon`}
          className="w-10 h-auto"
          width={40}
          height={40}
        />
      </div>

      {/* Content */}
      <div>
        <h5 className="text-lg font-semibold text-foreground">
          <Link
            href={`/services/${service.slug.current}`}
            className="hover:text-primary"
          >
            {service.title}
          </Link>
        </h5>
        <p className="text-muted-foreground">{service.shortDescription}</p>
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
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-stretch">
      {/* Left Services */}
      <div className="flex flex-col gap-6">
        {services
          .slice(0, Math.ceil(services.length / 2))
          .map((service: any, idx: number) => (
            <ServiceItem key={service._key} service={service} idx={idx} />
          ))}
      </div>

      {/* Center Image */}
      {image && (
        <div className="w-full lg:w-1/3 h-full lg:h-[350px]">
          <Image
            src={urlFor(image).url()}
            alt="Service Showcase"
            width={800}
            height={1200}
            className="h-full w-full object-cover bg-position-center"
          />
        </div>
      )}

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
    <div className="group bg-card text-card-foreground rounded-lg border shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Icon */}
      <div className="flex justify-center items-center w-16 h-14 mx-auto border-b-2 border-primary mb-2">
        <Image
          src={urlFor(service.icon).url()}
          alt={`${service.title} icon`}
          width={40}
          height={40}
          className="object-contain w-10 p-1 rounded-md h-auto border-b-2 border-primary dark:bg-accent-foreground "
        />
      </div>

      {/* Content */}
      <h5 className="text-center text-lg md:text-lg font-bold mb-2 text-foreground group-hover:text-primary">
        <Link href={`/services/${service.slug.current}`}>{service.title}</Link>
      </h5>
      <p className="text-center text-sm text-muted-foreground">
        {service.shortDescription}
      </p>
    </div>
  );
}
