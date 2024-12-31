interface RichTextBlock {
  _type: "block";
  style: string;
  children: Array<{
    _type: "span";
    text: string;
    marks: string[];
  }>;
}
interface RichTextProps {
  content: RichTextBlock[];
}

const RichTextRenderer: React.FC<RichTextProps> = ({ content }) => {
  const renderBlock = (block: RichTextBlock) => {
    const { style, children } = block;

    // console.log(content);

    const renderChildren = () =>
      children.map((child, index) => {
        let formattedText: React.ReactNode = child.text;

        // Apply marks (e.g., bold, italic)
        if (child.marks.includes("strong")) {
          formattedText = <strong key={index}>{formattedText}</strong>;
        }
        if (child.marks.includes("em")) {
          formattedText = <em key={index}>{formattedText}</em>;
        }

        return <span key={index}>{formattedText}</span>;
      });

    // Render block styles
    switch (style) {
      case "h2":
        return <h2 className="text-2xl font-bold mb-4">{renderChildren()}</h2>;
      case "blockquote":
        return (
          <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 mb-4">
            {renderChildren()}
          </blockquote>
        );
      case "normal":
      default:
        return <p className="text-base mb-4">{renderChildren()}</p>;
    }
  };

  return (
    <div className="rich-text max-w-4xl mx-auto">
      {content.map((block, index) => (
        <div key={index}>{renderBlock(block)}</div>
      ))}
    </div>
  );
};

export default RichTextRenderer;
