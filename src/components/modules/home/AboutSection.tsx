import { IoMdTrophy } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div>
      <div className="container text-center py-10">
        <h3 className="text-xl md:text-2xl font-normal mb-2">ABOUT US</h3>
        <div className="max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl lg:text-4xl mb-3">
            WE DELIVER LANDMARK PROJECTS
          </h2>
          <p>
            We are rethoric question ran over her cheek When she reached the
            first hills of the Italic Mountains, she had a last view back on the
            skyline of her hometown Bookmarksgrove, the headline of Alphabet
            Village and the subline of her own road, the Line Lane.
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-y-4 lg:gap-x-2 md:flex-row flex-wrap md:justify-around max-w-md md:max-w-3xl mx-auto">
          <div className="flex items-center gap-3 md:w-[48%]">
            <IoMdTrophy className="text-5xl text-yellow" />
            <p className="text-xl text-black font-semibold">
              We've Repution for Excellence
            </p>
          </div>
          <div className="flex items-center gap-3 md:w-[48%]">
            <FaThumbsUp className="text-5xl text-yellow" />
            <p className="text-xl text-black font-semibold">
              Guided by Commitment
            </p>
          </div>
          <div className="flex items-center gap-3 md:w-[48%]">
            <PiBuildingOfficeFill className="text-5xl text-yellow" />
            <p className="text-xl text-black font-semibold">
              We Build Partnerships
            </p>
          </div>
          <div className="flex items-center gap-3 md:w-[48%]">
            <FaUsers className="text-5xl text-yellow" />
            <p className="text-xl text-black font-semibold">
              A Team of Professionals
            </p>
          </div>
        </div>
      </div>
      <div className="bg-dark-gray">
        <div className="container py-6 md:py-14 flex flex-col sm:flex-row flex-wrap sm:justify-around gap-2">
          <div className="text-center p-4">
            <IoMdTrophy className="text-yellow text-6xl inline-block mb-2" />
            <div className="text-5xl text-white font-bold mb-2">
              <span>+</span>2540
            </div>
            <p className="uppercase text-yellow font-bold">Staff members</p>
          </div>
          <div className="text-center p-4">
            <IoMdTrophy className="text-yellow text-6xl inline-block mb-2" />
            <div className="text-5xl text-white font-bold mb-2">
              <span>+</span>2540
            </div>
            <p className="uppercase text-yellow font-bold">Staff members</p>
          </div>
          <div className="text-center p-4">
            <IoMdTrophy className="text-yellow text-6xl inline-block mb-2" />
            <div className="text-5xl text-white font-bold mb-2">
              <span>+</span>2540
            </div>
            <p className="uppercase text-yellow font-bold">Staff members</p>
          </div>
          <div className="text-center p-4">
            <IoMdTrophy className="text-yellow text-6xl inline-block mb-2" />
            <div className="text-5xl text-white font-bold mb-2">
              <span>+</span>2540
            </div>
            <p className="uppercase text-yellow font-bold">Staff members</p>
          </div>
        </div>
      </div>
    </div>
  );
}
