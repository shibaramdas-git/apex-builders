import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSingle() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="h-80 w-full p-2 flex items-center justify-center">
              <div className="flex gap-4 h-3/4">
                <div>
                  <FaQuoteLeft className="text-3xl text-yellow italic" />
                </div>
                <div className="flex flex-col justify-between p-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos nulla voluptatibus ea nam libero a quibusdam esse
                    consectetur consequuntur! Nihil.
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <img
                        src="https://picsum.photos/seed/person2/400/400"
                        alt="image"
                        className="w-[70px] h-auto rounded-md"
                      />
                      <div>
                        <h5 className="text-yellow uppercase text-lg">
                          Client name
                        </h5>
                        <p className="">Position, BTS</p>
                      </div>
                    </div>
                    <div className="w-1/3">
                      <img
                        src="/logos/thebuilt-logo-2.png"
                        alt="company logo"
                        className="object-contain h-auto rounded-md ml-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-80 w-full p-2 flex items-center justify-center">
              <div className="flex gap-4 h-3/4">
                <div>
                  <FaQuoteLeft className="text-3xl text-yellow italic" />
                </div>
                <div className="flex flex-col justify-between p-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos nulla voluptatibus ea nam libero a quibusdam esse
                    consectetur consequuntur! Nihil.
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <img
                        src="https://picsum.photos/seed/person2/400/400"
                        alt="image"
                        className="w-[70px] h-auto rounded-md"
                      />
                      <div>
                        <h5 className="text-yellow uppercase text-lg">
                          Client name
                        </h5>
                        <p className="">Position, BTS</p>
                      </div>
                    </div>
                    <div className="w-1/3">
                      <img
                        src="/logos/thebuilt-logo-2.png"
                        alt="company logo"
                        className="object-contain h-auto rounded-md ml-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-80 w-full p-2 flex items-center justify-center">
              <div className="flex gap-4 h-3/4">
                <div>
                  <FaQuoteLeft className="text-3xl text-yellow italic" />
                </div>
                <div className="flex flex-col justify-between p-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos nulla voluptatibus ea nam libero a quibusdam esse
                    consectetur consequuntur! Nihil.
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                      <img
                        src="https://picsum.photos/seed/person2/400/400"
                        alt="image"
                        className="w-[70px] h-auto rounded-md"
                      />
                      <div>
                        <h5 className="text-yellow uppercase text-lg">
                          Client name
                        </h5>
                        <p className="">Position, BTS</p>
                      </div>
                    </div>
                    <div className="w-1/3">
                      <img
                        src="/logos/thebuilt-logo-2.png"
                        alt="company logo"
                        className="object-contain h-auto rounded-md ml-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-[70px]" />
        <CarouselNext className="mr-[70px]" />
      </Carousel>
    </div>
  );
}
