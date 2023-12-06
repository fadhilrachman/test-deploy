"use client";
import React, { useState } from "react";
import TittleCustom from "../shared/TittleCustom";

import { Steps } from "antd";

const Tittle = ({ children, isActive = false }) => {
  return (
    <h3
      className={`${
        isActive ? "text-blue-950" : "text-zinc-200 "
      } font-secondary font-bold text-base md:text-2xl`}
    >
      {children}
    </h3>
  );
};

const IconSteps = ({ children, isActive = false }) => {
  return (
    <div
      className={`w-6 h-6 md:w-9 md:h-9  ${
        isActive ? "bg-blue-950" : "bg-zinc-200"
      } text-white  rounded-[120px] flex justify-center items-center`}
    >
      <p className="text-sm font-semibold  leading-tight">{children}</p>
    </div>
  );
};

const Description = ({ children, isActive = false }) => {
  return (
    <div
      className={` ${
        isActive ? "text-neutral-700" : "text-zinc-200 "
      }  text-sm md:text-base font-medium mt-4 transition-all duration-100 `}
    >
      {children}
    </div>
  );
};

const HowTo = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    setCurrent(value);
  };

  return (
    <section className=" bg-blue-50 p-4  md:px-[120px] md:py-12">
      <TittleCustom
        title={"HOW TO USE ESCROW"}
        subTitle={"Here’s a tutorial using ESCROW"}
      />
      <div className="mt-12   flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between space-x-12">
        <div className=" bg-white rounded-2xl p-6 max-h-[396px] overflow-y-scroll scroll-hidden    border border-blue-950">
          <Steps
            current={current}
            onChange={onChange}
            size="default"
            direction="vertical"
            className="font-secondary"
            items={[
              {
                // style: { paddingBottom: "48px" },
                icon: <IconSteps isActive>1</IconSteps>,
                title: <Tittle isActive>Signing up on ESCROW SG</Tittle>,
                description: (
                  <Description isActive>
                    We made signing up simple. Simply create an account and
                    undergo a quick KYC and AML check and you are good to go.
                  </Description>
                ),
                className: "pb-4 md:pb-12",
                status: "wait",
              },
              {
                className: "pb-4 md:pb-12",
                icon: <IconSteps isActive={current >= 1}>2</IconSteps>,
                title: (
                  <Tittle isActive={current >= 1}>
                    Creating a New Transaction
                  </Tittle>
                ),
                status: "wait",

                description: (
                  <Description isActive={current >= 1}>
                    Once KYC and AML checks are completed, you can start your
                    first transaction. Simply add your business/individual
                    counterparty and select Fiat/Crypto currency. An email will
                    be sent to notify your counterparty.
                  </Description>
                ),
              },
              {
                className: "pb-4 md:pb-12",

                icon: <IconSteps isActive={current >= 2}>3</IconSteps>,
                title: (
                  <Tittle isActive={current >= 2}>
                    Agree and Act upon Standard Escrow Terms and Agreement
                  </Tittle>
                ),
                status: "wait",

                description: (
                  <Description isActive={current >= 2}>
                    By using our web application, you agree to both the Terms
                    and Standard Escrow Agreement.
                  </Description>
                ),
              },
              {
                className: "pb-4 md:pb-12",

                icon: <IconSteps isActive={current >= 3}>4</IconSteps>,
                title: (
                  <Tittle isActive={current >= 3}>
                    Manage Your Escrow Transactions
                  </Tittle>
                ),
                status: "wait",

                description: (
                  <Description isActive={current >= 3}>
                    After creating and agreeing on your escrow transaction,
                    simply click on 'Manage Escrow' in your homepage to view
                    your detailed transactions!
                    <br />
                    <br />
                    You are able to click on
                    <br />
                    i) Transfer - to fund your escrow account
                    <br />
                    ii) Release/Revert - to release funds to your counterparty
                    after transactional terms are completed.
                    <br />
                    iii) Withdraw - You are able to withdraw your funds after
                    you and your counter party click on 'Release'
                    <br />
                    <br />
                    Should a 'Release' and 'Revert' be clicked, the Escrow
                    transaction will go into a dispute. ESCROW SG will then step
                    in as the neutral third-party to resolve the dispute.
                  </Description>
                ),
              },
            ]}
          />
        </div>
        {/* <div className=" bg-white max-h-[100px]  rounded-2xl p-6    border border-blue-950"> */}
        <img src="/img/clientLogo/Design.png" alt="client" />
        {/* </div> */}
      </div>
    </section>
  );
};

export default HowTo;
