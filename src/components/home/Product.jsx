"use client";
import React, { useRef, useState } from "react";
import { Button, Carousel, Tabs } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// TABS
const LabelTabs = ({ children, isActive = false }) => {
  return (
    <div
      className={` " h-8 md:h-11 px-3  md:px-4 py-1.5 md:py-3  ${
        isActive ? "text-blue-950 bg-white" : " bg-blue-950 text-white "
      } rounded-[120px] justify-center items-start text-sm font-semibold leading-tight`}
    >
      {children}
    </div>
  );
};

// CAROUSEL
const ContentCarousel = ({ tittle, subTittle, description, imageContent }) => {
  return (
    <div className=" ">
      <div className="space-y-6 flex flex-col items-center mb-[72px]">
        <h3 className="text-white text-2xl text-center md:text-4xl font-bold font-secondary">
          {tittle}
        </h3>
        <div className="text-center w-full text-white text-sm md:text-base font-normal md:font-medium">
          {subTittle}
        </div>
        <p className="  text-center text-white text-sm md:text-base font-normal">
          {description}
        </p>
      </div>
      <div className="text-white">{imageContent}</div>
    </div>
  );
};

const listImage = [
  "/img/product/rainbow.svg",
  "/img/product/trust.svg",
  "/img/product/product2.svg",
  "/img/product/metamask.svg",
  "/img/product/product3.svg",
  "/img/product/product5.svg",
  "/img/product/product6.svg",
  "/img/product/product7.svg",
  "/img/product/product8.svg",
  "/img/product/product9.svg",
  "/img/product/product4.svg",
  "/img/product/product10.svg",
];

const Product = () => {
  const [key, setKey] = useState("1");
  const [page, setPage] = useState(0);
  const ref = useRef();

  const next = () => {
    if (page < 2) {
      const newPage = page + 1;
      setPage(newPage);
      ref.current.goTo(newPage, false);
    }
  };

  const pref = () => {
    if (page > 0) {
      const newPage = page - 1;
      setPage(newPage);
      ref.current.goTo(newPage, false);
    }
  };

  const itemTabs = [
    {
      key: "1",
      label: <LabelTabs isActive={key == "1"}>BUSINESS CASE</LabelTabs>,
      children: (
        <div className="text-center text-white text-sm md:text-base font-normal">
          In sale purchase escrow arrangement, ESCROW SG acts as an independent
          and neutral third party who holds the funds from the buyer as proof of
          commitment in the transaction. Once certain pre-agreed conditions are
          fulfilled, the escrow agent will release the escrowed amount to the
          seller.
        </div>
      ),
    },
    {
      key: "2",
      label: <LabelTabs isActive={key == "2"}>INDIVIDUAL CASE</LabelTabs>,
    },
  ];

  const listContentCarousel = [
    {
      tittle: "All-In-One Escrow Payment Solution",
      subTittle:
        "Escrow SG provides both offline and online escrow payment solution.",
      description:
        "We understand what people are looking for in an payment system: bank-grade security, ease of use, dispute resolution and quick disbursement of funds, all while being fully compliant with Singapore laws. We also added professional intermediaries and alerts to ease your transactions.",
      imageContent: (
        <img src="/img/product/paymentsolution.svg" alt="product" />
      ),
    },
    {
      tittle: "Fiat & (upcoming) Cryptocurrency",
      subTittle:
        "For fiat escrow, simply transfer the escrow amount to our bank account.",
      description:
        "For (upcoming) cryptocurrency escrow, Escrow SG platform is integrated with WalletConnect which connects you with over 100 leading wallets. This ensures that you are able to transact with your existing wallets and provides more for you to choose from.",
      imageContent: (
        <div className="grid grid-cols-4 gap-6">
          {listImage.map((val) => {
            return <img src={val} alt="product" className="rounded-full" />;
          })}
        </div>
      ),
    },
    // {
    //   tittle: "Use Case",
    //   subTittle: (
    //     <Tabs
    //       onChange={(key) => {
    //         setKey(key);
    //       }}
    //       defaultActiveKey="1"
    //       // className="bg-purple-300 w-[143px]"
    //       animated={{ inkBar: true, tabPane: false, tabPaneMotion: true }}
    //       items={itemTabs}
    //       tabBarStyle={{
    //         border: "none",
    //         textDecoration: "none",
    //         margin: "0 auto",
    //         width: "300px",
    //       }}
    //     />
    //   ),
    // },
  ];

  return (
    <section className=" gap-6 md:flex  max-h-[1044px] bg-blue-950 p-4 md:py-[72px] md:px-[120px] xl:px-[240px] ">
      <div className="hidden md:block">
        <Button onClick={pref} size="large" shape="circle">
          <IoIosArrowBack className="w-full" />
        </Button>
      </div>
      <Carousel
        style={{ maxWidth: "816px" }}
        ref={ref}
        infinite
        afterChange={(e) => {
          console.log({ e });
        }}
        dots={false}
      >
        {listContentCarousel.map((val, key) => {
          return (
            <ContentCarousel
              key={key}
              tittle={val.tittle}
              subTittle={val.subTittle}
              description={val.description}
              imageContent={val.imageContent}
            />
          );
        })}
      </Carousel>
      <div className="hidden md:block">
        <Button
          onClick={next}
          size="large"
          // className="flex justify-center"
          shape="circle"
        >
          <IoIosArrowForward className="w-full" />
        </Button>
      </div>
    </section>
  );
};

export default Product;
