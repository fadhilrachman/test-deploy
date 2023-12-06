import React from "react";
import ButtonCustom from "../shared/ButtonCustom";
import { IoIosAddCircle } from "react-icons/io";

export default function CustomTitleCms({ title, handleAdd }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-4xl font-bold text-main font-secondary">{title}</p>
      {handleAdd && (
        <ButtonCustom
          title="Transaction"
          textClassName="text-white"
          className="bg-main text-white"
          icon={<IoIosAddCircle />}
          height={40}
        />
      )}
    </div>
  );
}
