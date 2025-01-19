import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";

declare global {
  namespace Sanity {
    // pages = sanityDocument types + yours
    type PageBase = SanityDocument<{
      title?: string;
      slug: { current: string };
      meta_title: string;
      meta_description: string;
      ogImage?: Image;
      noindex: boolean;
    }>;

    type Page = PageBase & {
      readonly _type: "page";
      blocks?: Block[];
    };

    // objects
    type Block<T = string> = {
      _type: T;
      _key: string;
      uid?: string;
    };

    // Sanity Image
    type Image = SanityImageObject &
      Partial<{
        alt: string;
        asset: {
          _id: string;
          mimeType?: string;
          metadata: {
            dimensions: SanityImageDimensions;
            lqip: string;
          };
        };
      }>;
  }
}

export {};

// in page base type, SanityDocument is used as a generic type, and the shape of the document is passed as a type argument.
//  why ? it encapsulates document shape to sanityDocument. in future if sanityDocument adds new properties to its shape, we get updates automatically.
// Partials means optional..
