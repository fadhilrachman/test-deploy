"use client";
import ButtonCustom from "@/components/shared/ButtonCustom";
import Link from "next/link";
import React from "react";

export default function CongratPage() {
  return (
    <div className="p-12 h-screen flex w-100 relative justify-center items-center">
      <Link href="/">
        <img
          src="/img/dashboardLogo.svg"
          alt="logo"
          className="absolute top-0 left-0 m-12 "
        />
      </Link>
      <div className=" space-y-5 flex-col flex items-center justify-center">
        <p className="text-center text-main font-secondary text-5xl font-bold">
          Congratulations!
        </p>
        <p className="text-center text-neutral-700 text-base">
          Your profile is ready to use
        </p>
        <img src="/img/baloons.svg" alt="" />
        <ButtonCustom
          className="bg-main text-white w-[80%]"
          title="Sign In"
          textClassName="text-white"
          height={40}
        />
      </div>
    </div>
  );
}
