import React from "react";

const TittleCustom = ({
  className,
  title,
  subTitle,
  tittleClassName,
  subTittleClassName,
}) => {
  return (
    <div className={`${className} space-y-6 md:space-y-12`}>
      {title && (
        <p
          className={`${tittleClassName} text-neutral-400 font-bold text-xs md:text-base leading-normal`}
        >
          {title}
        </p>
      )}

      {subTitle && (
        <div
          className={`${subTittleClassName} text-main font-secondary  text-2xl md:text-4xl font-bold `}
        >
          {subTitle}
        </div>
      )}
    </div>
  );
};

export default TittleCustom;
