"use client";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="p-4 space-y-4 md:px-[120px] md:space-y-0 py-[100px] md:py-[180px] flex flex-col-reverse md:flex-row items md:space-x-[120px]">
      <ContactForm />
      <div className="w-full md:w-[400px]">
        <iframe
          src={`https://www.google.com/maps?q=${"00"},${"00"}&hl=es&output=embed`}
          // width="400"
          // height="300"
          style={{
            border: 0,
            height: "480px",
            width: "100%",
            borderRadius: "16px",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
