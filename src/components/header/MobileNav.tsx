import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";
import Link from "next/link";
import clsx from "clsx";
import { linksType } from "@/hooks/useNavigation";
import { Container } from "../ui/container";

export type MobileNavProps = {
  mainMenu: linksType[];
  className: string;
};

export default function MobileNav(props: MobileNavProps) {
  const { mainMenu, className, ...others } = props;
  // console.log(mainMenu, className);

  return (
    <Container
      className={clsx("flex items-center justify-between w-full", className)}
    >
      <p className="text-xl font-bold">
        <span className="font-normal">&#47;&#47;#&#47;&#47;</span>Apex Builders
      </p>
      <div className="dropdown relative group py-4">
        <button className="hover:text-yellow uppercase font-semibold">
          MENU <IoIosArrowDown className="inline group-hover:rotate-180" />
        </button>
        {/* <Dropdown /> */}
        <Dropdown data={mainMenu} className="-right-4" />
      </div>
    </Container>
  );
}
