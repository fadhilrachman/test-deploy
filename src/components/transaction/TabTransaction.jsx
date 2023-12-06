"use client";

import { Tabs } from "antd";
import React from "react";
import SellerSection from "./SellerSection";
import BuyerSection from "./BuyerSection";

export default function TabTransaction() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Buyer",
      children: <BuyerSection />,
    },
    {
      key: "2",
      label: "Seller",
      children: <SellerSection />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
}
