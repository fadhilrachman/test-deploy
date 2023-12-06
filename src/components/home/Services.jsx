"use client";
import React, { useState } from "react";
import TittleCustom from "../shared/TittleCustom";
import { Collapse, Tabs, Steps } from "antd";
import { TiArrowSortedUp } from "react-icons/ti";

const IconSteps = ({ children }) => (
  <div className="w-7 h-7  bg-blue-950 rounded-[120px] flex justify-center items-center">
    <p className="text-white text-sm font-semibold  leading-tight">
      {children}
    </p>
  </div>
);

const LabelTabs = ({ children, isActive = false }) => {
  return (
    <div
      className={` h-7 md:h-11  px-3 md:px-4 py-1.5  md:py-3  ${
        isActive ? "bg-blue-950 text-white" : "text-neutral-400 bg-white "
      } rounded-[120px] justify-center items-start gap-2.5 inline-flex`}
    >
      <div className=" text-xs md:text-sm  ">{children}</div>
    </div>
  );
};

const Content = ({ tittle, description, stepsItem }) => {
  const customExpandIcon = ({ isActive }) => {
    return (
      <div className="">
        {isActive ? (
          <TiArrowSortedUp className="w-5 h-5 rotate-180 text-gray-400" />
        ) : (
          <TiArrowSortedUp className="w-5 h-5 rotate-90 text-gray-400" />
        )}
      </div>
    );
  };

  const itemCollapse = [
    {
      key: "1",
      label: (
        <p className="h-6 text-blue-950 text-base font-bold ">How it works?</p>
      ),
      children: (
        <div
          // style={{ scrollbarWidth: "thin", height: "396px", overflowY: "auto" }}
          className="max-w-[680px] rounded-2xl ml-7   border border-blue-950 p-6"
        >
          <Steps
            direction="vertical"
            size="small"
            current={1}
            items={stepsItem || []}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold font-secondary">{tittle}</h3>
      <div className="py-6 text-neutral-700 max-w-[720px] text-sm md:text-base font-medium">
        {description}
      </div>
      <Collapse
        bordered={false}
        ghost
        items={itemCollapse || []}
        style={{ marginLeft: -20 }}
        expandIcon={customExpandIcon}
      />
    </div>
  );
};

const Services = () => {
  const [key, setKey] = useState("1");
  const items = [
    {
      key: "1",

      label: <LabelTabs isActive={key == "1"}>SALE & PURCHASE</LabelTabs>,
      children: (
        <div className="flex flex-col md:flex-row justify-between">
          <Content
            tittle={"Sale and purchase of assets / shares"}
            description={
              <>
                <p>
                  In sale purchase escrow arrangement, an escrow agent acts as
                  an independent and neutral third party who holds the funds
                  from the buyer as a proof of commitment in the transaction.
                </p>
                <p className="mt-4">
                  The seller may transfer the assets/shares to the escrow agent
                  or they may transfer directly to the buyer. Once a certain
                  pre-agreed conditions are fulfilled, the escrow agent will
                  release the escrowed amount to the seller.
                </p>
              </>
            }
            stepsItem={[
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold ">
                    Buyer and Seller sign a sale and purchase agreement
                  </p>
                ),
                status: "process",
                icon: <IconSteps>1</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold ">
                    Buyer and Seller engage Escrow SG as their escrow agent. An
                    escrow agreement will be signed between the buyer, seller
                    and Escrow SG
                  </p>
                ),
                status: "process",
                icon: <IconSteps>2</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Buyer funds the escrow account with the escrowed amounts as
                    agreed within the escrow agreement and the seller transfers
                    the asset/share to Escrow SG
                  </p>
                ),
                status: "process",
                style: { marginTop: "24px" },
                icon: <IconSteps>3</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    The escrow arrangement is in place until:
                  </p>
                ),
                icon: <IconSteps>4</IconSteps>,
                description: (
                  <ul
                    style={{
                      listStyle: "outside",
                      listStylePosition: "outside",
                      color: "#0B1D50",
                    }}
                    className="list-outside pl-5 mt-1 text-blue-950 text-base font-semibold "
                  >
                    <li className="">
                      Both buyer and seller agree that the escrow conditions for
                      fulfilled and they agree to instruct Escrow SG to release
                      of escrowed amounts to the seller, or
                    </li>
                    <li>
                      Both buyer and seller agree that the escrow conditions are
                      not met and agree to revert the escrowed amounts to the
                      buyer, or Buyer and seller are in disagreement on whether
                      escrow conditions have been met or not.
                    </li>
                    <li>
                      Escrow SG or an independent third party will determine if
                      the escrow conditions are met or not; and release or
                      revert of escrowed amounts accordingly.
                    </li>
                  </ul>
                ),
                status: "process",
                style: { marginTop: "24px" },
              },
            ]}
          />

          <img
            src="/img/clientLogo/purchase&sales.png"
            className="w-[360px] mx-auto h-[268.83px] mt-12 "
            alt="client"
          />
        </div>
      ),
    },
    {
      key: "2",
      label: <LabelTabs isActive={key == "2"}>PAYMASTER ACCOUNT</LabelTabs>,
      children: (
        <div className="flex flex-col md:flex-row justify-between">
          <Content
            tittle={"PAYMASTER ACCOUNT"}
            description={
              <>
                <p>
                  In paymaster escrow arrangement, an escrow agent is acting in
                  accordance to the instruction from the instructing parties to
                  perform a series of funds distributions over a period of time.
                </p>
                <p className="mt-4">
                  Generally, the funds distribution are guided by legal
                  documents such as sales and purchase agreement where smaller
                  buying parties may pool funds at the escrow agent against one
                  large selling party or in the case of investment management
                  agreements, funds from smaller investors maybe pooled at the
                  escrow agent, to be channelled to a particular investment.
                  Subsequently, when the investment generates returns, the
                  escrow agent will facilitate funds distribution back to the
                  investors.​
                </p>
              </>
            }
            stepsItem={[
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold ">
                    Investment Manager / Sponsor originates the deal and signs
                    escrow agreement with Escrow SG
                  </p>
                ),
                status: "process",
                icon: <IconSteps>1</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold ">
                    Investors fund the Escrow account.
                  </p>
                ),
                status: "process",
                style: { marginTop: "24px" },
                icon: <IconSteps>2</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Escrow SG confirms funding.
                  </p>
                ),
                status: "process",
                icon: <IconSteps>3</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Investment Manager / Sponsor confirms instruction.
                  </p>
                ),
                icon: <IconSteps>4</IconSteps>,
                status: "process",
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Escrow agent releases funds to make investments (debt or
                    equity).
                  </p>
                ),
                icon: <IconSteps>5</IconSteps>,
                status: "process",
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Escrow agent receives investment returns
                  </p>
                ),
                icon: <IconSteps>6</IconSteps>,
                status: "process",
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Escrow agent transfers investment returns to investors and
                    management fees to Investment Manager / Sponsor
                  </p>
                ),
                icon: <IconSteps>7</IconSteps>,
                status: "process",
              },
            ]}
          />
          <img
            src="/img/clientLogo/paymentaccount.png"
            className="w-[360px] h-[260.41px] mt-12"
            alt="client"
          />
        </div>
      ),
    },
    {
      key: "3",
      label: <LabelTabs isActive={key == "3"}>DOCUMENT</LabelTabs>,
      children: (
        <div className="flex flex-col md:flex-row  md:justify-between">
          <Content
            tittle={"DOCUMENT ESCROW"}
            description={
              "In documents escrow arrangement, an escrow agent is acting as an independent and neutral party who collects and safe-keeps certain type documents for until a certain predetermined conditions and situations occur and upon confirmation from the instructing parties, the escrow agent will distribute the documents as per the escrow agreement."
            }
            stepsItem={[
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Party A and Party B agree on transaction documents
                  </p>
                ),
                status: "process",
                icon: <IconSteps>1</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Party A and Party B send original, undated signed
                    transaction documents to Escrow SG.
                  </p>
                ),
                status: "process",
                icon: <IconSteps>2</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    Party A and Party B agree on transaction documents
                  </p>
                ),
                status: "process",
                style: { marginTop: "24px" },
                icon: <IconSteps>3</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    The escrow arrangement is in place until:
                  </p>
                ),
                description: (
                  <ul
                    style={{
                      listStyle: "outside",
                      listStylePosition: "outside",
                      color: "#0B1D50",
                    }}
                    className="list-outside pl-5 mt-1 text-blue-950 text-base font-semibold "
                  >
                    <li>
                      Both Party A and Party B agree that the escrow conditions
                      for fulfilled and they agree to instruct Escrow SG to date
                      and release the signed transaction documents, or
                    </li>
                    <li>
                      Both Party A and Party B agree that the escrow conditions
                      are not met and agree to destroy the undated signed
                      transaction documents, or
                    </li>

                    <li>
                      Party A and Party B are in disagreement on whether escrow
                      conditions have been met or not. Escrow SG or an
                      independent third party will determine if the escrow
                      conditions are met or not; and action on the transaction
                      documents accordingly.
                    </li>
                  </ul>
                ),
                status: "process",
                icon: <IconSteps>4</IconSteps>,
              },
              {
                title: (
                  <p className="text-blue-950 text-base font-semibold  ">
                    If 4a occurs, Escrow SG will date and release the signed
                    transaction documents to Party A and Party B.
                  </p>
                ),
                status: "process",
                style: { marginTop: "24px" },
                icon: <IconSteps>5</IconSteps>,
              },
            ]}
          />
          <img
            src="/img/clientLogo/document.png"
            className="w-[360px] h-[135.30px] mt-12"
            alt="client"
          />
        </div>
      ),
    },
    {
      key: "4",
      label: <LabelTabs isActive={key == "4"}>SOURCE CODE</LabelTabs>,
      children: <Content tittle={"Source Code Escrow"} />,
    },
    {
      key: "5",
      label: <LabelTabs isActive={key == "5"}> BESPOKE AGREEMENT</LabelTabs>,
      children: <Content tittle={"Bespoke Escrow Agreement"} />,
    },
  ];

  return (
    <section className="py-12 px-6 md:px-[120px]" id="services">
      <TittleCustom title={"WHAT IS OUR SERVICES?"} className={"mb-10"} />
      {/* <Tabs. */}
      <Tabs
        onChange={(key) => {
          setKey(key);
        }}
        defaultActiveKey="1"
        animated={{ inkBar: true, tabPane: false, tabPaneMotion: true }}
        items={items}
        tabBarStyle={{ border: "none", textDecoration: "none" }}
      />
    </section>
  );
};

export default Services;
