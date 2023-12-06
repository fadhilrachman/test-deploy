"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import TittleCustom from "../shared/TittleCustom";

export default function OurClient() {
  const clientLogos = [
    "/img/clientLogo/aws.png",
    "/img/clientLogo/daofab.png",
    "/img/clientLogo/ether.png",
    "/img/clientLogo/metamask.png",
    "/img/clientLogo/wallet.png",
    "/img/clientLogo/watiga.png",
    "/img/clientLogo/watigatrust.png",
  ];

  return (
    <section className="space-y-6  py-6 md:py-12 md:space-y-12">
      <TittleCustom
        title="OUR CLIENTS"
        subTitle="See who’s our partners"
        className="text-left md:text-center px-6 md:px-[120px] "
      />
      <Marquee className="flex justify-between " autoFill pauseOnHover>
        {clientLogos.map((res, i) => (
          <img
            src={res}
            alt="client"
            key={i}
            className="mx-6 object-contain h-12 md:h-max max-h-[120px] max-w-[300px] bg-red-300"
          />
        ))}
      </Marquee>
    </section>
  );
}
