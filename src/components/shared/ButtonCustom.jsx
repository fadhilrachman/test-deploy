import { Button } from "antd";
import React from "react";

export default function ButtonCustom({
  title,
  onClick,
  className,
  type,
  height,
  textClassName,
  disabled,
  ...props
}) {
  if (type === "outline") {
    return (
      <Button
        disabled={disabled}
        {...props}
        className={`bg-main border border-white`}
        onClick={onClick}
        style={{ height: height || 36 }}
      >
        <p className={`text-sm font-semibold text-white`}>{title}</p>
      </Button>
    );
  } else {
    return (
      <Button
        {...props}
        disabled={disabled}
        className={` ${className} ${disabled && "bg-disabled"} `}
        onClick={onClick}
        style={{ height: height || 36 }}
      >
        <p
          className={`text-sm font-semibold ${textClassName} ${
            disabled && "text-disabled"
          } `}
        >
          {title}
        </p>
      </Button>
    );
  }
}
