import React from "react";

export default function AuthProfileLayout({ children, title, subTitle }) {
  return (
    <div className="p-12 h-screen flex w-100">
      <div className=" w-[35%] flex items-center justify-center relative">
        <img
          src="/img/dashboardLogo.svg"
          alt="logo"
          className="absolute top-0 left-0"
        />
        <div className="max-w-[348px] w-full ">
          <p className="text-4xl font-bold text-main mb-6 font-secondary leading-[52px]">
            {title}
          </p>
          {/* <p className="text-neutral-400 text-base font-normal font-roboto mb-9">
            {subTitle}
          </p> */}
          <div className="">{children}</div>
        </div>
      </div>
      <div className="w-[65%] h-full  bg-gradient-to-tl from-lime-500 to-sky-900 rounded-3xl"></div>
    </div>
  );
}
