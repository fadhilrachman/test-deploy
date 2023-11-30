"use client";

import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
// import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from "next/navigation";
import { ConfigProvider } from "antd";
import themeColor from "./themeColor";

const StyledComponentsRegistry = ({ children }) => {
  const cache = React.useMemo(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider
        theme={{
          components: {
            Switch: {
              // handleBg: themeColor.mainColor,
              /* here is your component tokens */
            },
          },
          token: {
            colorPrimary: themeColor.mainColor,
            controlOutline: "none",
            borderRadius: 6,
            /* here is your global tokens */
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};

export default StyledComponentsRegistry;
