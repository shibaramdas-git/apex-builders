import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// const articles = [
//   {
//     id: 1,
//     image: "https://picsum.photos/seed/eco/800/600",
//     title: "Exploring the Future of Sustainable Living",
//     date: "JULY 20, 2022",
//     timeToRead: "10 min",
//     link: "#",
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/seed/tech/800/600",
//     title: "Top 10 Emerging Technologies in 2023",
//     date: "AUGUST 15, 2023",
//     timeToRead: "10 min",
//     link: "#",
//   },
//   {
//     id: 3,
//     image: "https://picsum.photos/seed/nature/800/600",
//     title: "The Beauty and Power of Nature Conservation",
//     date: "SEPTEMBER 10, 2023",
//     timeToRead: "10 min",
//     link: "#",
//   },
// ];

export default function ArticleSection(props: any) {
  const { heading, sectionPreheading, articles } = props;
  return (
    <section>
      <div className="container py-12">
        <div className="text-center mb-12">
          <p className="font-mont text-xl md:text-2xl text-muted-foreground font-normal text-center uppercase">
            {sectionPreheading || "OUR ARTICLES"}
          </p>
          <h2 className="text-3xl lg:text-4xl mb-3 text-center">
            {heading || "Top Articles"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: any) => (
            <div key={article._id} className="">
              <Link
                href={`/articles/${article.slug.current}`}
                className=" h-full bg-card text-card-foreground"
              >
                <div className="overflow-hidden rounded-md h-[200px]">
                  <Image
                    height={1000}
                    width={1000}
                    src={urlFor(article.thumbnailImage).url()}
                    alt={article.title || "Thumbnail image"}
                    className="rounded-md hover:scale-110 w-full h-full object-cover transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="">
                  <p className="text-base font-semibold my-2 hover:text-yellow overflow-hidden">
                    {article.title}
                  </p>
                  <p className="uppercase">
                    {article.publishedAt} , {article.readingTime} min
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
