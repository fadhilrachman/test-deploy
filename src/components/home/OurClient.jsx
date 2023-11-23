"use client";

import React from "react";
import Marquee from "react-fast-marquee";

export default function OurClient() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <section className="h-[50vh] bg-blue-300">
      <Marquee
        afterChange={onChange}
        className="flex justify-between"
        autoFill
        pauseOnHover
      >
        {[1, 2, 3].map((res, i) => (
          <h3 className="h-[50px] w-[200px] bg-red-200 border text-center">
            {res}
          </h3>
        ))}
      </Marquee>
    </section>
  );
}
