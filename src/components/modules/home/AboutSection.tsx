import { urlFor } from "@/sanity/lib/image";

export type AboutSectionProps = {};

export default function AboutSection(props: any) {
  const { sectionHeading, heading, points, statsData, description } = props;
  return (
    <div>
      <div className="container text-center py-10">
        <h3 className="text-xl md:text-2xl font-normal mb-2">
          {sectionHeading || "About us"}
        </h3>
        <div className="max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl lg:text-4xl mb-3">
            {heading || "Lorem ipsum dolor sit amet."}
          </h2>
          <p>
            {description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat quas reprehenderit quo mollitia alias ea, repellendus laboriosam vero?"}
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-y-4 lg:gap-x-2 md:flex-row flex-wrap md:justify-around max-w-md md:max-w-3xl mx-auto">
          {points.length > 0 &&
            points.map((point: any) => (
              <div
                key={point._key}
                className="flex items-center gap-3 md:w-[48%]"
              >
                <div className="flex justify-center items-center bg-yellow rounded-full w-12 h-12">
                  <img
                    src={urlFor(point.icon).url()}
                    alt="icons"
                    className=""
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-xl text-black font-semibold">{point.text}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-dark-gray">
        <div className="container py-6 md:py-14 flex flex-col items-center sm:flex-row flex-wrap sm:justify-around gap-2">
          {statsData.length > 0 &&
            statsData.map((stats: any) => (
              <div key={stats._key} className="text-center py-4 w-[200px]">
                <div className="flex justify-center items-center bg-yellow w-14 h-14 rotate-45 mx-auto mb-6 rounded-lg">
                  <img
                    src={urlFor(stats.icon).url()}
                    alt="icons"
                    className="-rotate-45"
                    width={35}
                    height={35}
                  />
                </div>
                <div className="text-5xl text-white font-bold mb-2">
                  {stats.value} +
                </div>
                <p className="uppercase text-yellow font-bold">{stats.label}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
