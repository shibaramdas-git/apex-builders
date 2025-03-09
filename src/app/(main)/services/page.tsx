import Banner from "@/components/Banner";
import Blocks from "@/components/Blocks";
import fetchSanityPageBySlug, { fetchAllServices } from "../actions";
import Custom404 from "@/components/404";
import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";
import PortableTextRenderer from "@/components/PortableText";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default async function Services() {
  const page = await fetchAllServices();
  console.log(page);

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
      <Container className="py-10">
        {page && (
          <ul className="space-y-10">
            {page.map((service: any, index: number) => (
              <li key={service._id}>
                <Card
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg",
                    index % 2 === 0 ? "bg-muted" : ""
                  )}
                >
                  {/* Image Section */}
                  <div className="flex-shrink-0 bg-primary self-start">
                    <Image
                      src={urlFor(service.icon).url()}
                      alt={service.title}
                      width={60}
                      height={60}
                      className="rounded-lg p-2"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="space-y-3">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <Separator className="bg-black w-3/4" />
                    <PortableTextRenderer
                      content={service.detailedDescription}
                    />
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
