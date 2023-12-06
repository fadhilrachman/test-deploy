"use client";

import { Input, Tag } from "antd";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import Link from "next/link";
import moment from "moment";
import ButtonCustom from "../shared/ButtonCustom";

export default function SellerList() {
  const filterTransaction = [
    "all",
    "pending",
    "completed",
    "in process",
    "rejected",
  ];
  const [ActiveFilter, setActiveFilter] = useState("all");

  const activeClass = "bg-indigo-100 border-blue-950 ";

  const data = [
    "pending",
    "completed",
    "pending",
    "completed",
    "in process",
    "rejected",
  ];

  const statusColorClass = {
    ["pending"]: "bg-orange-50 text-orange-300 border-orange-200",
    ["completed"]: "bg-green-50 border-green-200 text-green-500",
    ["approved"]: "text-sky-700 bg-cyan-100 border-0",
    ["in process"]: "text-sky-700 bg-cyan-100 border-0",
    ["rejected"]: "bg-red-50  text-red-600 border-rose-300",
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-6 gap-x-4">
        <div className="col-span-3">
          <Input
            className="w-full h-12 text-neutral-400 text-sm font-normal"
            placeholder="Search by Transaction Name or Transaction No"
            onEnter={() => alert("enter")}
            prefix={<IoMdSearch size={20} />}
          />
        </div>
      </div>
      {/* filters  */}
      <div className="flex items-center space-x-4">
        {filterTransaction.map((res, i) => (
          <div
            className={`h-11 px-4  cursor-pointer rounded-md border flex items-center justify-center capitalize ${
              ActiveFilter === res
                ? activeClass
                : "border-zinc-200 bg-white text-neutral-400"
            }`}
            key={i}
            onClick={() => setActiveFilter(res)}
          >
            {res}
          </div>
        ))}
      </div>
      {/* //cards  */}
      {data.map((res, i) => (
        <div className="rounded-lg border border-zinc-200 " key={i}>
          <div className="w-full border-b flex justify-between items-center p-4">
            <div className="flex space-x-4 items-center">
              <div className="w-14 h-14 p-2 bg-slate-100 rounded-md flex justify-center items-center">
                <FaDollarSign size={40} />
              </div>
              <div className=" space-y-2">
                <p className="text-blue-950 text-base font-semibold">
                  Funding General Company in Couple of Time{" "}
                </p>
                <p className="underline text-blue-600">No : T128SF</p>
              </div>
            </div>
            {/* //status  */}
            <div className="space-y-3 text-right">
              <Tag className={`m-0 ${statusColorClass[res]}`}>{res}</Tag>
              <p className="text-neutral-400 text-sm font-medium">
                {moment().format("MMMM DD, YYYY")}
              </p>
            </div>
          </div>

          <div className=" flex justify-between items-center p-4">
            <p className="text-blue-950 text-xl font-bold flex items-center ">
              $2000000{" "}
              <span className="text-neutral-700 text-base font-medium ml-2">
                (Lump Sum)
              </span>
            </p>
            <ButtonCustom
              className="bg-white border text-main border-blue-950"
              textClassName="text-main"
              title="See Details"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
