// import { urlFor } from "@/sanity/lib/image";
// import { url } from "inspector";

// interface RichTextBlock {
//   _type: "block";
//   style: string;
//   listItem?: string;
//   children: Array<{
//     _type: "span";
//     text: string;
//     marks: string[];
//   }>;
// }
// interface RichTextImage {
//   _type: "image";
//   alt?: string;
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
// }
// interface RichTextProps {
//   content: Array<RichTextBlock | RichTextImage>;
// }

// const RichText: React.FC<RichTextProps> = ({ content }) => {
//   const renderBlock = (block: RichTextBlock) => {
//     const { style, children, listItem } = block;

//     const renderChildren = () =>
//       children.map((child, index) => {
//         let formattedText: React.ReactNode = child.text;

//         // Apply text decorators (e.g., bold, italic)
//         if (child.marks.includes("strong")) {
//           formattedText = <strong key={index}>{formattedText}</strong>;
//         }
//         if (child.marks.includes("em")) {
//           formattedText = <em key={index}>{formattedText}</em>;
//         }
//         if (child.marks.includes("underline")) {
//           formattedText = <u key={index}>{formattedText}</u>;
//         }
//         if (child.marks.includes("strike-through")) {
//           formattedText = <s key={index}>{formattedText}</s>;
//         }

//         return <span key={index}>{formattedText}</span>;
//       });

//     // Render block styles
//     switch (style) {
//       case "h1":
//         return <h1 className="text-4xl font-bold mb-4">{renderChildren()}</h1>;
//       case "h2":
//         return <h2 className="text-3xl font-bold mb-4">{renderChildren()}</h2>;
//       case "h3":
//         return <h3 className="text-2xl font-bold mb-4">{renderChildren()}</h3>;
//       case "h4":
//         return <h4 className="text-xl font-bold mb-4">{renderChildren()}</h4>;
//       case "h5":
//         return <h5 className="text-lg font-bold mb-4">{renderChildren()}</h5>;
//       case "h6":
//         return <h6 className="text-base font-bold mb-4">{renderChildren()}</h6>;
//       case "blockquote":
//         return (
//           <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 mb-4 text-blue-900">
//             {renderChildren()}
//           </blockquote>
//         );
//       // return <p className="text-base mb-4">{renderChildren()}</p>;
//       default:
//         if (listItem === "bullet") {
//           return (
//             <ul className="list-disc pl-4 mb-4">
//               {renderChildren()}
//               <li>hello bullet</li>
//             </ul>
//           );
//         } else if (listItem === "number") {
//           return (
//             <ol className="list-decimal pl-4 mb-4">
//               {renderChildren()}
//               <li>hello number</li>
//             </ol>
//           );
//         } else {
//           return <p className="text-base mb-4">{renderChildren()}</p>;
//         }
//     }
//   };

//   const renderImage = (image: RichTextImage) => {
//     return (
//       <div className="mb-4">
//         <img
//           src={urlFor(image.asset).url()} // You'll need to resolve the URL, e.g., using `@sanity/image-url`
//           alt={image.alt || "Image"}
//           className="max-w-full h-auto"
//         />
//       </div>
//     );
//   };

//   return (
//     <div className="rich-text max-w-4xl mx-auto bg-bgcolor text-textcolor">
//       {content.map((block, index) => {
//         if (block._type === "block") {
//           return <div key={index}>{renderBlock(block)}</div>;
//         }
//         if (block._type === "image") {
//           return <div key={index}>{renderImage(block)}</div>;
//         }
//         return null;
//       })}
//     </div>
//   );
// };

// export default RichText;
