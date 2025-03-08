"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { link } from "@/types/type";
import { Badge } from "@/components/ui/badge";

export type HeroSliderProps = {
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
    image?: any;
    preheading?: string;
    _key?: string;
  }[];
};

export default function HeroSlider({
  autoplay,
  interval,
  slides,
  cta,
}: HeroSliderProps) {
  return (
    <section className="relative w-full">
      <Carousel>
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="pl-0">
              <div className="relative">
                {/* Image */}
                <div className="aspect-[16/9] md:aspect-[21/9]">
                  <img
                    src={slide.image && urlFor(slide.image).url()}
                    alt={slide.heading}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-white px-6">
                  <div className="text-center space-y-4 max-w-3xl">
                    {slide.preheading && (
                      <span className="bg-yellow text-white px-3 py-1 rounded-md text-sm">
                        {slide.preheading}
                      </span>
                    )}

                    <h1 className="text-3xl md:text-5xl font-bold">
                      {slide.heading}
                    </h1>

                    <p className="text-base md:text-lg text-white/80">
                      {slide.description ||
                        "Your subtitle or additional content."}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center mt-4">
                      {slide.button1 && (
                        <Button asChild>
                          <Link href={slide.button1.href || "#"}>
                            {slide.button1.label || "Our Services"}
                          </Link>
                        </Button>
                      )}
                      {slide.button2 && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-primary bg-transparent hover:bg-black hover:text-white"
                        >
                          <Link href={slide.button2.href || "#"}>
                            {slide.button2.label || "Contact Now"}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="bg-black/50 text-white rounded-none hover:bg-primary hover:text-primary-foreground translate-x-16 border-none" />
        <CarouselNext className="bg-black/50 text-white rounded-none hover:bg-primary hover:text-primary-foreground -translate-x-16 border-none" />
      </Carousel>

      {/* CTA Section */}
      {cta && (
        <div className="container bg-primary p-6 md:p-8 flex flex-col md:flex-row justify-between items-center -translate-y-10">
          <p className="uppercase font-semibold text-lg text-primary-foreground">
            {cta.text || "We understand your needs."}
          </p>

          <Button asChild variant="outline">
            <Link href={cta.button.href || "#"}>
              {cta.button.label || "Contact Now"}
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
