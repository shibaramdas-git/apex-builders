import { groq } from "next-sanity";
import { service1Query } from "./home/service-1";
import { projectSectionQuery } from "./home/project-section";

export const PAGE_QUERY = groq`*[_type=="page" && slug.current == $slug][0]{
    blocks[]{
    ...,
    ${service1Query},
    ${projectSectionQuery},
    },
    title,
    slug,
    seo
}`;
