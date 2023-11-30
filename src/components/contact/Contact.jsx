"use client";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="px-[120px] py-[180px] flex items-center space-x-[120px]">
      <ContactForm />
      <iframe
        src={`https://www.google.com/maps?q=${"00"},${"00"}&hl=es&output=embed`}
        // width="400"
        // height="300"
        style={{
          border: 0,
          height: "480px",
          width: "800px",
          borderRadius: "16px",
        }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
