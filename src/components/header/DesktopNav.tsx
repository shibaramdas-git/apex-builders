import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function DesktopNav() {
  return (
    <div className="hidden container md:flex justify-between w-full text-white font-mont font-semibold relative">
      <ul className="flex gap-5">
        <li className="py-4  hover:text-yellow">
          <Link href="/">Home</Link>
        </li>
        {/* Dropdown for About us */}
        <li className="dropdown relative group">
          <button className="hover:text-yellow uppercase py-4">
            Company <IoIosArrowDown className="inline group-hover:rotate-180" />
          </button>
          <ul className="hidden group-hover:flex flex-col absolute bg-white min-w-[200px] px-6 text-black text-xs border-t-2 border-yellow">
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
          <Link href="/projects">Projects</Link>
        </li>
        {/* All 6 services menu */}
        <li className="py-4 hover:text-yellow">
          <div className="group">
            <button className="hover:text-yellow uppercase">
              SERVICES
              <IoIosArrowDown className="inline group-hover:rotate-180" />
            </button>
            <div className="hidden absolute top-[60px] left-[1rem] group-hover:block bg-white p-4 w-full">
              <div className="border border-black flex h-full py-4 w-full">
                <div className="flex flex-wrap items-center justify-center gap-4 lg:w-[70%]">
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="flex border border-black w-[300px]">
                    <div className="bg-slate-200 w-20">
                      <img src="#" alt="" />
                      image
                    </div>
                    <div>
                      <h4>Interior design</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
                <div className="border-l border-l-gray hidden lg:flex justify-center items-center flex-1">
                  <img src="https://dummyjson.com/image/230x230" alt="df" />
                </div>
              </div>
            </div>
          </div>
        </li>
        {/* Articles with categories and recent articles */}
        <li className="py-4 hover:text-yellow">
          <div className="group">
            <button className="hover:text-yellow uppercase">
              ARTICLES
              <IoIosArrowDown className="inline group-hover:rotate-180" />
            </button>
            <div className="hidden absolute top-[60px] left-[1rem] group-hover:block bg-white p-4 w-full">
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
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="py-4">
        <Link href="/studio">Studio</Link>
      </div>
    </div>
  );
}
