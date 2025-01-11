import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";
import Link from "next/link";
import clsx from "clsx";

export type MobileNavProps = {
  mainMenu: string[];
  className: string;
};

export default function MobileNav(props: MobileNavProps) {
  const { mainMenu, className, ...others } = props;
  console.log(mainMenu, className);

  return (
    <div
      className={clsx(
        "container flex  items-center justify-between text-white w-full",
        className
      )}
    >
      <div>//#//Apex </div>
      {mainMenu && mainMenu.map((menu, idx) => <div key={idx}>he</div>)}
      <div className="dropdown relative group py-4">
        <button className="hover:text-yellow uppercase">
          Company <IoIosArrowDown className="inline group-hover:rotate-180" />
        </button>
        <Dropdown />
      </div>
    </div>
  );
}
