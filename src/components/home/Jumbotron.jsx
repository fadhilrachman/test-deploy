"use client";
import { useHomeStores } from "@/stores/home.stores";
import React from "react";
import ButtonCustom from "../shared/ButtonCustom";
import Image from "next/image";

export default function Jumbotron() {
  const { count, inc } = useHomeStores((state) => state);
  return (
    <section className=" min-h-screen w-full bg-main pt-[104px] md:pt-[84px] pb-6 ">
      <div className="flex  flex-col-reverse md:flex-row items-center justify-between px-6 md:px-[120px] h-full">
        <div className="max-w-[492px] mt-6 md:mt-0">
          <h1 className="text-yellow text-2xl  md:text-5xl font-bold font-secondary leading-loose md:leading-[72px] mb-2">
            Mitigate your transaction risk.
          </h1>
          <p className="text-white text-xs md:text-sm font-medium  mb-6">
            Facilitating trust, streamlining transactions, and automating
            assurance. Welcome to ESCROW SG, where security meets seamlessness.
          </p>
          <ButtonCustom height={40} title="JOIN US" type="outline" />
        </div>
        <div className="">
          <img
            src="/img/jumboImage.svg"
            className="w-[588px] object-contain shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
