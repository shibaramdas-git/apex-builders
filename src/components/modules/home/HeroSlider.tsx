import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {heroSliderData.length > 0 &&
            heroSliderData.map((slide, idx) => {
              return (
                <CarouselItem key={idx} className="pl-0">
                  <div className="relative">
                    <div className="h-[60vh] lg:h-[90vh]">
                      <img
                        src={slide.image}
                        alt={slide.heading}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white max-w-3xl mx-auto">
                      <div className="text-center">
                        <p className="text-white text-lg mb-2 md:mb-6 md:text-2xl">
                          {slide.preheading || "20 YEARS OF EXCELLENCE IN"}
                        </p>
                        <h1 className="text-3xl font-bold text-white lg:text-5xl mb-4">
                          {slide.heading || "CONSTRUCTION INDUSTRY"}
                        </h1>
                        <p className="text-sm mt-2 text-white md:text-lg mb-8">
                          {slide.description ||
                            "Your subtitle or additional content."}
                        </p>
                        <div className="mt-4 flex gap-4 justify-center">
                          <Link
                            href={slide?.button1?.link || "#"}
                            className="bg-yellow px-4 py-2 text-white hover:bg-dark-gray hover:text-yellow font-semibold"
                          >
                            {slide?.button1?.text || "Our Services"}
                          </Link>
                          <Link
                            href={slide?.button2?.link || "#"}
                            className="bg-transparent px-4 py-2 text-white hover:bg-black hover:text-yellow font-semibold border-yellow border-2 "
                          >
                            {slide?.button2?.text || "Contact Now"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="bg-black/50 text-white rounded-none hover:bg-yellow translate-x-16 border-none" />
        <CarouselNext className="bg-black/50 text-white rounded-none hover:bg-yellow -translate-x-16 border-none" />
      </Carousel>
      <div className="container bg-yellow p-6 md:p-8 flex gap-4 flex-col justify-center items-center md:flex-row md:justify-between -translate-y-[40px]">
        <p className="uppercase font-semibold text-lg text-black font-mont">
          We understand your needs of constructions.
        </p>
        <Link
          href="/quote"
          className="bg-black px-4 py-3 text-white text-nowrap hover:bg-dark-gray hover:text-yellow font-semibold"
        >
          Get A Quote
        </Link>
      </div>
    </div>
  );
}

const heroSliderData = [
  {
    preheading: "20 YEARS OF EXCELLENCE IN",
    heading: "CONSTRUCTION INDUSTRY",
    description: "Building dreams with quality and precision.",
    image: "https://picsum.photos/800/350?random=1",
    button1: {
      text: "OUR SERVICES",
      link: "/services",
    },
    button2: {
      text: "CONTACT NOW",
      link: "/contact",
    },
  },
  {
    preheading: "INNOVATIVE DESIGN AND PLANNING",
    heading: "ARCHITECTURAL SOLUTIONS",
    description: "Crafting spaces that inspire and perform.",
    image: "https://picsum.photos/800/350?random=2",
    button1: {
      text: "LEARN MORE",
      link: "/design",
    },
    button2: {
      text: "GET A QUOTE",
      link: "/quote",
    },
  },
  {
    preheading: "DEDICATED TO YOUR VISION",
    heading: "CUSTOM BUILD PROJECTS",
    description: "Transforming your ideas into reality.",
    image: "https://picsum.photos/800/350?random=3",
    button1: {
      text: "VIEW PROJECTS",
      link: "/projects",
    },
    button2: {
      text: "CONTACT US",
      link: "/contact",
    },
  },
];
