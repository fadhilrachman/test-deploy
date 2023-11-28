import RegisterForm from "@/components/auth/RegisterForm";
import AuthProfileLayout from "@/components/shared/AuthProfileLayout";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <AuthProfileLayout title="Create Account" subtitle="">
      <RegisterForm />
      <p className="text-base font-semibold text-center text-main mt-6">
        Already have account?{" "}
        <Link href="/login" className="underline">
          Sign In
        </Link>
      </p>
    </AuthProfileLayout>
  );
}
