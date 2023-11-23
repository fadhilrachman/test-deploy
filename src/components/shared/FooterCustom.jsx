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
    <section className="pt-[100px] pb-[30px]">
      <div className="px-[120px]">
        <TittleCustom className={"font-bold"}> ESCROW SG</TittleCustom>

        <div className="pt-7 grid grid-cols-4">
          <div>
            <p className="text-main font-extrabold mb-1">Company</p>
            {listMenuCompany.map((val) => {
              return <p className="mt-3 cursor-pointer">{val.name}</p>;
            })}
          </div>
          <div className="col-span-2">
            <p className="text-main font-extrabold mb-1">Get In Touch</p>
            {listMenuGetInTouch.map((val) => {
              return <p className="mt-3 cursor-pointer">{val.name}</p>;
            })}
          </div>
          <div className="flex flex-col items-end">
            <p className="text-main font-extrabold mb-1">CONNECT WITH US</p>
            <div className="text-main">
              <a href="https://www.instagram.com/">
                <LinkedinOutlined className="mr-3 text-lg" />
              </a>
              <a href="https://www.instagram.com/">
                <FacebookOutlined className="mr-3 text-lg" />
              </a>
              <a href="https://www.instagram.com/">
                <TwitterOutlined className="mr-3 text-lg" />
              </a>
              <a href="https://www.instagram.com/">
                <InstagramOutlined className="mr-3 text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCustom;
