import Hero from "./Hero";
import Faqs from "./Faqs";
import Cta from "./Cta";
import RichText from "./RichText";

export interface Block<T = string> {
  _type: T;
  _key: string;
  uid?: string;
}
export type BlocksProps = Block[];

export default function Blocks({ blocks }: { blocks: BlocksProps }) {
  console.log(blocks);
  return <div>{RenderComponent(blocks)}</div>;
}

function RenderComponent(blocks) {
  return (
    <div>
      {blocks.map((block: any) => {
        switch (block._type) {
          case "hero-1":
            return (
              <Hero
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
                title={block.title}
                description={block.description}
                slug={block.slug}
                image={block.image}
              />
            );
          case "richText":
            return <RichText content={block.content} />;

          default:
            return <div>{block._type}</div>;
        }
      })}
    </div>
  );
}
