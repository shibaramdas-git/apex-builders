import { urlFor } from "@/sanity/lib/image";
import clsx from "clsx";
import Image from "next/image";
export type Clients1Props = {
  className?: string;
};

export default function Clients1({
  className,
  clients,
}: {
  className?: string;
  clients: any;
}) {
  return (
    <div
      className={clsx(className, "h-[250px] w-full relative overflow-hidden")}
    >
      {/* First Row: Moves to the left */}
      <div className="p-2 flex space-x-4 justify-center absolute animate-left">
        {[...Array(2)].map((_) => {
          return (
            <>
              {clients.map((client: any) => (
                <div className="w-[130px]" key={client._key}>
                  <Image
                    src={urlFor(client).url() || "https://placehold.co/50x100"}
                    alt={client._type || "client"}
                    width={130}
                    height={80}
                    className="w-full h-[80px] border p-2 border-muted-foreground object-cover"
                  />
                </div>
              ))}
            </>
          );
        })}
      </div>
      {/* Second Row: Moves to the right */}
      <div className="p-2 flex space-x-4 justify-center absolute bottom-0 right-0 animate-right">
        {[...Array(2)].map((_) => {
          return (
            <>
              {clients.map((client: any) => (
                <div className="w-[130px]" key={client._key}>
                  <Image
                    width={130}
                    height={80}
                    src={urlFor(client).url() || "https://placehold.co/50x100"}
                    alt={client._type || "client"}
                    className="w-full h-[80px] border p-2 border-muted-foreground object-cover"
                  />
                </div>
              ))}
            </>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
