import { groq } from "next-sanity";

export const ARTICLE_LIST_QUERY = groq`*[_type == "article"] {
    title,
    slug,
    shortDescription,
    thumbnailImage,
    publishedAt,
    readingTime,
    author->{
      name,
      image,
      position
      },
    category->{
      title,
      slug
      }
}`;
