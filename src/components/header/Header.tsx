"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import useNavigation from "@/hooks/useNavigation";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const { home, company, projects, services, articles, contact } =
    useNavigation();

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
    <>
      <header>
        {/* Top header */}
        <div className="top_bar bg-[#ebebeb] text-neutral-600">
          <div className="container h-[75px] md:h-[40px] flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
            <div className="flex items-center font-normal text-[15px] text-[#555]">
              <FaLocationDot className="hover:text-[#ffb600] cursor-pointer transition duration-300 ease-in-out mr-2" />
              <span>9051 Apex Builders Co., India</span>
            </div>
            <div className="flex items-center gap-4 hover:cursor-pointer">
              <Link href="#" target="_blank">
                <FaFacebookF className="hover:text-[#ffb600] transition duration-300 ease-in-out" />
              </Link>
              <Link href="#" target="_blank">
                <FaTwitter className="hover:text-[#ffb600] transition duration-300 ease-in-out" />
              </Link>
              <Link href="#" target="_blank">
                <FaInstagram className="hover:text-[#ffb600] transition duration-300 ease-in-out" />
              </Link>
              <Link href="#" target="_blank">
                <FaLinkedinIn className="hover:text-[#ffb600] transition duration-300 ease-in-out" />
              </Link>
              <button onClick={toggleTheme} className="text-2xl text-black">
                {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
              </button>
            </div>
          </div>
        </div>
        {/* Mid header */}
        <div className="container flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-4 py-6">
          <div className="font-mont text-4xl  text-center font-bold lg:w-[200px]">
            <span className="text-orange-400 text-3xl">//#//</span> Apex
            Builders
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-[350px] md:max-w-full md:w-full lg:w-auto text-center ">
            <div className="w-[130px] md:w-[150px] md:border-e">
              <p>Call us</p>
              <a href="tel:9409539265" className="font-semibold">
                (+9) 847-291-2546
              </a>
            </div>
            <div className="w-[130px] md:w-[150px] md:border-e  ">
              <p>Email us</p>
              <a href="mailto:example@gmail.com" className="font-semibold">
                apex@mail.com
              </a>
            </div>
            <div className="w-[130px] ">
              <p>Global Certificate</p>
              <p className="text-black font-semibold">ISO 9001:2017</p>
            </div>

            <div className="w-[130px]">
              <button className="bg-yellow p-[10px] text-white text-nowrap w-full hover:bg-dark-gray hover:text-yellow font-semibold">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav className="h-[60px] bg-dark-gray sticky top-0 z-50 flex items-center">
        {/* Header for desktop */}
        <DesktopNav
          mainMenu={[home, company, projects, services, articles, contact]}
          className="hidden md:flex"
        />
        {/* Header for Mobile */}
        <MobileNav
          mainMenu={[home, company, projects, services, articles, contact]}
          className="md:hidden"
        />
      </nav>
    </>
  );
}
