import React from "react";
import TestimonialSingle from "../shared/testimonial/TestimonialSingle";
import Clients02 from "../shared/testimonial/Clients02";

export default function TestimonialSection() {
  return (
    <div className="py-4">
      <div>
        <h4 className="text-center mb-4">Testimonials</h4>
        <TestimonialSingle />
      </div>
      <div className="w-full ">
        <h4 className="text-center mb-4">Clients</h4>
        <Clients02 className="" />
      </div>
    </div>
  );
}
