"use client";

import { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";

export default function AuthPage() {
  const [IsHaveAccount, setIsHaveAccount] = useState(false);
  return (
    <main className="flex min-h-screen items-center flex-wrap p-10 flex-col md:p-24 sm:flex-row">
      <div className="bg-orange-300 md:max-w-[50%] text-white rounded-xl">
        <h1 className="text-center text-[150px]">lorem ipsum</h1>
      </div>
      <div className="md:max-w-[50%] w-full flex justify-center">
        {IsHaveAccount ? (
          <div className="max-w-[400px] w-full">
            <h3 className="text-[30px] mb-5">Register</h3>
            <RegisterForm />
            <p className="mt-5">
              You already have account{" "}
              <span
                className="text-blue-400 cursor-pointer "
                onClick={() => setIsHaveAccount((v) => !v)}
              >
                Login
              </span>
            </p>
          </div>
        ) : (
          <div className="max-w-[400px] w-full">
            <h3 className="text-[30px] mb-5">Login</h3>
            <LoginForm />
            <p className="mt-5">
              You don't have account{" "}
              <span
                className="text-blue-400 cursor-pointer "
                onClick={() => setIsHaveAccount((v) => !v)}
              >
                Register
              </span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
