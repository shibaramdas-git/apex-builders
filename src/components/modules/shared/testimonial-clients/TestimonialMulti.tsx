import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export default function TestimonialMulti(props: any) {
  const { data } = props;
  return (
    <Carousel className="container">
      <CarouselContent>
        {data.length > 0 &&
          data.map((testimonial: any) => {
            return (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3 pl-2"
                key={testimonial._key}
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  const { author, authorImage, message, rating, position } = testimonial;
  // console.log(testimonial);

  return (
    <div className="bg-secondary border text-secondary-foreground rounded-lg shadow-md p-6 max-w-[350px] mx-auto h-[340px] ">
      {/* Avatar */}
      <div className="flex justify-center">
        <Image
          src={urlFor(authorImage).url()}
          alt={author}
          height={100}
          width={100}
          className="w-24 h-24 rounded-full border-2 border-primary object-cover"
        />
      </div>

      {/* Name and Position */}
      <div className="text-center mt-4">
        <h5 className="text-xl font-bold text-primary">{author}</h5>
        <p className="text-sm text-muted-foreground ">{position}</p>
      </div>

      {/* Message */}
      <p className="mt-4 italic text-center">"{message}"</p>

      {/* Rating */}
      <div className="flex justify-center text-primary mt-4">
        {[...Array(rating)].map((_, index: number) => (
          <div className="text-3xl" key={index}>
            <IoStarSharp />
          </div>
        ))}
      </div>
    </div>
  );
}
