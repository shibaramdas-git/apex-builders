"use client";
import BreadScrumb from "./BreadScrumb";

type IBannerProps = {
  heading: string;
  path: string;
  bgImageSrc: string;
};

export default function Banner(props: IBannerProps) {
  const { bgImageSrc, heading, path } = props;

  return (
    <section
      className="c_banner bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${bgImageSrc})` }}
    >
      <div className="text-white uppercase flex flex-col items-center justify-center h-[300px] bg-[#000000be]">
        <h1 className="text-2xl md:text-5xl font-black mb-1 md:mb-2 text-white">
          {heading || "Heading"}
        </h1>
        <BreadScrumb path={path} />
      </div>
    </section>
  );
}
