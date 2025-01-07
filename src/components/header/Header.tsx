import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border border-black">
      <div className="top_bar bg-[#ebebeb] text-neutral-600">
        <div className="cmn_pad h-[75px] md:h-[40px] flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
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
      </div>
      <div className=" bg-[#ffb600]">
        <div className="cmn_pad flex gap-2 justify-between">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/news">News</Link>
          <Link href="/studio">Studio</Link>
        </div>
      </div>
    </header>
  );
}
