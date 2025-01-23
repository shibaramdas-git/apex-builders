import { defineField, defineType } from "sanity";
import { RiCustomerService2Line } from "react-icons/ri";

export default defineType({
  name: "projectsSection",
  type: "object",
  title: "Top Projects Section",
  icon: RiCustomerService2Line,
  fields: [
    defineField({
      name: "sectionPreheading",
      type: "string",
      title: "Section Preheading",
      description:
        "Short preheading for the project section (e.g., 'Work of excellence').",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Section Heading",
      description:
        "Main heading for the service section (e.g., 'Our Projects').",
      validation: (Rule) => Rule.required().warning("Heading is required"),
    }),
    defineField({
      name: "projects",
      type: "array",
      title: "Projects",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    }),
    defineField({
      name: "design",
      type: "string",
      title: "Design Style",
      options: {
        list: [
          {
            title: "Design One Default",
            value: "designOne",
          },
          {
            title: "Design Two Work in progress",
            value: "designTwo",
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "sectionPreheading",
    },
    prepare({ title }) {
      return {
        title: "Projects Section",
        subtitle: title,
      };
    },
  },
});
