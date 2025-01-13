import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ffb600] flex flex-col items-center justify-center">
      <div className="container border border-white">
        {/* About company */}
        <div></div>
        {/* footer all links */}
        <div></div>
        {/* News letter */}
        <div></div>
      </div>
      {/* Footer bottom */}
      <div className="container flex flex-col gap-3 md:flex-row items-center justify-between w-full py-5">
        <p className="text-black">Copyright © 2010-2025 Apex Builders</p>
        <p className="font-bold text-black">Developed by SSDas </p>
        <p className="text-black">
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
