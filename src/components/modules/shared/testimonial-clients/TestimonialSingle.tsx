import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSingle(props: any) {
  const { data } = props;
  return (
    <div className="mx-auto w-full max-w-lg">
      <Carousel>
        <CarouselContent className="w-full">
          {data.length > 0 &&
            data.map((slide: any) => {
              return (
                <CarouselItem className="bg-accent text-accent-foreground mx-auto">
                  <div className="h-60 flex items-center justify-center">
                    <div className="flex h-3/4 px-6">
                      <div>
                        <FaQuoteLeft className="text-3xl text-yellow italic" />
                      </div>
                      <div className="flex flex-col justify-between px-4">
                        <p>{slide.message || "Lorem ipsum dolor sit amet."}</p>
                        <div className="flex justify-between py-2">
                          <div className="flex gap-3 items-center ">
                            <img
                              src={
                                urlFor(slide.authorImage).url() ||
                                "https://picsum.photos/seed/person2/400/400"
                              }
                              alt="image"
                              className="w-[70px] h-auto rounded-md"
                            />
                            <div>
                              <h5 className="text-yellow uppercase text-base">
                                {slide.author || "John Doe"}
                              </h5>
                              <p className="text-sm">
                                {slide.position || "CEO"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="ml-[70px] rounded-sm hover:text-primary " />
        <CarouselNext className="mr-[70px] rounded-sm hover:text-primary " />
      </Carousel>
    </div>
  );
}
// const testimonialSingleData = [
//   {
//     quote:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos nulla voluptatibus ea nam libero a quibusdam esse consectetur consequuntur! Nihil.",
//     clientImage: "https://picsum.photos/seed/person1/400/400",
//     clientName: "Alice Johnson",
//     position: "CEO, ABC Corp",
//     companyLogo: "/logos/thebuilt-logo-2.png",
//   },
//   {
//     quote:
//       "Quisquam error voluptate fugiat consequuntur nisi, unde vero. Sunt animi aliquid saepe rerum placeat at, quibusdam soluta temporibus nulla fugiat.",
//     clientImage: "https://picsum.photos/seed/person2/400/400",
//     clientName: "Bob Smith",
//     position: "Marketing Manager, XYZ Ltd",
//   },
//   {
//     quote:
//       "Ut labore et dolore magna aliqua. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
//     clientImage: "https://picsum.photos/seed/person3/400/400",
//     clientName: "Catherine Lee",
//     position: "Product Manager, MNO Inc",
//     companyLogo: "/logos/thebuilt-logo-2.png",
//   },
//   {
//     quote:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
//     clientImage: "https://picsum.photos/seed/person4/400/400",
//     clientName: "David Clark",
//     position: "CTO, DEF Group",
//     companyLogo: "/logos/thebuilt-logo-2.png",
//   },
// ];
