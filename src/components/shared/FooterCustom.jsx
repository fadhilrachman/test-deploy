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
    <section className=" py-[72px]">
      <div className="px-[120px]">
        <p className="text-blue-950 text-2xl font-bold">Escrow SG</p>

        <div className="pt-12 grid grid-cols-4">
          <div>
            <p className="text-main font-bold ">Company</p>
            {listMenuCompany.map((val) => {
              return <p className="mt-4 cursor-pointer">{val.name}</p>;
            })}
          </div>
          <div className="col-span-2">
            <p className="text-main font-bold ">Get In Touch</p>
            {listMenuGetInTouch.map((val) => {
              return <p className="mt-4 cursor-pointer">{val.name}</p>;
            })}
          </div>
          <div className="flex flex-col items-end">
            <p className="text-main font-extrabold  leading-normal">
              CONNECT WITH US
            </p>
            <div className="text-main space-x-6 mt-4">
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
      </div>
    </section>
  );
};

export default FooterCustom;
