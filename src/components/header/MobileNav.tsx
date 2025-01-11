import Dropdown from "./Dropdown";

export default function MobileNav() {
  return (
    <div className="container flex md:hidden items-center justify-between text-white w-full ">
      <div>//#//Apex </div>

      <Dropdown />
      <Dropdown />
    </div>
  );
}
