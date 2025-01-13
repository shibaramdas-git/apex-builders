import { linksType } from "@/hooks/useNavigation";
import clsx from "clsx";
import Link from "next/link";

export type DropdownProps = {
  data: { label: string; href: string }[];
  className?: string;
};

export default function Dropdown(props: DropdownProps) {
  const { data, className } = props;
  return (
    <ul
      className={clsx(
        "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto w-fit min-w-[180px] max-w-[300px] focus:ring-1 flex-col absolute top-full bg-white px-6 text-black text-xs border-t-2 border-yellow group-hover:flex group-focus-within:flex transition-opacity duration-300 shadow-2xl",
        className
      )}
    >
      {data.map((subItem, subIdx) => (
        <li key={subIdx} className="text-nowrap">
          <Link
            href={subItem.href}
            className={clsx(
              "block py-4 border-b border-zinc-300 hover:text-yellow overflow-x-hidden",
              subIdx == data.length - 1 && "border-b-0"
            )}
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
