import { groq } from "next-sanity";

export const articleSectionQuery = groq`_type == "articlesSection" => {
    sectionPreheading,
    heading,
    design,
    articles[]-> {
      _id,
      title,
      shortDescription,
      thumbnailImage,
      slug,
      readingTime,
      publishedAt,
    }
    }`;
