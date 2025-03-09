import Hero from "./Hero";
import Faqs from "./Faqs";
import Cta from "./Cta";
import HeroSlider from "./modules/home/HeroSlider";
import AboutSection from "./modules/home/AboutSection";
import ServiceSection from "./modules/home/ServiceSection";
import TestimonialSection from "./modules/shared/testimonial-clients/Testimonial&Clients";
import ProjectSection from "./modules/home/ProjectSection";
import ArticleSection from "./modules/home/ArticleSection";
import PortableTextRenderer from "./PortableText";

const COMPONENT_MAP: { [key: string]: React.ComponentType<any> } = {
  heroSlider: HeroSlider,
  "hero-1": Hero,
  "about-1": AboutSection,
  servicesSection: ServiceSection,
  "testimonial&Clients": TestimonialSection,
  projectsSection: ProjectSection,
  articlesSection: ArticleSection,
  richText: PortableTextRenderer,
  faqsSection: Faqs,
  "cta-1": Cta,
};

export default function Blocks({ blocks }: { blocks?: Sanity.Block[] }) {
  return (
    <>
      {blocks &&
        blocks.map((block) => {
          const Component = COMPONENT_MAP[block._type];
          if (!Component) {
            // Fallback for unknown block types to debug
            return <div data-type={block._type} key={block._key} />;
          }
          return <Component key={block._key} {...block} />;
        })}
    </>
  );
}
