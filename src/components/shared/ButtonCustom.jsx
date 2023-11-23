import { Button } from "antd";
import React from "react";

export default function ButtonCustom({
  title,
  onClick,
  className,
  type,
  height,
}) {
  const outlineClass = type === "outline" && `bg-main border border-white`;
  const outlineText = type === "outline" ? `text-white` : "text-main";
  return (
    <Button
      className={` ${className} ${outlineClass}`}
      onClick={onClick}
      style={{ height: height || 36 }}
    >
      <p className={`text-sm font-semibold ${outlineText} `}>{title}</p>
    </Button>
  );
}
