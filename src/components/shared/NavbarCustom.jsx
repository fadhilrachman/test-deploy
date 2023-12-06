"use client";
import React, { useState } from "react";
import ButtonCustom from "./ButtonCustom";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function NavbarCustom() {
  const [open, setOpen] = useState(false);
  const listMenu = [
    {
      name: "Insight",
      path: "/insight",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <div className="w-full h-[84px] px-[120px]  items-center justify-between bg-main fixed top-0 left-0 right-0 z-50 hidden md:flex">
        <Link href={"/"}>
          <img src="/img/logo.svg" width={116} height={27} alt="logo" />
        </Link>
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-12">
              {listMenu.map((val) => {
                return (
                  <Link
                    href={val.path}
                    className="text-white text-base font-bold"
                  >
                    {val.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex space-x-4">
              <Link href={"/auth"}>
                <ButtonCustom title="SIGN IN" />
              </Link>
              <ButtonCustom title="REGISTER" type="outline" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full fixed top-0 left-0 right-0 z-50  bg-main p-6 border-b border-neutral-50  items-center flex justify-between  md:hidden">
        <Link href={"/"}>
          <img src="/img/logo.svg" width={116} height={27} alt="logo" />
        </Link>
        {open ? (
          <IoClose
            className="text-white w-6 h-6 cursor-pointer transition-all "
            onClick={() => setOpen(!open)}
          />
        ) : (
          <HiMenu
            className="text-white w-6 h-6 cursor-pointer transition-all "
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      {open && (
        <div className="w-full flex space-y-6 flex-col fixed top-20 border-t p-8 border-neutral-50  left-0 ring-0 z-50 bg-main">
          {listMenu.map((val) => {
            return (
              <Link href={val.path} className="text-white text-base font-bold">
                {val.name}
              </Link>
            );
          })}
          <Link href={"/auth"}>
            <ButtonCustom
              title="SIGN IN"
              type={""}
              className={"w-full text-blue-950"}
            />
          </Link>
          <ButtonCustom title="REGISTER" type="outline" className=",t-3" />
        </div>
      )}
    </>
  );
}
