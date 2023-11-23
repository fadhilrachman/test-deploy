"use client";
import React from "react";
import { Collapse } from "antd";
import { PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import TittleCustom from "../shared/TittleCustom";

const Label = ({ children }) => {
  return <p className="text-[22px] font-bold border-none">{children}</p>;
};
const FAQ = () => {
  const customExpandIcon = ({ isActive }) => {
    return (
      <div className="mt-3">
        {isActive ? (
          <CloseCircleOutlined rotate={90} style={{ fontSize: "19px" }} />
        ) : (
          <CloseCircleOutlined rotate={45} style={{ fontSize: "19px" }} />
        )}
      </div>
    );
  };

  const items = [
    {
      key: "1",
      label: <Label>What is Escrow ?</Label>,
      children: (
        <div className="ml-7">
          <p className="">
            ﻿ An escrow is defined as a financial instrument whereby assets of
            value are held by an independent third party on behalf of
            participants in the process of completing a financial transaction.
            The third party, called the escrow agent will hold the assets until
            receiving appropriate instructions or until certain predetermined
            conditions are satisfied. Money, shares, securities, funds or other
            type of assets can be held in escrow.
          </p>
          <p className="mt-7">
            ﻿ Escrow is often used by transaction participants to add more
            comfort in their deals. They are assured that an independent
            contractual intermediary can help mitigate disputes that can
            potentially arise in a complex transaction, particularly with
            multiple settlement requirements and milestones.
          </p>
          <p className="mt-7">
            {" "}
            Having an escrow account is essential especially when large sums of
            money is involved in transactions. This extra step is important
            because it protects the funds and ensures that everyone is held
            responsible.
          </p>
          <p className="mt-4">
            {" "}
            ESCROW SG helps to reduce the risk of a transaction failing between
            parties.
          </p>
        </div>
      ),
    },
    {
      key: "2",
      label: <Label>Cannot log in after creating an ESCROW SG account?</Label>,
      children: (
        <div className="ml-7">
          <p>
            You may not be able to log in even after creating an ESCROW SG
            account as you have yet to pass KYC and AML checks.
          </p>
          <p className="mt-4">
            Do check your email for instructions on how to submit documents for
            KYC and AML checks. ESCROW SG will get back to you within 2 working
            days.
          </p>
          <p className="mt-4">
            After which you will be able to use ESCROW SG and create escrow
            transactions.
          </p>
        </div>
      ),
    },
    {
      key: "3",
      label: <Label>What kind of escrow currency do you support?</Label>,
      children: (
        <p className="ml-7">We support fiat, crypto and document excrow.</p>
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
        <p className="ml-7">
          You may sign up as professional intermediary on our platform. You are
          then able to create escrow transactions for your clients and make use
          of the service.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <Label>The overall process sounds complicated, how does it work?</Label>
      ),
      children: (
        <p className="ml-7">
          The application wors similiar to your usual bank transfer (with more
          customisation). Once the escrow is set-up, parties can jointly decide
          on any release or revert of funds.
        </p>
      ),
    },
  ];
  return (
    <section className="pt-[54px]">
      <div className="px-[120px] ">
        <TittleCustom color="gray">FREQUENTLY ASKED QUESTION</TittleCustom>
        <TittleCustom
          className={"mt-[42px] mb-[20px] font-extrabold"}
          fontSize={"xl"}
        >
          Have a question? <span className="underline">Here’s our answer</span>
        </TittleCustom>
        <Collapse
          bordered={false}
          ghost
          items={items}
          className="border-none mt-5"
          expandIcon={customExpandIcon}
        />
      </div>
    </section>
  );
};

export default FAQ;
