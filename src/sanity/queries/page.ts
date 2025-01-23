import { groq } from "next-sanity";
import { service1Query } from "./home/service-section";
import { projectSectionQuery } from "./home/project-section";
import { articleSectionQuery } from "./home/article-section";

export const PAGE_QUERY = groq`*[_type=="page" && slug.current == $slug][0]{
    blocks[]{
    ...,
    ${service1Query},
    ${projectSectionQuery},
    ${articleSectionQuery},
    },
    title,
    slug,
    seo
}`;
