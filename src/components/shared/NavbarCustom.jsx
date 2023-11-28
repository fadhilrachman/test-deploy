"use client";
import React from "react";
import ButtonCustom from "./ButtonCustom";
import Link from "next/link";

export default function NavbarCustom() {
  return (
    <div className="w-full h-[84px] px-[120px] flex items-center justify-between bg-main fixed top-0 left-0 right-0 z-50">
      <p className="text-white text-2xl font-bold">ESCROW</p>
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-12">
          <Link href="/insight" className="text-white text-base font-bold">
            Insight
          </Link>
          <Link href="/contact" className="text-white text-base font-bold">
            Contact
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/login">
            <ButtonCustom title="SIGN IN" />
          </Link>
          <Link href="/register">
            <ButtonCustom title="REGISTER" type="outline" className="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
