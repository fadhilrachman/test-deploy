"use client";
import React from "react";
import { useParams } from "next/navigation";
import AuthProfileLayout from "@/components/shared/AuthProfileLayout";
import CompletionProfileForm from "@/components/auth/CompletionProfileForm";

export default function CompletionProfilePage() {
  const { userId } = useParams();
  return (
    <AuthProfileLayout
      title="Completion Profile"
      subTitle="Fill up the form to verify your credential "
    >
      {/* {userId} */}
      <CompletionProfileForm />
    </AuthProfileLayout>
  );
}
