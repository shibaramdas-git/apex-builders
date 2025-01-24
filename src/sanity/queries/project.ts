import { groq } from "next-sanity";

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0] {
    blocks[],
    title,
    slug,
}`;
