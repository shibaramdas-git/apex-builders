import clsx from "clsx";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export type DesktopNavProps = {
  mainMenu: string[];
  className: string;
};

export default function DesktopNav(props: DesktopNavProps) {
  const { mainMenu, className, ...others } = props;
  // console.log(mainMenu, className);
  return (
    <div
      className={clsx(
        "container justify-between w-full text-white font-mont font-semibold relative",
        className
      )}
    >
      <ul className="flex gap-5">
        <li className="py-4  hover:text-yellow">
          <Link href="/">HOME</Link>
        </li>
        {/* Dropdown for company or about */}
        <li className="dropdown relative group py-4">
          <button className="hover:text-yellow uppercase">
            Company <IoIosArrowDown className="inline group-hover:rotate-180" />
          </button>
          <ul className="hidden group-hover:flex flex-col absolute top-full bg-white min-w-[200px] px-6 text-black text-xs border-t-2 border-yellow">
            <li className="">
              <Link
                href="/about"
                className=" block py-4 border-b border-zinc-300 hover:text-yellow "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/about/team"
                className=" block py-4 border-b border-zinc-300 hover:text-yellow "
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/about/career"
                className=" block py-4 border-b border-zinc-300 hover:text-yellow "
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/about/faq"
                className=" block py-4 hover:text-yellow "
              >
                FAQs
              </Link>
            </li>
          </ul>
        </li>
        <li className="py-4 hover:text-yellow">
          <Link href="/projects">PROJECTS</Link>
        </li>
        {/* All 6 services menu */}
        <li className="hover:text-yellow">
          <div className="group py-4">
            <button className="hover:text-yellow uppercase">
              SERVICES
              <IoIosArrowDown className="inline group-hover:rotate-180" />
            </button>
            <ul className="hidden group-hover:flex flex-col absolute top-full bg-white min-w-[200px] px-6 text-black text-xs border-t-2 border-yellow">
              <li className="">
                <Link
                  href="/services"
                  className=" block py-4 border-b border-zinc-300 hover:text-yellow "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team"
                  className=" block py-4 border-b border-zinc-300 hover:text-yellow "
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about/career"
                  className=" block py-4 border-b border-zinc-300 hover:text-yellow "
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/about/faq"
                  className=" block py-4 hover:text-yellow "
                >
                  FAQs
                </Link>
              </li>
            </ul>
            {/* <div className="hidden absolute left-[1rem] top-full group-hover:block bg-white p-4 container  border-t-2 border-yellow">
              <div className="border border-black flex h-full py-4 w-full">
                <div className="flex items-center justify-center gap-4 lg:w-[70%]">
                  <ul className=" bg-white min-w-[200px] px-6 text-black text-xs">
                    <li className="">
                      <Link
                        href="/about"
                        className=" block py-4 border-b border-zinc-300 hover:text-yellow "
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/team"
                        className=" block py-4 border-b border-zinc-300 hover:text-yellow "
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/career"
                        className=" block py-4 border-b border-zinc-300 hover:text-yellow "
                      >
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/faq"
                        className=" block py-4 hover:text-yellow "
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </li>
        {/* Articles with categories and recent articles */}
        <li className="hover:text-yellow">
          <div className="group py-4">
            <button className="hover:text-yellow uppercase">
              ARTICLES
              <IoIosArrowDown className="inline group-hover:rotate-180" />
            </button>
            <div className="hidden absolute top-full left-[1rem] group-hover:block bg-white p-4 w-full  border-t-2 border-yellow">
              <div className="border border-black flex justify-between h-full py-4 w-full">
                <div className="bg-slate-200">
                  <h4>All categories</h4>
                  <ul>
                    <li>Category 1 Lorem, ipsum.</li>
                    <li>Category 2 Lorem, ipsum.</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                  </ul>
                </div>
                <div className="hidden lg:block bg-red-200">
                  <img src="https://dummyjson.com/image/230x230" alt="df" />
                </div>
                <div className="">
                  <h4>Recent blogs</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex border border-black w-[300px]">
                      <div className="bg-slate-200 w-20">
                        <img src="#" alt="" />
                        image
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="flex border border-black w-[300px]">
                      <div className="bg-slate-200 w-20">
                        <img src="#" alt="" />
                        image
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="flex border border-black w-[300px]">
                      <div className="bg-slate-200 w-20">
                        <img src="#" alt="" />
                        image
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="flex border border-black w-[300px]">
                      <div className="bg-slate-200 w-20">
                        <img src="#" alt="" />
                        image
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="py-4 hover:text-yellow">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className="py-4">
        <Link href="/studio">STUDIO</Link>
      </div>
    </div>
  );
}
