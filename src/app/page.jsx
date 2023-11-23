import Jumbotron from "@/components/home/Jumbotron";
import OurClient from "@/components/home/OurClient";
import FAQ from "@/components/home/FAQ";
export default function Home() {
  return (
    <main className="home">
      <Jumbotron />
      <OurClient />
      <FAQ />
    </main>
  );
}
