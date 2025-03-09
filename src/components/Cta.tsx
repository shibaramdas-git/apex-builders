import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface CTAProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const CallToAction: React.FC<CTAProps> = ({
  title,
  description,
  image,
  slug,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto bg-slate-200 dark:bg-slate-600 my-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={urlFor(image).url() || "https://picsum.photos/800/350?random=1"}
          alt={title}
          width={800}
          height={350}
          className="w-full h-60 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="mt-4 text-gray-600">{description}</p>
        <a
          href={slug}
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
