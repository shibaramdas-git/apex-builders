import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import React from "react";

export default function Clients2({ clients }: { clients: any }) {
  return (
    <div className="max-w-4xl mx-auto flex gap-2 flex-wrap items-center justify-center py-10 relative">
      {clients.map((client: any, index: number) => {
        const imageUrl = urlFor(client).url() || "https://placehold.co/50x100";

        return (
          <div key={index} className="w-[130px]">
            <Image
              src={imageUrl}
              alt="Client Logo"
              width={130}
              height={80}
              className="h-[80px] border border-muted-foreground p-2 object-cover"
              unoptimized={imageUrl.includes("placehold.co")} // Avoid optimization for placeholder images
            />
          </div>
        );
      })}
    </div>
  );
}
