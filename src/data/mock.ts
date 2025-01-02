const faqdata = {
  heading: "FAQs Questions and Answers",
  faqs: [
    {
      id: 1,
      title: "What is your return policy?",
      content:
        "You can return items within 30 days of purchase with a receipt.",
    },
    {
      id: 2,
      title: "Do you ship internationally?",
      content: "Yes, we ship to most countries worldwide.",
    },
    {
      id: 3,
      title: "How can I track my order?",
      content:
        "Once your order is shipped, you will receive a tracking number.",
    },
  ],
};

const richtextdata = {
  _type: "richText",
  content: [
    {
      _type: "block",
      style: "h2",
      children: [
        {
          _type: "span",
          text: "Welcome to Our Website",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "This is an introductory paragraph that provides an overview of the content on this page.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Here is an important keyword, ",
          marks: [],
        },
        {
          _type: "span",
          text: "highlighted for emphasis.",
          marks: ["strong"],
        },
      ],
    },
    {
      _type: "block",
      style: "blockquote",
      children: [
        {
          _type: "span",
          text: "This is a blockquote to emphasize a particular point.",
          marks: [],
        },
      ],
    },
  ],
};
