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

const heroSliderData = {
  slides: [
    {
      preheading: "20 YEARS OF EXCELLENCE IN",
      heading: "CONSTRUCTION INDUSTRY",
      description: "Building dreams with quality and precision.",
      image: "https://picsum.photos/800/350?random=1",
      button1: {
        text: "OUR SERVICES",
        link: "/services",
      },
      button2: {
        text: "CONTACT NOW",
        link: "/contact",
      },
    },
    {
      preheading: "INNOVATIVE DESIGN AND PLANNING",
      heading: "ARCHITECTURAL SOLUTIONS",
      description: "Crafting spaces that inspire and perform.",
      image: "https://picsum.photos/800/350?random=2",
      button1: {
        text: "LEARN MORE",
        link: "/design",
      },
      button2: {
        text: "GET A QUOTE",
        link: "/quote",
      },
    },
    {
      preheading: "DEDICATED TO YOUR VISION",
      heading: "CUSTOM BUILD PROJECTS",
      description: "Transforming your ideas into reality.",
      image: "https://picsum.photos/800/350?random=3",
      button1: {
        text: "VIEW PROJECTS",
        link: "/projects",
      },
      button2: {
        text: "CONTACT US",
        link: "/contact",
      },
    },
  ],
  autoplay: true,
  interval: 5000,
  cta: {
    text: "We understand your needs of constructions.",
    button: {
      href: "/quote",
      label: "Get a Quote",
    },
  },
};
