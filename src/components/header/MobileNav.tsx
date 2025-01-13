import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";
import Link from "next/link";
import clsx from "clsx";
import { linksType } from "@/hooks/useNavigation";

export type MobileNavProps = {
  mainMenu: linksType[];
  className: string;
};

export default function MobileNav(props: MobileNavProps) {
  const { mainMenu, className, ...others } = props;
  // console.log(mainMenu, className);

  return (
    <div
      className={clsx(
        "container flex  items-center justify-between text-white w-full",
        className
      )}
    >
      <div>//#//Apex </div>
      <div className="dropdown relative group py-4">
        <button className="hover:text-yellow uppercase">
          MENU <IoIosArrowDown className="inline group-hover:rotate-180" />
        </button>
        {/* <Dropdown /> */}
        <Dropdown data={mainMenu} className="-right-4" />
      </div>
    </div>
  );
}
