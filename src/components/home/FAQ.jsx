"use client";
import React from "react";
import { Collapse } from "antd";
import { PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import TittleCustom from "../shared/TittleCustom";
import { CiCirclePlus } from "react-icons/ci";

const Label = ({ children }) => {
  return (
    <p className="text-base  text-black font-bold   font-secondary  ml-1 mt-1 md:mb-5 md:mt-0 md:text-2xl">
      {children}
    </p>
  );
};

const Description = ({ children, className }) => (
  <div
    className={`${className} space-y-10 mb-5 ml-10 md:ml-14 md:-mt-5  text-base font-medium`}
  >
    {children}
  </div>
);

const FAQ = () => {
  const customExpandIcon = ({ isActive }) => {
    return (
      <div className="mt-3">
        {isActive ? (
          <CiCirclePlus className="text-[27px] md:text-4xl  rotate-45" />
        ) : (
          <CiCirclePlus className="text-[27px] md:text-4xl " />
        )}
      </div>
    );
  };

  const items = [
    {
      key: "1",
      label: <Label>What is Escrow ?</Label>,
      children: (
        <Description>
          <p className="">
            ﻿ An escrow is defined as a financial instrument whereby assets of
            value are held by an independent third party on behalf of
            participants in the process of completing a financial transaction.
            The third party, called the escrow agent will hold the assets until
            receiving appropriate instructions or until certain predetermined
            conditions are satisfied. Money, shares, securities, funds or other
            type of assets can be held in escrow.
          </p>
          <p className="">
            ﻿ Escrow is often used by transaction participants to add more
            comfort in their deals. They are assured that an independent
            contractual intermediary can help mitigate disputes that can
            potentially arise in a complex transaction, particularly with
            multiple settlement requirements and milestones.
          </p>
          <p className="">
            {" "}
            Having an escrow account is essential especially when large sums of
            money is involved in transactions. This extra step is important
            because it protects the funds and ensures that everyone is held
            responsible.
          </p>
          <p className="">
            {" "}
            ESCROW SG helps to reduce the risk of a transaction failing between
            parties.
          </p>
        </Description>
      ),
    },
    {
      key: "2",
      label: <Label>Cannot log in after creating an ESCROW SG account?</Label>,
      children: (
        <Description>
          <p>
            You may not be able to log in even after creating an ESCROW SG
            account as you have yet to pass KYC and AML checks.
          </p>
          <p className="">
            Do check your email for instructions on how to submit documents for
            KYC and AML checks. ESCROW SG will get back to you within 2 working
            days.
          </p>
          <p className="">
            After which you will be able to use ESCROW SG and create escrow
            transactions.
          </p>
        </Description>
      ),
    },
    {
      key: "3",
      label: <Label>What kind of escrow currency do you support?</Label>,
      children: (
        <Description>We support fiat, crypto and document excrow.</Description>
      ),
    },
    {
      key: "4",
      label: (
        <Label>
          How can I utilise this service as a professional services provider
          (e.g. trust company, escrow agents, law firm)?
        </Label>
      ),
      children: (
        <Description>
          You may sign up as professional intermediary on our platform. You are
          then able to create escrow transactions for your clients and make use
          of the service.
        </Description>
      ),
    },
    {
      key: "5",
      label: (
        <Label>The overall process sounds complicated, how does it work?</Label>
      ),
      children: (
        <Description>
          The application wors similiar to your usual bank transfer (with more
          customisation). Once the escrow is set-up, parties can jointly decide
          on any release or revert of funds.
        </Description>
      ),
    },
  ];
  return (
    <section className="p-4 md:py-12 md:px-[120px]">
      <TittleCustom
        title={"FREQUENTLY ASKED QUESTION"}
        subTitle={
          <>
            Have a question?{" "}
            <span className="underline font-secondary">Here’s our answer</span>
          </>
        }
        className={"mb-12"}
        // color="gray"
      />
      {/* <TittleCustom className={"my-12 font-bold"} fontSize={"xl"}>
         </span>
        </TittleCustom> */}
      <Collapse
        bordered={false}
        ghost
        items={items}
        style={{ marginLeft: -20 }}
        expandIcon={customExpandIcon}
      />
    </section>
  );
};

export default FAQ;
