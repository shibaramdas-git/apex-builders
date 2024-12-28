import Faqs from "@/components/Faqs";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="">
      <div>
        <HeroSection />
        <Faqs heading={faqdata.heading} items={faqdata.faqs} />
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
