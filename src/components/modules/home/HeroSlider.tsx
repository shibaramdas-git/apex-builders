import { Button } from "@/components/ui/button";
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
    // <div className="">
    //   <Carousel className="">
    //     <CarouselContent className="">
    //       {heroSliderData &&
    //         heroSliderData.map((slide, idx) => {
    //           return (
    //             <CarouselItem className="pl-1">
    //               <div className="h-[400px] relative overflow-hidden">
    //                 <img
    //                   src={slide.image}
    //                   alt="hello"
    //                   className="w-full h-full object-cover object-center"
    //                 />
    //               </div>
    //               <div className="absolute inset-0 bg-black/40"></div>

    //               {/* Overlay Content */}
    //               <div className="absolute inset-0 flex items-center justify-center text-white">
    //                 <div className="text-center">
    //                   <p>{slide.preheading || "20 YEARS OF EXCELLENCE IN"}</p>
    //                   <h1 className="text-2xl font-bold">
    //                     {slide.heading || "CONSTRUCTION INDUSTRY"}
    //                   </h1>
    //                   <p className="text-sm mt-2">
    //                     {slide.description ||
    //                       "Your subtitle or additional content."}
    //                   </p>
    //                   <div>
    //                     <Link
    //                       href={slide.button1.link}
    //                       className="bg-yellow p-[10px] text-white text-nowrap w-full hover:bg-dark-gray hover:text-yellow font-semibold"
    //                     >
    //                       {slide.button1.text || "Our services"}
    //                     </Link>
    //                     <Link
    //                       href={slide.button2.link}
    //                       className="bg-yellow p-[10px] text-white text-nowrap w-full hover:bg-dark-gray hover:text-yellow font-semibold"
    //                     >
    //                       {slide.button2.text || "Contact now"}
    //                     </Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </CarouselItem>
    //           );
    //         })}
    //     </CarouselContent>
    //     <CarouselPrevious className="bg-black/50 text-white rounded-none hover:bg-yellow translate-x-16 border-none" />
    //     <CarouselNext className="bg-black/50 text-white rounded-none hover:bg-yellow -translate-x-16 border-none" />
    //   </Carousel>
    // </div>
    <div>
      <Carousel>
        <CarouselContent>
          {heroSliderData.length > 0 &&
            heroSliderData.map((slide, idx) => {
              return (
                <CarouselItem key={idx} className="pl-1">
                  <div className="relative">
                    <div className="h-[400px]">
                      <img
                        src={slide.image}
                        alt={slide.heading}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <p className="text-white">
                          {slide.preheading || "20 YEARS OF EXCELLENCE IN"}
                        </p>
                        <h1 className="text-2xl font-bold text-white">
                          {slide.heading || "CONSTRUCTION INDUSTRY"}
                        </h1>
                        <p className="text-sm mt-2 text-white">
                          {slide.description ||
                            "Your subtitle or additional content."}
                        </p>
                        <div className="mt-4 flex gap-4 justify-center">
                          <Link
                            href={slide?.button1?.link || "#"}
                            className="bg-yellow px-4 py-2 text-white rounded-md hover:bg-dark-gray hover:text-yellow font-semibold"
                          >
                            {slide?.button1?.text || "Our Services"}
                          </Link>
                          <Link
                            href={slide?.button2?.link || "#"}
                            className="bg-yellow px-4 py-2 text-white rounded-md hover:bg-dark-gray hover:text-yellow font-semibold"
                          >
                            {slide?.button2?.text || "Contact Now"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                //
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="bg-black/50 text-white rounded-none hover:bg-yellow translate-x-16 border-none" />
        <CarouselNext className="bg-black/50 text-white rounded-none hover:bg-yellow -translate-x-16 border-none" />
      </Carousel>
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
