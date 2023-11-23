"use client";

import React from "react";
import FormGenerator from "../shared/FormGenerator";
import { fetcherPOST, fetcherPOSTLocal } from "../../lib/fethcer";
import { Button, Form } from "antd";

export default function RegisterForm() {
  const [hookFormGenerator] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(value, "finished");
  };

  const dataForm = [
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
          pattern: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g),
          message:
            "Minimum eight characters, at least one letter and one number",
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
      />
      <Button
        form="dynamicForm"
        htmlType="submit"
        className="mt-3 bg-blue-500"
        type="primary"
      >
        Submit
      </Button>
    </>
  );
}
