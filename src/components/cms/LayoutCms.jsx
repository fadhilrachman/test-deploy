"use client";

import React, { useEffect, useState } from "react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Dropdown, Avatar, Badge } from "antd";
import SideBarCustom from "./SideBarCustom";
import { FaChevronDown } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

const { Header, Content, Footer, Sider } = Layout;

const LayoutCms = ({ children }) => {
  //   const {
  //     token: { colorBgContainer },
  //   } = theme.useToken();

  //   const handleLogout = () => {
  //     localStorage.clear();
  //     window.location.reload();
  //   };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const itemsMenu = [
    // {
    //   key: "1",
    //   label: <Link to="/dashboard">Dashboard</Link>,
    // },
    {
      key: "2",
      label: (
        <div
          //   onClick={handleLogout}
          className="flex items-center text-red-400"
          style={{ width: 130 }}
        >
          <LogoutOutlined className="me-1" />
          Log Out
        </div>
      ),
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <SideBarCustom />

      <Layout>
        <Header
          className="flex items-center justify-between px-4 "
          style={{
            background: "white",
            height: 60,
            borderBottom: "1px #DDE1E6 solid",
            padding: "0 40px",
          }}
        >
          <h5 className="mb-0 text-white">{""}</h5>
          <div className="flex items-center space-x-6">
            {/* // bell  */}
            <Badge size="small" count={5} className="cursor-pointer">
              <FaBell size={24} />
            </Badge>
            <Dropdown
              menu={{
                items: itemsMenu,
              }}
              className="z-100"
            >
              <div className="space-x-2 flex items-center cursor-pointer">
                <div className="profilepic flex justify-center items-center">
                  {false ? (
                    <img
                      src={"imageLink"}
                      alt="store-image"
                      className="img-fluid"
                    />
                  ) : (
                    <Avatar
                      size={30}
                      icon={<UserOutlined />}
                      // shape="square"
                      className="bg-[#3B5FE2] flex items-center justify-center pointer"
                    />
                  )}
                </div>
                <p className="mb-0 name text-neutral-700 text-base font-medium pointer">
                  {/* {localStorage.getItem("namePesantren")} */}Admin 123
                </p>
                <FaChevronDown />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content className="overflow-auto bg-white">
          <div className="p-6 ">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutCms;
