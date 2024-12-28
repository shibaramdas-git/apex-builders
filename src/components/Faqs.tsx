"use client";
import React, { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  heading: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, heading }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id)); // Toggle logic
  };

  return (
    <section>
      <div className="w-full max-w-xl mx-auto">
        <h4 className="text-center text-xl font-bold">{heading}</h4>
        {items.map((item) => (
          <div key={item.id} className="border-b border-gray-300">
            {/* Accordion Header */}
            <button
              onClick={() => handleToggle(item.id)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="font-semibold text-gray-800">{item.title}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeId === item.id ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* Accordion Content */}
            {activeId === item.id && (
              <div className="p-4 bg-white text-gray-700">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
