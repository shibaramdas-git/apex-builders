import CallToAction from "@/components/Cta";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <div>
        <Hero
          backgroundImage="https://via.placeholder.com/640x480.png"
          title="Welcome to Our Website"
          subtitle="Discover amazing content and experiences tailored just for you."
          slug="/contact"
        />

        <Faqs heading={faqdata.heading} items={faqdata.faqs} />

        <CallToAction
          title="Join Our Community"
          description="Discover the benefits of becoming part of our amazing community. Sign up today to access exclusive content, resources, and opportunities!"
          image="https://via.placeholder.com/400x400.png/ebdcd2/b5b5b5"
          slug="/quote"
        />
      </div>
    </main>
  );
}

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
