import clsx from "clsx";
export type Clients02Props = {
  className?: string;
};

export default function Clients02({ className }: Clients02Props) {
  return (
    <div
      className={clsx(
        className,
        "h-[300px] w-full relative overflow-hidden bg-green-200"
      )}
    >
      {/* First Row: Moves to the left */}
      <div className="p-2 flex space-x-4 justify-center absolute animate-left">
        {clients.map((client, idx) => (
          <div className="w-[130px]">
            <img
              src={client.src || "https://placehold.co/50x100"}
              alt={client.alt || "client"}
              className="w-full h-[80px] border p-2 border-black object-cover"
            />
          </div>
        ))}
      </div>
      {/* Second Row: Moves to the right */}
      <div className="p-2 flex space-x-4 justify-center absolute bottom-0 right-0 animate-right">
        {clients.map((client, idx) => (
          <div className="w-[130px]">
            <img
              src={client.src || "https://placehold.co/50x100"}
              alt={client.alt || "client"}
              className="w-full h-[80px] border p-2 border-black object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}

const clients = [
  { id: 1, src: "https://placehold.co/10x100", alt: "Client 1" },
  { id: 2, src: "https://placehold.co/20x100", alt: "Client 2" },
  { id: 3, src: "https://placehold.co/30x100", alt: "Client 3" },
  { id: 4, src: "https://placehold.co/40x100", alt: "Client 4" },
  { id: 5, src: "https://placehold.co/50x100", alt: "Client 5" },
  { id: 6, src: "https://placehold.co/60x100", alt: "Client 6" },
  { id: 7, src: "https://placehold.co/70x100", alt: "Client 7" },
  { id: 8, src: "https://placehold.co/80x100", alt: "Client 8" },
  { id: 9, src: "https://placehold.co/90x100", alt: "Client 9" },
  { id: 10, src: "https://placehold.co/100x100", alt: "Client 10" },
];
