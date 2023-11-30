import Jumbotron from "@/components/home/Jumbotron";
import OurClient from "@/components/home/OurClient";
import FAQ from "@/components/home/FAQ";
import WhatIs from "@/components/home/WhatIs";
import Services from "@/components/home/Services";
import Product from "@/components/home/Product";
import HowTo from "@/components/home/HowTo";
import OurPricing from "@/components/home/OurPricing";
import NavbarCustom from "@/components/shared/NavbarCustom";
import FooterCustom from "@/components/shared/FooterCustom";

export default function Home() {
  return (
    <main className="home">
      <NavbarCustom />
      <Jumbotron />
      <OurClient />
      <WhatIs />
      <Services />
      <Product />
      <OurPricing />
      <HowTo />
      <FAQ />
      <FooterCustom />
    </main>
  );
}
