"use client";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", storedTheme === "dark"); //code executes only if soted theme is dark else nothing.
    setTheme(storedTheme);
  }, []);

  return (
    <header className="border border-black">
      <div className="top_bar bg-[#ebebeb] text-neutral-600">
        <div className="cmn_pad h-[75px] md:h-[40px] flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
          <div className="flex items-center font-normal text-[15px] text-[#555]">
            <LocationOnIcon className="hover:text-[#ffb600] cursor-pointer transition duration-300 ease-in-out" />{" "}
            <span>9051 Apex Builders Co., India</span>
          </div>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-primary text-white"
          >
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
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
      <div className=" bg-[#ffb600] text-black dark:text-red-900">
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
