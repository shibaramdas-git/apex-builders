import Hero from "./Hero";
import Faqs from "./Faqs";
import Cta from "./Cta";
import RichText from "./RichText";
import HeroSlider from "./modules/home/HeroSlider";
import hero1 from "@/sanity/schemaTypes/blocks/hero/hero-1";

// export default function Blocks({ blocks }: { blocks?: Sanity.Block[] }) {
//   // console.log(blocks);
//   return <div>{blocks && RenderComponent(blocks)}</div>;
// }

// function RenderComponent(blocks: Sanity.Block[]) {
//   return (
//     <div>
//       {blocks &&
//         blocks.map((block: Sanity.Block, index: number) => {
//           switch (block._type) {
//             case "hero-1":
//               return (
//                 <Hero
//                   key={`hero-${index}`}
//                   backgroundImage={block.backgroundImage}
//                   title={block.title}
//                   subtitle={block.subtitle}
//                   slug={block.slug}
//                 />
//               );
//             case "faqsSection":
//               return <Faqs heading={block.title} items={block.faqs} />;
//             case "cta-1":
//               return (
//                 <Cta
//                   key={`cta-${index}`}
//                   title={block.title}
//                   description={block.description}
//                   slug={block.slug}
//                   image={block.image}
//                 />
//               );
//             case "richText":
//               return (
//                 <RichText key={`richText-${index}`} content={block.content} />
//               );
//             case "heroSlider":
//               return <HeroSlider key={block._key} content={block} />;

//             default:
//               return <div>{block._type}</div>;
//           }
//         })}
//     </div>
//   );
// }

const COMPONENT_MAP: { [key: string]: React.ComponentType<any> } = {
  heroSlider: HeroSlider,
  "hero-1": Hero,
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
