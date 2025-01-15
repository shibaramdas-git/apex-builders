import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";

export default function page() {
  return (
    <div>
      <header className="container border-t border-b border-gray-500 my-4 py-2 ">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-4">
          <div className="flex">
            <div className="h-[35px] w-[35px] bg-black rounded-full">c</div>
            <div className="h-[35px] w-[20px] bg-black rounded-s-full">c</div>
            <div className="h-[35px] w-[20px] bg-black rounded-s-full">c</div>
          </div>
          <div className="lg:w-full">
            <ul className="flex gap-8 justify-center">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
              </li>
              <li>
                <Link href="#">Exhibition</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3 ">
            <FaStar className="text-orange-400" />

            <p>
              <span>Sala Canal</span>
              <span>22 Nov 2023</span>
            </p>
            <img
              src="data:image/jpeg;base64,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"
              alt="df"
              width={30}
              className="rounded-full h-[30px]"
            />
          </div>
        </div>
      </header>
      <main>
        <div className="container flex flex-col lg:flex-row gap-10 my-10">
          {/* Left container */}
          <div className="flex-1 flex items-center">
            <div className="">
              <div className="text-right my-10 ">
                <h1 className="text-[18vw] md:text-[10vw] leading-[0.75] mb-10">
                  visual <br />
                  poetry
                </h1>
                <p className="w-[60%] ml-auto">
                  Welcome to visual journey that transcends time and space.
                  Discover the artistiry of moments captured in motion.
                </p>
              </div>
              <div className=" flex items-center">
                <div className="h-[40px] w-[40px] border border-black rounded-full flex justify-center items-center">
                  yt
                </div>
                <div className="h-[40px] w-[40px] border border-black rounded-full flex justify-center items-center -ml-2">
                  ig
                </div>
                <div className="h-[40px] w-[40px] border border-black rounded-full flex justify-center items-center -ml-2">
                  fb
                </div>
                <div className="h-[40px] w-[40px] border border-black rounded-full flex justify-center items-center -ml-2">
                  x
                </div>
                <div className="flex-1 h-[1px] bg-neutral-200"></div>
              </div>
              <div className="flex text-right gap-2 my-6">
                <div className="flex-1">
                  <h2 className="italic text-5xl flex justify-end">
                    <span className="text-3xl">+</span>250k
                  </h2>
                  <p>
                    Videos that reaching a wide audience and giving a lasting
                    impersseion
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="italic text-5xl flex justify-end">
                    <span className="text-3xl">+</span>800k
                  </h2>
                  <p>
                    Videos that reaching a wide audience and giving a lasting
                    impersseion
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right container */}
          <div className="bg-green-200 flex-1 rounded-[50px] relative min-h-[60vh] bg-[url('/boy-filming-with-camcorder-yellow-scene.jpg')] bg-cover">
            <div className="bg-white inline-flex flex-col justify-center items-center gap-2 rounded-tr-[40px] rounded-bl-[40px] p-2 absolute left-0 bottom-0 bottom-corner">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzVmFHpVvVu1dLwXL8a22o0oOqqvn3KSMWSZn6XclXrOeW4sK6rZakdXoBufxCAdR1oc&usqp=CAU"
                alt="df"
                className="w-[60px] rounded-full h-[60px] object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzVmFHpVvVu1dLwXL8a22o0oOqqvn3KSMWSZn6XclXrOeW4sK6rZakdXoBufxCAdR1oc&usqp=CAU"
                alt="df"
                className="w-[60px] rounded-full h-[60px] object-cover"
              />
              <div className="w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center">
                <GoArrowUpRight className="text-white text-4xl" />
              </div>
            </div>
            <div className="inline-block rounded-bl-[40px]  rounded-tr-[40px] p-1 bg-white absolute top-0 right-0 top-corner">
              <CiGlobe className="text-[60px]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
