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
import { Container } from "../ui/container";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

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
        {/* Top Header Bar */}
        <div className="bg-accent text-accent-foreground py-2">
          <Container className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
            <div className="flex items-center text-sm">
              <FaLocationDot className="text-primary mr-2" />
              <span>9051 Apex Builders Co., India</span>
            </div>
            <div className="flex items-center gap-4">
              <SocialLinks />
              <button
                onClick={toggleTheme}
                className="text-3xl hover:text-primary transition duration-300 ease-in-out"
              >
                {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
              </button>
            </div>
          </Container>
        </div>

        {/* Mid header */}
        {/* Middle Header Section */}
        <Container className="py-6 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <h1 className="text-4xl font-bold text-center lg:w-[200px]">
            <span className="text-primary">//#//</span> Apex Builders
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <ContactInfo
              label="Call us"
              value="(+9) 847-291-2546"
              href="tel:9409539265"
            />
            <Separator
              orientation="vertical"
              className="hidden md:block h-10"
            />
            <ContactInfo
              label="Email us"
              value="apex@mail.com"
              href="mailto:example@gmail.com"
            />
            <Separator
              orientation="vertical"
              className="hidden md:block h-10"
            />
            <ContactInfo label="Global Certificate" value="ISO 9001:2017" />
            <Button asChild>
              <Link href="/contact">Get A Quote</Link>
            </Button>
          </div>
        </Container>
      </header>
      {/* Navigation Bar */}
      <nav className="h-14 bg-primary text-primary-foreground sticky -top-1 z-50 flex items-center">
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

function SocialLinks() {
  return (
    <>
      <Link href="#" aria-label="Facebook">
        <FaFacebookF className="hover:text-primary transition" />
      </Link>
      <Link href="#" aria-label="Twitter">
        <FaTwitter className="hover:text-primary transition" />
      </Link>
      <Link href="#" aria-label="Instagram">
        <FaInstagram className="hover:text-primary transition" />
      </Link>
      <Link href="#" aria-label="LinkedIn">
        <FaLinkedinIn className="hover:text-primary transition" />
      </Link>
    </>
  );
}
function ContactInfo({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="text-center">
      <p className="text-muted-foreground">{label}</p>
      {href ? (
        <a href={href} className="font-semibold hover:underline">
          {value}
        </a>
      ) : (
        <p className="font-semibold">{value}</p>
      )}
    </div>
  );
}
