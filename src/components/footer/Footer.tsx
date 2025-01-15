import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ffb600] flex flex-col items-center justify-center">
      <div className="container">
        <div>{/* About company */}</div>

        <div>{/* footer all links */}</div>
        {/* News letter */}
        <div className="py-10 flex flex-col justify-center items-center gap-3 border-b-[0.1px] border-b-black">
          <div className="text-xl font-mont font-semibold">
            Subscribe To Our News Letter
          </div>
          <form action="#">
            <input
              type="email"
              name="email"
              // value={""}
              placeholder="Enter email address"
              className="w-[300px] px-4 py-2 rounded-md focus:outline-none focus:ring-[2px] focus:ring-blue-500 mr-2"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
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
