import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextProps } from "@portabletext/react";
import { FaQuoteLeft } from "react-icons/fa6";
// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

const portableTextComponents: PortableTextProps["components"] = {
  types: {
    image: ({ value }) => {
      return (
        <div className="w-full max-w-xl mx-auto">
          <Image
            src={urlFor(value.asset).url()}
            alt={value.alt || "Image"}
            width={800}
            height={600}
            className="h-auto rounded-md shadow-sm mb-6 m-2 object-cover"
          />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="my-4 normal-case">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 normal-case">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 normal-case">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-4 normal-case">{children}</h4>,
    h5: ({ children }) => <h5 className="mb-4 normal-case">{children}</h5>,
    blockquote: ({ children }) => (
      <blockquote className="mb-4 text-accent-foreground font-medium bg-accent inline-start- border-l-4 border-primary ">
        <FaQuoteLeft className="text-4xl text-accent-foreground ml-1" />
        <span className="my-auto ml-8 inline-block pb-8 pr-4">{children} </span>
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const isExternal =
        (value?.href || "").startsWith("http") ||
        (value?.href || "").startsWith("https") ||
        (value?.href || "").startsWith("mailto");
      const target = isExternal ? "_blank" : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target ? "noopener" : undefined}
          className="underline text-blue-500 hover:text-blue-700"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="pl-4 mb-4">{children}</ul>,
    number: ({ children }) => (
      <ol className="pl-8 mb-4 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mb-2">
        <span className="inline-flex justify-center items-center rounded-full border-2 border-red-500 mr-4">
          <span className="inline-block h-2 w-2 bg-blue-500 rounded-full m-[2px]"></span>
        </span>
        {children}
      </li>
    ),
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

const PortableTextRenderer = (props: any) => {
  return (
    <section className="container py-8 space-y-4">
      <PortableText value={props.content} components={portableTextComponents} />
    </section>
  );
};

export default PortableTextRenderer;
