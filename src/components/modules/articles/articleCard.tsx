import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/sanity/lib/image";
import { Calendar, Clock } from "lucide-react";

export interface IArticle {
  thumbnailImage: {
    _type: "image";
    alt: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  publishedAt: string; // Date in string format
  readingTime: number;
  author: {
    name: string;
    image: {
      asset: {
        _ref: string;
        _type: "reference";
      };
      _type: "image";
      alt: string;
    };
    position: string;
  };
  category?: {
    title: string;
    slug: {
      _type: "slug";
      current: string;
    };
  };
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  shortDescription: string;
}

export default function ArticleCard({ article }: { article: IArticle }) {
  return (
    <Card className="group relative overflow-hidden rounded-lg border shadow-md transition hover:shadow-lg">
      {/* Thumbnail Image */}
      <Link href={`/articles/${article.slug.current}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(article?.thumbnailImage?.asset).url() || ""}
            alt={article.thumbnailImage?.alt || "Article Image"}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between">
          {/* Category Badge */}
          <Badge variant="yellow" className="text-xs">
            {article.category?.title || "Uncategorized"}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={14} />
            <span>{article.readingTime} min read</span>
          </div>
        </div>
        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">
          <Link
            href={`/articles/${article.slug.current}`}
            className="hover:text-primary"
          >
            {article.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 h-[60px]">
          {article.shortDescription}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-4 pb-4 text-xs text-muted-foreground">
        {/* Author & Image */}
        <div className="flex items-center gap-2">
          <Image
            src={urlFor(article.author.image.asset).url()}
            alt={article.author.image.alt || "Author"}
            width={30}
            height={30}
            className="rounded-full border"
          />
          <div>
            <p className="font-semibold">{article.author.name}</p>
            <p className="text-xs">{article.author.position}</p>
          </div>
        </div>

        {/* Date & Reading Time */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
