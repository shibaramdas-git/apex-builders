import { groq } from "next-sanity";

export const SERVICE_LIST_QUERY = groq`*[_type == "service"] {
    title,
    slug,
    icon,
    detailedDescription,
}`;
