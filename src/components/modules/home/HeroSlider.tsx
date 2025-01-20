import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import { link } from "@/types/type";
import Link from "next/link";

export type HeroSliderProps = Sanity.Block<"heroSlider"> & {
  autoplay: boolean;
  interval: number;
  cta: {
    text: string;
    button: link;
  };
  slides: {
    button1?: link;
    button2?: link;
    description?: string;
    heading: string;
    image?: Sanity.Image;
    preheading?: string;
    _key?: string;
  }[];
};

export default function HeroSlider(props: HeroSliderProps) {
  const { autoplay, interval, slides, cta, ...otherData } = props;

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {slides.length > 0 &&
            slides.map((slide, idx) => {
              return (
                <CarouselItem key={idx} className="pl-0">
                  <div className="relative">
                    <div className="h-[60vh] lg:h-[90vh]">
                      <img
                        src={slide.image && urlFor(slide.image).url()}
                        alt={slide.heading}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/75"></div>
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
                          {slide.button1 && (
                            <Link
                              href={slide?.button1?.href || "#"}
                              className="bg-yellow px-4 py-2 text-white hover:bg-dark-gray hover:text-yellow font-semibold"
                            >
                              {slide?.button1?.label || "Our Services"}
                            </Link>
                          )}
                          {slide.button2 && (
                            <Link
                              href={slide?.button2?.href || "#"}
                              className="bg-transparent px-4 py-2 text-white hover:bg-black hover:text-yellow font-semibold border-yellow border-2 "
                            >
                              {slide?.button2?.label || "Contact Now"}
                            </Link>
                          )}
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
      {cta && (
        <div className="container bg-yellow p-6 md:p-8 flex gap-4 flex-col justify-center items-center md:flex-row md:justify-between -translate-y-[40px]">
          <p className="uppercase font-semibold text-lg text-black font-mont">
            {cta.text || "We understand your needs of constructions."}
          </p>

          <Link
            href={cta.button.href || "#"}
            className="bg-black px-4 py-3 text-white text-nowrap hover:bg-dark-gray hover:text-yellow font-semibold"
          >
            {cta.button.label || "Contact Now"}
          </Link>
        </div>
      )}
    </div>
  );
}
