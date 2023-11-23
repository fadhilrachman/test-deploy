"use client";
import { useHomeStores } from "@/stores/home.stores";
import React from "react";
import ButtonCustom from "../shared/ButtonCustom";
import Image from "next/image";

export default function Jumbotron() {
  const { count, inc } = useHomeStores((state) => state);
  return (
    <section className="h-screen w-full bg-main pt-[84px]">
      <div className="flex items-center justify-between px-[120px] h-full">
        <div className="max-w-[492px]">
          <h1 className="text-yellow  text-5xl font-bold font-secondary leading-[72px] mb-2">
            Mitigate your transaction risk.
          </h1>
          <p className="text-white text-sm font-medium  mb-6">
            Facilitating trust, streamlining transactions, and automating
            assurance. Welcome to ESCROW SG, where security meets seamlessness.
          </p>
          <ButtonCustom height={40} title="JOIN US" type="outline" />
        </div>
        <div className="">
          <img
            src="/img/jumboImage.png"
            className="shadow-xl w-[588px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
