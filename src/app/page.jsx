import Jumbotron from "@/components/home/Jumbotron";
import OurClient from "@/components/home/OurClient";
import FAQ from "@/components/home/FAQ";
import WhatIs from "@/components/home/WhatIs";
import NavbarCustom from "@/components/shared/NavbarCustom";
import FooterCustom from "@/components/shared/FooterCustom";
export default function Home() {
  return (
    <main className="home">
      <NavbarCustom />
      <Jumbotron />
      <OurClient />
      <WhatIs />
      <FAQ />
      <FooterCustom />
    </main>
  );
}
