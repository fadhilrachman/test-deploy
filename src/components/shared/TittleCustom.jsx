import React from "react";

const TittleCustom = ({ children, className, color = "main", fontSize }) => {
  const listColor = {
    gray: "text-[#878D96]",
    main: "text-main",
  };

  const listSize = {
    xl: "text-2xl",
  };
  return (
    <p className={`${listColor[color]} ${listSize[fontSize]} ${className}`}>
      {children}
    </p>
  );
};

export default TittleCustom;
