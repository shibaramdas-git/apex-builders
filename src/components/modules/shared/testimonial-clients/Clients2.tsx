import { urlFor } from "@/sanity/lib/image";
import React from "react";

export default function Clients2({ clients }: { clients: any }) {
  return (
    <div className=" max-w-4xl mx-auto flex gap-2 flex-wrap items-center justify-center py-10 relative">
      {clients.map((client: any) => {
        return (
          <div className="w-[130px]">
            <img
              src={urlFor(client).url() || "https://placehold.co/50x100"}
              alt={"client"}
              className="w-full h-[80px] border p-2 border-black object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
