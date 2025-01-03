import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      placeholder: "Full name",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      placeholder: "Job title",
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: "experties",
      title: "Experties",
      type: "string",
      placeholder: "i.e. interior design, architecture, cunstruction",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "string",
      placeholder: "Tell us about yourself",
      validation: (Rule) => Rule.min(50).max(200),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      placeholder: "Enter email address",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "socials",
      title: "Social media accounts",
      type: "object",
      fields: [
        defineField({
          name: "twitter",
          title: "Twitter",
          type: "url",
        }),
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
        }),
      ],
    }),
  ],
});
