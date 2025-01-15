import Link from "next/link";
import React from "react";
import { BsBuildings } from "react-icons/bs";

export default function ServiceSection() {
  return (
    <section>
      <div className="container py-12">
        <div className="text-center ">
          <p className="text-lg md:text-xl font-light mb-1 uppercase">
            {"We are specialist in "}
          </p>
          <h2 className="text-3xl lg:text-4xl mb-3">{"What we do"}</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-3 border border-black">
            <div className="flex gap-3 items-center">
              <div>
                <BsBuildings className="text-6xl text-yellow" />{" "}
              </div>
              <div>
                <h5>
                  <Link
                    href="/services/01"
                    className="hover:text-yellow text-lg"
                  >
                    HOME CONSTRUCTION
                  </Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                  amet. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Modi, accusantium.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <BsBuildings className="text-8xl text-yellow" />

              <div>
                <h4 className="mb-1">HOME CONSTRUCTION</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque minus architecto exercitationem incidunt culpa volupt.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <BsBuildings className="text-8xl text-yellow" />

              <div>
                <h4 className="mb-1">HOME CONSTRUCTION</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque minus architecto exercitationem incidunt culpa volupt.
                </p>
              </div>
            </div>
          </div>
          <div className=" border border-black">
            <img src="/peoples/contractor.png" alt="image" />
          </div>
          <div className=" border border-black">
            <div className="flex gap-3 items-center">
              <BsBuildings className="text-8xl text-yellow" />

              <div>
                <h4 className="mb-1">HOME CONSTRUCTION</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque minus architecto exercitationem incidunt culpa volupt.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <BsBuildings className="text-8xl text-yellow" />

              <div>
                <h4 className="mb-1">HOME CONSTRUCTION</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque minus architecto exercitationem incidunt culpa volupt.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <BsBuildings className="text-8xl text-yellow" />

              <div>
                <h4 className="mb-1">HOME CONSTRUCTION</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque minus architecto exercitationem incidunt culpa volupt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
