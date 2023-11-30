"use client";

import AuthProfileLayout from "@/components/shared/AuthProfileLayout";
import LoginForm from "../../../components/auth/LoginForm";
import Link from "next/link";

export default function AuthPage() {
  return (
    <AuthProfileLayout
      title="Sign In"
      // subTitle="Enter your email and your password to continue"
    >
      <LoginForm />
      <p className="text-base font-semibold text-center text-main mt-6">
        Need account?{" "}
        <Link href="/register" className="underline">
          Sign Up
        </Link>
      </p>
    </AuthProfileLayout>
  );
}
