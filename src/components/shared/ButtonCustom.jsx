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
  icon,
  ...props
}) {
  if (type === "outline") {
    return (
      <Button
        disabled={disabled}
        {...props}
        className={`bg-main border border-white ${className} `}
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
        className={` ${className} ${disabled && "bg-disabled"}`}
        onClick={onClick}
        style={{ height: height || 36 }}
      >
        <div className="flex space-x-2 items-center justify-center">
          {icon && <div className="text-white text-[20px]">{icon}</div>}
          <p
            className={`text-sm font-semibold text- ${textClassName} ${
              disabled && "text-disabled"
            } `}
          >
            {title}
          </p>
        </div>
      </Button>
    );
  }
}
