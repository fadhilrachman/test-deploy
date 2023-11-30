import React from "react";
import FormGenerator from "../shared/FormGenerator";
import { Button, Form } from "antd";
import ButtonCustom from "../shared/ButtonCustom";

const ContactForm = () => {
  const [hookFormGenerator] = Form.useForm();

  const dataForm = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Input your name",
      rules: [],
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email address",
      rules: [],
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      placeholder: "Input your company",
      rules: [],
    },
    {
      name: "message",
      label: "Company",
      type: "textarea",
      placeholder: "Tell us what you need",
      rules: [],
    },
  ];
  return (
    <div className=" w-full">
      <div className="text-blue-950 space-y-2 mb-6">
        <h3 className=" text-4xl font-bold font-secondary">Contact Us</h3>
        <p>Interested in our products? Contact us to know furthermore</p>
      </div>
      <FormGenerator
        hookForm={hookFormGenerator}
        data={dataForm}
        id="dynamicForm"
        size="large" //small , default , large
        layout="vertical"
        // formStyle={{ border: "1px solid black" }}
      />
      <div className="flex justify-end">
        <div className="w-[84px] cursor-pointer h-10 px-6 py-2 bg-blue-950 rounded-md justify-center items-center gap-3 inline-flex">
          <div className="text-center text-white text-base font-semibold font-['Inter'] leading-normal">
            Sent
          </div>
        </div>
        {/* <ButtonCustom title="REGISTER" className={"bg-blue-950"} /> */}
      </div>
    </div>
  );
};

export default ContactForm;
