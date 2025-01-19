import Hero from "./Hero";
import Faqs from "./Faqs";
import Cta from "./Cta";
import RichText from "./RichText";
import HeroSlider from "./modules/home/HeroSlider";


export type BlocksProps = Sanity.Block[];

export default function Blocks({ blocks }: { blocks: BlocksProps }) {
  // console.log(blocks);
  return <div>{RenderComponent(blocks)}</div>;
}

function RenderComponent(blocks: BlocksProps) {
  return (
    <div>
      {blocks &&
        blocks.map((block: any, index: number) => {
          switch (block._type) {
            case "hero-1":
              return (
                <Hero
                  key={`hero-${index}`}
                  backgroundImage={block.backgroundImage}
                  title={block.title}
                  subtitle={block.subtitle}
                  slug={block.slug}
                />
              );
            case "faqsSection":
              return <Faqs heading={block.title} items={block.faqs} />;
            case "cta-1":
              return (
                <Cta
                  key={`cta-${index}`}
                  title={block.title}
                  description={block.description}
                  slug={block.slug}
                  image={block.image}
                />
              );
            case "richText":
              return (
                <RichText key={`richText-${index}`} content={block.content} />
              );
            case "heroSlider":
              return <HeroSlider key={block._key} content={block} />;

            default:
              return <div>{block._type}</div>;
          }
        })}
    </div>
  );
}
