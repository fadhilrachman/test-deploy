"use client";

import React, { useState } from "react";
import FormGenerator from "../shared/FormGenerator";
import { fetcherPOST, fetcherPOSTLocal } from "../../lib/fethcer";
import { Button, Checkbox, Form } from "antd";
import ButtonCustom from "../shared/ButtonCustom";
import Link from "next/link";

export default function RegisterForm() {
  const [hookFormGenerator] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(value, "finished");
  };

  const dataForm = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Name",
      rules: [{ required: true, message: "This field is required!" }],
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email address",
      rules: [{ required: true, message: "This field is required!" }],
    },
    //PASSWORD
    // regex ref :
    // Minimum eight characters, at least one letter and one number: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    // Minimum eight characters, at least one letter, one number and one special character: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      rules: [
        { required: true, message: "This field is required!" },
        {
          pattern: new RegExp(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g
          ),
          message:
            " Minimum eight characters, at least one letter, one number and one special character",
        },
      ],
    },
    //CONFIRMATION PASSWORD
    {
      name: "confirm",
      label: "Confirm Password",
      type: "confirm_password",
      confirmationWith: "password", //  name input to validate value are same
      placeholder: "Confirm Password",
      rules: [{ required: true, message: "This field is required!" }],
    },
  ];

  const onChangeCheckbox = (e) => {
    setIsAgree(e.target.checked);
    console.log(`checked = ${e.target.checked}`);
  };
  const [IsAgree, setIsAgree] = useState(false);
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
      <Checkbox onChange={onChangeCheckbox} value={IsAgree}>
        <p className="text-neutral-700 text-sm font-semibold">
          I agree with{" "}
          <Link href="/" className="underline text-neutral-700">
            terms and conditions
          </Link>
        </p>
      </Checkbox>

      <ButtonCustom
        disabled={!IsAgree}
        form="dynamicForm"
        htmlType="submit"
        title="Sign Up"
        className="bg-main w-full mt-6 rounded-md"
        textClassName="text-white"
        height={40}
      />
    </>
  );
}
