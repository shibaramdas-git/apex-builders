import { IoMdTrophy } from "react-icons/io";
import { FaThumbsUp, FaUsers } from "react-icons/fa";
import { PiBuildingOfficeFill, PiClockClockwise } from "react-icons/pi";
import { HiBuildingLibrary } from "react-icons/hi2";

const aboutSectionData = {
  sectionHeading: "About Us dynamic",
  heading: "WE DELIVER LANDMARK PROJECTS",
  description: `We are rethoric question ran over her cheek When she reached the
            first hills of the Italic Mountains, she had a last view back on the
            skyline of her hometown Bookmarksgrove, the headline of Alphabet
            Village and the subline of her own road, the Line Lane.`,
  points: [
    {
      icon: <IoMdTrophy className="text-5xl text-yellow" />,
      text: "We've Repution for Excellence",
    },
    {
      icon: <FaThumbsUp className="text-5xl text-yellow" />,
      text: "Guided by Commitment",
    },
    {
      icon: <PiBuildingOfficeFill className="text-5xl text-yellow" />,
      text: "We Build Partnerships",
    },
    {
      icon: <FaUsers className="text-5xl text-yellow" />,
      text: "A Team of Professionals",
    },
    {
      icon: <FaUsers className="text-5xl text-yellow" />,
      text: "A Team of Professionals",
    },
  ],
  statsData: [
    {
      icon: (
        <HiBuildingLibrary className="text-yellow text-6xl inline-block mb-2" />
      ),
      value: "+2540",
      label: "Projects Completed",
    },
    {
      icon: <FaUsers className="text-yellow text-6xl inline-block mb-2" />,
      value: "+784",
      label: "Staff members",
    },
    {
      icon: <IoMdTrophy className="text-yellow text-6xl inline-block mb-2" />,
      value: "+125",
      label: "Awards Won",
    },
    {
      icon: (
        <PiClockClockwise className="text-yellow text-6xl inline-block mb-2" />
      ),
      value: "+1075",
      label: "Satisfied Clients",
    },
  ],
};

export default function AboutSection() {
  return (
    <div>
      <div className="container text-center py-10">
        <h3 className="text-xl md:text-2xl font-normal mb-2">
          {aboutSectionData.sectionHeading || "About us"}
        </h3>
        <div className="max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl lg:text-4xl mb-3">
            {aboutSectionData.heading || "Lorem ipsum dolor sit amet."}
          </h2>
          <p>
            {aboutSectionData.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat quas reprehenderit quo mollitia alias ea, repellendus laboriosam vero?"}
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-y-4 lg:gap-x-2 md:flex-row flex-wrap md:justify-around max-w-md md:max-w-3xl mx-auto">
          {aboutSectionData.points.map((item, index) => (
            <div key={index} className="flex items-center gap-3 md:w-[48%]">
              {item.icon}
              <p className="text-xl text-black font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-dark-gray">
        <div className="container py-6 md:py-14 flex flex-col sm:flex-row flex-wrap sm:justify-around gap-2">
          {aboutSectionData.statsData.map((item, index) => (
            <div key={index} className="text-center p-4">
              {item.icon}
              <div className="text-5xl text-white font-bold mb-2">
                {item.value}
              </div>
              <p className="uppercase text-yellow font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// TODO: ADD ICONS DYNAMICALLY LATER, FOR NOW USED STATIC
