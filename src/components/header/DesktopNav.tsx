import clsx from "clsx";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";
import { linksType } from "@/hooks/useNavigation";
import { Container } from "../ui/container";

export type DesktopNavProps = {
  mainMenu: linksType[];
  className: string;
};

export default function DesktopNav(props: DesktopNavProps) {
  const { mainMenu, className, ...others } = props;
  return (
    <Container
      className={clsx(
        "justify-between w-full font-mont font-semibold relative",
        className
      )}
    >
      {/* Mapping all nav links */}
      {mainMenu && mainMenu.length > 0 && (
        <ul className="flex items-center gap-5 lg:gap-10 flex-1">
          {mainMenu.map((menu, idx) => (
            // all horizontal links in li
            <li key={idx} className="group relative uppercase py-4">
              {/* Link heading */}
              {/* check if 'menu.items' exists and has items ? */}
              {menu?.items && menu.items.length > 0 ? (
                <Link href={menu.href} tabIndex={0}>
                  {menu?.label}
                  <IoIosArrowDown className="inline group-hover:rotate-180" />
                </Link>
              ) : (
                <Link href={menu.href}>{menu.label}</Link>
              )}
              {/* Link dropdown */}
              {menu?.items && menu.items.length > 0 ? (
                <Dropdown data={menu?.items} />
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="py-4 hover:text-yellow uppercase">
        <Link href="/explore-site">Expolre Site</Link>
      </div>
    </Container>
  );
}
