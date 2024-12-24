type IBannerProps = {
  heading: string;
  breadScrumb: string;
  bgImageSrc: string;
};

export default function Banner(props: IBannerProps) {
  const { bgImageSrc, heading, breadScrumb } = props;

  return (
    <section
      className="c_banner bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${bgImageSrc})` }}
    >
      <div className="text-white uppercase border border-white flex flex-col items-center justify-center h-[300px] bg-[#000000be]">
        <h1 className="text-2xl md:text-5xl font-black mb-1">
          {heading || "Heading"}
        </h1>
        <p className="text-xs md:text-lg font-bold">
          {breadScrumb || "HOME / SERVICES / service 01"}
        </p>
      </div>
    </section>
  );
}
