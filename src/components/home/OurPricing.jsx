import React from "react";
import TittleCustom from "../shared/TittleCustom";
import { FaCheck } from "react-icons/fa6";

const Card = ({ tittle, price, list, className, classNamePrice }) => {
  return (
    <div className="border border-zinc-200 rounded-t-xl rounded-b-xl">
      <h3 className="text-center font-secondary bg-blue-950 rounded-t-xl py-4 text-white text-4xl font-bold">
        {tittle}
      </h3>

      <div
        className={`${classNamePrice} py-1 border-b border-zinc-200 flex items-center justify-center text-4xl md:text-5xl font-secondary font-bold`}
      >
        {price}
      </div>

      <div className="p-4 rounded-b-xl ">
        {list.map((val, key) => {
          return (
            <div key={key} className="flex  w-full items-start mt-4 ">
              <FaCheck className="text-green-500 mr-3 h-6 " />
              <div className="text-base text-neutral-700 w-[302px] ">{val}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const OurPricing = () => {
  return (
    <section className="  min-h-[921px] p-6 py-[72px]  md:px-[120px]">
      <TittleCustom
        title={"OUR PRICING"}
        subTitle={"Choose what type of services you need"}
        className={"text-left md:text-center"}
      />
      <div className="mt-4 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          price="0.75%"
          tittle="Fiat"
          list={[
            "Custodial - escrow amount held by Watiga Trust Ltd, Singapore based licensedtrust company",
            "Bank tansfer",
            "ESCROW SG as neutral third-party in case of dispute",
          ]}
          classNamePrice="h-[180px] md:text-4lx"
        />
        <Card
          price="1.75%"
          tittle="Crypto"
          list={[
            "Non-Custodial Smart Contract",
            "ERC-20 tokens supported",
            "WalletConnect Integrated (support Metamask, Ledger and others)",
            "24/7 Real-time movement of funds",
            "ESCROW SG as neutral third-party in case of dispute",
          ]}
          classNamePrice=" h-[56px] md:h-[180px] md:text-4lx"
        />

        <Card
          price="Contact Us"
          tittle="Bespoke"
          list={[
            "Bespoke service provided",
            "Tailored to suit your personal or organisational needs",
          ]}
          classNamePrice=" h-[56px] md:h-[180px] md:text-4lx"
        />
      </div>
    </section>
  );
};

export default OurPricing;
