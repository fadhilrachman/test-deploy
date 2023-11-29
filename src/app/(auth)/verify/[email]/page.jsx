"use client";

import React, { useState } from "react";
import OtpInput from "react-otp-input";

import AuthProfileLayout from "@/components/shared/AuthProfileLayout";
import { useParams, usePathname } from "next/navigation";
import ButtonCustom from "@/components/shared/ButtonCustom";

export default function VerifyEmailPage() {
  const { email } = useParams();
  const useEmail = decodeURIComponent(email);

  const [VerifyCode, setVerifyCode] = useState("");

  return (
    <AuthProfileLayout
      title="Verify Your Email"
      subTitle={
        <>
          We have sent you email to{" "}
          <span className="text-black">{useEmail}</span>{" "}
        </>
      }
    >
      <div className="input-otp space-y-6">
        <OtpInput
          value={VerifyCode}
          onChange={setVerifyCode}
          numInputs={4}
          containerStyle={{ display: "flex", justifyContent: "space-between" }}
          // renderSeparator={<span className="p-3"></span>}
          shouldAutoFocus
          inputType="number"
          inputStyle={{
            width: 68,
            height: 68,
            borderRadius: 8,
            border: "1px #DDE1E6 solid",
            fontSize: 36,
            // fontFamily: "var(--font-montserrat)",
          }}
          renderInput={(props) => <input {...props} />}
        />

        <p className="text-neutral-700 text-sm font-light">
          Didn’t get verification code?{" "}
          <span className="font-normal cursor-pointer underline">Resend</span>
        </p>
        <div className="flex justify-between space-x-4">
          <ButtonCustom
            height={40}
            className="w-full border-main"
            title="Cancel"
          />
          <ButtonCustom
            height={40}
            className="w-full bg-main "
            textClassName="text-white"
            title="Verify"
          />
        </div>
      </div>
    </AuthProfileLayout>
  );
}
