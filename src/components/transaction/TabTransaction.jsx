"use client";

import { Tabs } from "antd";
import React from "react";
import SellerSection from "./SellerSection";

export default function TabTransaction() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Buyer",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Seller",
      children: <SellerSection />,
    },
  ];
  return <Tabs defaultActiveKey="2" items={items} onChange={onChange} />;
}
