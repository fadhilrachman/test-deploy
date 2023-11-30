"use client";

import React, { useState } from "react";
import { Form } from "antd";
import Link from "next/link";
import { RiUserAddFill } from "react-icons/ri";

import FormGenerator from "../shared/FormGenerator";
import { fetcherPOST, fetcherPOSTLocal } from "../../lib/fethcer";
import ButtonCustom from "../shared/ButtonCustom";
import themeColor from "@/lib/themeColor";

export default function CompletionProfileForm() {
  const [hookFormGenerator] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(value, "finished");
  };

  const dataForm = [
    {
      name: "avatar",
      // label: "Avatar",
      type: "single_image",
      icon: <RiUserAddFill size={100} className="text-zinc-300" />,
      uploadType: "file", //default= 'file', options= "base64", "file", type string
      rules: [{ required: true, message: "This field is required!" }],
    },
    {
      name: "gender",
      label: "Gender",
      placeholder: "Choose your gender",
      type: "select",
      options: [
        { value: "m", label: "Male" },
        { value: "f", label: "Female" },
      ],
      rules: [{ required: true, message: "This field is required!" }],
    },
    {
      name: "birthday",
      label: "Date of Birth",
      type: "date",
      previewFormat: "DD MMM YYYY", //for preview
      payloadFormat: "DD-MM-YYYY", // for payload
      rules: [{ required: true, message: "This field is required!" }],
      //minDate and maxDate are optional
      // minDate: moment(new Date("2023-08-04")).format("YYYY-MM-DD"), //format YYYY-MM-DD , type string
      // maxDate: moment(new Date(), "YYYY-MM-DD").add(1, "day"), //today //format YYYY-MM-DD , type string
    },
    {
      name: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Input your address",
      rules: [{ required: true, message: "This field is required!" }],
    },
  ];

  return (
    <>
      <FormGenerator
        hookForm={hookFormGenerator}
        onFinish={handleSubmit}
        data={dataForm}
        id="dynamicForm"
        size="large" //small , default , large
        layout="vertical" //vertical, horizontal
        className="space-y-6"
        // formStyle={{ maxWidth: "100%" }}
      />

      <ButtonCustom
        form="dynamicForm"
        htmlType="submit"
        title="Continue"
        className="bg-main w-full  rounded-md"
        textClassName="text-white"
        height={40}
      />
    </>
  );
}
