import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground flex flex-col items-center justify-center mt-auto">
      <div className="container">
        {/* News letter */}
        <div className="py-10 flex flex-col justify-center items-center gap-3 border-b-[0.1px] border-b-black">
          <div className="text-xl font-mont font-semibold">
            Subscribe To Our News Letter
          </div>
          <form action="#" className="flex gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="w-[300px] rounded-md border-none bg-text ps-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <Button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="container flex flex-col gap-3 md:flex-row items-center justify-between w-full py-5">
        <p className="">Copyright © 2010-2025 Apex Builders</p>
        <p className="font-bold ">Developed by SSDas </p>
        <p className="">
          <Link href="/privacy-policy" className="mr-5 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
}
