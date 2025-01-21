import { groq } from "next-sanity";
import { service1Query } from "./home/service-1";

export const PAGE_QUERY = groq`*[_type=="page" && slug.current == $slug][0]{
    blocks[]{
    ...,
    ${service1Query},
    },
    title,
    slug,
    seo
}`;
