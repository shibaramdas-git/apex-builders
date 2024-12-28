interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  slug: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  slug,
}) => {
  return (
    <div
      className="relative h-[500px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 text-lg md:text-xl">{subtitle}</p>
        <a
          href={slug}
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-medium"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
