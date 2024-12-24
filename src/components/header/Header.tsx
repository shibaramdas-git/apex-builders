import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="top bg-[#ebebeb] h-[75px] text-neutral-600 md:h-[40px] flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
        <div className="flex items-center">
          <LocationOnIcon className="hover:text-[#ffb600] cursor-pointer transition duration-300 ease-in-out" />{" "}
          <span>9051 Apex Builders Co., India</span>
        </div>
        <div className="flex gap-2 hover:cursor-pointer">
          <Link href="#" target="_blank">
            <FacebookIcon className="hover:text-[#ffb600] transition duration-300 ease-in-out" />
          </Link>
          <Link href="#" target="_blank">
            <InstagramIcon className="hover:text-[#ffb600] transition duration-300 ease-in-out" />
          </Link>
          <Link href="#" target="_blank">
            <XIcon className="hover:text-[#ffb600] transition duration-300 ease-in-out" />
          </Link>
          <Link href="#" target="_blank">
            <LinkedInIcon className="hover:text-[#ffb600] transition duration-300 ease-in-out text-[26px]" />
          </Link>
        </div>
      </div>
      <div className="h-40 bg-[#ffb600]"> dfdf</div>
    </header>
  );
}
