import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialMulti(props: any) {
  const { data } = props;
  return (
    <Carousel>
      <CarouselContent>
        {data.length > 0 &&
          data.map((testimonial: any) => {
            return (
              <CarouselItem>
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
  const { name, message, avatar, rating, position, companyLogo } = testimonial;
  console.log(testimonial);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-yellow-400 object-cover"
        />
      </div>

      {/* Name and Position */}
      <div className="text-center mt-4">
        <h5 className="text-xl font-bold text-gray-800">{name}</h5>
        <p className="text-sm text-gray-500">{position}</p>
      </div>

      {/* Message */}
      <p className="mt-4 text-gray-600 italic text-center">"{message}"</p>

      {/* Rating */}
      <div className="flex justify-center mt-4">
        {[...Array(5)].map((_, idx) => (
          <svg
            key={idx}
            xmlns="http://www.w3.org/2000/svg"
            fill={idx < rating ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 text-yellow-400 ${
              idx >= rating ? "stroke-yellow-400" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.25L7.97 20.03c-.38.23-.86.2-1.21-.07a1.003 1.003 0 01-.34-1.11l1.19-4.1-3.2-2.5c-.38-.3-.52-.83-.35-1.28.16-.45.6-.75 1.08-.75h4.1l1.22-4.13c.11-.37.4-.67.78-.78.38-.11.78 0 1.07.26l1.22 4.13h4.1c.48 0 .92.3 1.08.75.17.45.03.98-.35 1.28l-3.2 2.5 1.19 4.1c.07.25.05.52-.06.75-.12.23-.31.41-.54.52-.2.09-.41.13-.62.13-.19 0-.38-.04-.55-.13L12 17.25z"
            />
          </svg>
        ))}
      </div>

      {/* Company Logo */}
      <div className="flex justify-center mt-4">
        <img src={companyLogo} alt="Company Logo" className="w-24 h-auto" />
      </div>
    </div>
  );
}
