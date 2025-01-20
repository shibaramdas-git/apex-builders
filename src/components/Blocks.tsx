import Hero from "./Hero";
import Faqs from "./Faqs";
import Cta from "./Cta";
import RichText from "./RichText";
import HeroSlider from "./modules/home/HeroSlider";
import AboutSection from "./modules/home/AboutSection";

const COMPONENT_MAP: { [key: string]: React.ComponentType<any> } = {
  heroSlider: HeroSlider,
  "hero-1": Hero,
  "about-1": AboutSection,
  faqsSection: Faqs,
  richText: RichText,
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
