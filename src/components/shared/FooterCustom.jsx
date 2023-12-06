import React from "react";
import TittleCustom from "./TittleCustom";
import {
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const FooterCustom = () => {
  const listMenuCompany = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Insight",
      link: "/insight",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Services",
      link: "/services",
    },
  ];

  const listMenuGetInTouch = [
    {
      name: "Contact",
      link: "/about",
    },
    {
      name: "Privacy Policy",
      link: "/insight",
    },
    {
      name: "Term Of Services",
      link: "/pricing",
    },
    {
      name: "Frequent Asked Question",
      link: "/services",
    },
  ];

  return (
    <section className=" p-4 md:py-[72px] md:px-[120px] bg-main text-white">
      <p className="text-white text-2xl font-bold border-b border-neutral-50 md:border-none pb-6 md:pb-0">
        Escrow SG
      </p>

      <div className="pt-12 flex justify-between flex-col md:flex-row space-y-6 md:space-y-0">
        <div className="flex justify-between w-full md:w-5/12 border-b border-neutral-50 pb-6 md:border-none">
          <div className="]">
            <p className=" font-bold ">Company</p>
            {listMenuCompany.map((val) => {
              return (
                <p className="mt-4 text-base  text-neutral-50 cursor-pointer">
                  {val.name}
                </p>
              );
            })}
          </div>
          <div className="col-span-2">
            <p className=" font-bold ">Get In Touch</p>
            {listMenuGetInTouch.map((val) => {
              return (
                <p className="mt-4 text-base  text-neutral-50 cursor-pointer">
                  {val.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:items-end">
          <p className=" font-extrabold  leading-normal">CONNECT WITH US</p>
          <div className=" text-white space-x-6 mt-4">
            <a href="https://www.instagram.com/">
              <LinkedinOutlined className=" text-lg" />
            </a>
            <a href="https://www.instagram.com/">
              <FacebookOutlined className=" text-lg" />
            </a>
            <a href="https://www.instagram.com/">
              <TwitterOutlined className=" text-lg" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramOutlined className=" text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCustom;
