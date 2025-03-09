import { groq } from "next-sanity";

export const PROJECT_LIST_QUERY = groq`*[_type == "project"] {
    title,
    slug,
    status,
    shortDescription,
    thumbnailImage
}`;
