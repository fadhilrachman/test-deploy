"use client";
import React, { useState } from "react";
import { Button, Grid, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { HomeFilled, CreditCardOutlined } from "@ant-design/icons";
import { LuBuilding } from "react-icons/lu";

const { useBreakpoint } = Grid;

import { useRouter } from "next/navigation";
import { useSharedStores } from "@/stores/shared.stores";
import { usePathname } from "next/navigation";

// const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4"];

function getItem(label, key, icon, children, disabled) {
  return { label, key, icon, children, disabled };
}

const items = [
  getItem("Home", "/home", <HomeFilled />),
  getItem("Transaction", "/transaction", <CreditCardOutlined />),
  getItem("Company", "/company", <LuBuilding />),
];

export default function SideBarCustom() {
  const router = useRouter();
  const pathname = usePathname();

  const { isCollapsedSideBar, handleCollapsed } = useSharedStores(
    (state) => state
  );

  // const setOpenKeys = (val) => {
  //   console.log(val);
  // };

  // const onOpenChange = (keys) => {
  //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };

  const onClick = (e) => router.push(e.key);

  const pathActive = `/${pathname.split("/").filter((f) => f !== "")[0]}`;
  console.log(pathActive);

  const { xs } = useBreakpoint();

  return (
    <div>
      <Sider
        className="sider-container"
        style={{
          minHeight: "100vh",
          overflow: "auto",
          border: "1px #DDE1E6 solid",

          // paddingTop: 60,
          // paddingBottom: 60,
        }}
        width={200}
        theme="light"
        // collapsible={true}
        onCollapse={(value) => handleCollapsed(value)}
        breakpoint="xl"
        collapsed={isCollapsedSideBar}
        // collapsedWidth={xs && collapsed ? "0" : "80"}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        {!isCollapsedSideBar && !xs && (
          <div className="text-white flex items-center justify-center  ">
            <img src={"/img/logoBlue.svg"} alt="" className="my-5" />
          </div>
        )}
        <Menu
          // openKeys={openKeys}
          // onOpenChange={onOpenChange}
          // className=" text-white"
          style={{
            paddingBottom: 80,
            height: "100%",
            borderInlineEnd: "unset",
          }}
          // theme="dark"
          // defaultSelectedKeys={["1"]}
          selectedKeys={[pathActive]}
          selectable
          mode="inline"
          items={items}
          onClick={onClick}
        />
      </Sider>
    </div>
  );
}
