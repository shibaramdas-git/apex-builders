import { groq } from "next-sanity";

export const projectSectionQuery = groq`_type == "projectsSection" => {
    sectionPreheading,
    heading,
    design,
    projects[]-> {
      _id,
      title,
      shortDescription,
      thumbnailImage,
      slug,
    }
    }`;
