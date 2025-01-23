import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import { IoStarSharp } from "react-icons/io5";

export default function TestimonialMulti(props: any) {
  const { data } = props;
  return (
    <Carousel className="container">
      <CarouselContent>
        {data.length > 0 &&
          data.map((testimonial: any) => {
            return (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2">
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
    <div className="bg-white rounded-lg shadow-md p-6 max-w-[350px] mx-auto h-[400px] ">
      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={urlFor(authorImage).url()}
          alt={author}
          className="w-24 h-24 rounded-full border-4 border-yellow-400 object-cover"
        />
      </div>

      {/* Name and Position */}
      <div className="text-center mt-4">
        <h5 className="text-xl font-bold text-yellow">{author}</h5>
        <p className="text-sm ">{position}</p>
      </div>

      {/* Message */}
      <p className="mt-4 text-black italic text-center">"{message}"</p>

      {/* Rating */}
      <div className="flex justify-center text-yellow mt-4">
        {[...Array(rating)].map((_) => (
          <div className="text-4xl">
            <IoStarSharp />
          </div>
        ))}
      </div>
    </div>
  );
}
