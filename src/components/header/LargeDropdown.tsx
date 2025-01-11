import Link from "next/link";

// export type DropdownProps = {
//     columns: 1 | 2,
//     heading: string,
//     columnOptions:
// };
export default function LargeDropdown() {
  return (
    <div>
      <h5>Large dropdown</h5>
      <ul className="hidden group-hover:flex flex-col absolute top-full bg-white min-w-[200px] px-6 text-black text-xs border-t-2 border-yellow">
        <li className="">
          <Link
            href="/about"
            className=" block py-4 border-b border-zinc-300 hover:text-yellow "
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/about/team"
            className=" block py-4 border-b border-zinc-300 hover:text-yellow "
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            href="/about/career"
            className=" block py-4 border-b border-zinc-300 hover:text-yellow "
          >
            Career
          </Link>
        </li>
        <li>
          <Link href="/about/faq" className=" block py-4 hover:text-yellow ">
            FAQs
          </Link>
        </li>
      </ul>
    </div>
  );
}
