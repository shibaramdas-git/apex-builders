type IBannerProps = {
  heading: string;
  breadScrumb: string;
  bgImageSrc: string;
};
export default function Banner(props: IBannerProps) {
  const { bgImageSrc } = props;
  const bgImage = bgImageSrc ? "bg-[url(`${bgImageSrc}`)]" : "";
  console.log(bgImage);

  return (
    <section className="c_banner bg-[url('/buildings/photodune-5893828-downtown-dubai-m-1024x787.jpg')] bg-no-repeat bg-cover bg-bottom">
      <div className="text-white uppercase border border-white flex flex-col items-center justify-center h-[300px] bg-[#000000be]">
        <h1 className="text-2xl md:text-5xl font-black mb-1">
          {props.heading || "Heading"}
        </h1>
        <p className="text-xs md:text-lg font-bold">
          {props.breadScrumb || "HOME / SERVICES / service 01"}
        </p>
      </div>
    </section>
  );
}
