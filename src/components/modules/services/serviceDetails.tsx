import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PortableTextRenderer from "@/components/PortableText";

export default function ServiceDetails({ page }: { page: any[] }) {
  return (
    <Container className="py-10">
      {page && (
        <ul className="space-y-10">
          {page.map((service: any, index: number) => (
            <li key={service._id}>
              <Card
                className={cn(
                  "flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg",
                  index % 2 === 0
                    ? "bg-muted text-primary"
                    : "bg-primary text-white"
                )}
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <Image
                    src={urlFor(service.icon).url()}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="rounded-md shadow-md"
                  />
                </div>

                {/* Content Section */}
                <CardContent className="space-y-3">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <PortableTextRenderer content={service.detailedDescription} />
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
