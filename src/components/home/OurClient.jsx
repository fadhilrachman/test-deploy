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
    <section className="  space-y-12 py-12">
      <TittleCustom
        title="OUR CLIENTS"
        subTitle="See who’s our partners"
        className="text-center px-[120px]"
      />
      <Marquee className="flex justify-between " autoFill pauseOnHover>
        {clientLogos.map((res, i) => (
          <img
            src={res}
            alt="client"
            key={i}
            className="mx-6 object-contain max-h-[120px] max-w-[300px] bg-red-300"
          />
        ))}
      </Marquee>
    </section>
  );
}
