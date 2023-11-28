import Link from "next/link";
import React from "react";

export default function AuthProfileLayout({ children, title, subTitle }) {
  return (
    <div className="p-12 h-screen flex w-100">
      <div className=" w-[35%] flex items-center justify-center relative">
        <Link href="/">
          <img
            src="/img/dashboardLogo.svg"
            alt="logo"
            className="absolute top-0 left-0"
          />
        </Link>
        <div className="max-w-[348px] w-full ">
          <div className="mb-6">
            <p className="text-4xl font-bold text-main mb-0 font-secondary leading-[52px]">
              {title}
            </p>
            <p className="text-neutral-400 text-base font-normal font-roboto ">
              {subTitle}
            </p>
          </div>
          <div className="">{children}</div>
        </div>
      </div>
      <div className="w-[65%] h-full  bg-gradient-to-tl from-lime-500 to-sky-900 rounded-3xl"></div>
    </div>
  );
}
