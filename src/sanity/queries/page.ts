import { groq } from "next-sanity";

export const PAGE_QUERY = groq`*[_type=="page" && slug.current == $slug][0]{
    blocks,
    title,
    slug,
    meta_title,
    meta_description,
    noindex,
    ogImage
}`;
