"use client";
import React, { useState } from "react";

interface AccordionItem {
  _key: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  heading: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, heading }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (_key: string) => {
    setActiveId((prevId) => (prevId === _key ? null : _key)); // Toggle logic
  };

  return (
    <section>
      <div className="w-full max-w-xl mx-auto">
        <h4 className="text-center text-xl font-bold">{heading}</h4>
        {items &&
          items.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Accordion Header */}
              <button
                onClick={() => handleToggle(item._key)}
                className="w-full flex justify-between items-center p-4 text-left bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="font-semibold text-gray-800">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeId === item._key ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Accordion Content */}
              {activeId === item._key && (
                <div className="p-4 bg-white text-gray-700">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Accordion;
