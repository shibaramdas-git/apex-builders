import { groq } from "next-sanity";

export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0] {
    blocks[],
    title,
    slug,
    seo
}`;
