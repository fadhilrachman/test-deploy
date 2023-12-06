"use client";

import React from "react";
import { Button, Form, Switch } from "antd";
import { useRouter } from "next/navigation";

import FormGenerator from "../shared/FormGenerator";
import { fetcherPOST, fetcherPOSTLocal } from "../../lib/fethcer";
import ButtonCustom from "../shared/ButtonCustom";
import Link from "next/link";

export default function LoginForm() {
  const route = useRouter();
  const [hookFormGenerator] = Form.useForm();

  const handleSubmit = async (value) => {
    console.log(JSON.stringify(value), "finished");

    try {
      const response = await fetcherPOSTLocal(`/auth/login`, value);
      console.log(response, "finished");

      // localStorage.setItem("username", response.data.username);
      // localStorage.setItem("email", response.data.email);
      // localStorage.setItem("id", response.data._id);
      // route.push("/dashboard");
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const dataForm = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
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
        // formStyle={{ maxWidth: "100%" }}
        className="space-y-6"
      />
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Switch className="bg-black/20 " onChange={() => {}} />
          <p className="text-roboto text-neutral-700 text-sm">Remember Me</p>
        </div>
        <Link href="/" className="text-sm font-medium text-main">
          Forgot Password?
        </Link>
      </div>
      <ButtonCustom
        form="dynamicForm"
        htmlType="submit"
        title="Sign In"
        className="bg-main w-full mt-6 rounded-md"
        textClassName="text-white"
        height={40}
      />
    </>
  );
}
