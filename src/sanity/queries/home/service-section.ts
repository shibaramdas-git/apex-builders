import { groq } from "next-sanity";

export const service1Query = groq`_type == "servicesSection" => {
    sectionPreheading,
    heading,
    image,
    services[]-> {
      _id,
      title,
      shortDescription,
      icon,
      slug
    },
    design
  }`;
