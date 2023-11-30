import Contact from "@/components/contact/Contact";
import FooterCustom from "@/components/shared/FooterCustom";
import NavbarCustom from "@/components/shared/NavbarCustom";
import React from "react";

export const metadata = {
  title: "Contact",
  description: "my About page",
};

export default function ContactPage() {
  return (
    <>
      <NavbarCustom />
      <Contact />
      <FooterCustom />
    </>
  );
}
