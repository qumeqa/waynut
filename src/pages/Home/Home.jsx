import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Pains } from "../../components/Pains/Pains";
import { Services } from "../../components/Services/Services";
import { Process } from "../../components/Process/Process";
import { Cases } from "../../components/Cases/Cases";
import { Reviews } from "../../components/Reviews/Reviews";
import { WhyUs } from "../../components/WhyUs/WhyUs";
import { FAQ } from "../../components/FAQ/FAQ";
import { FooterCTA } from "../../components/FooterCTA/FooterCTA";
import "./Home.scss";

export function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <Hero />
        <Pains />
        <Services />
        <Process />
        <Cases />
        <Reviews />
        <WhyUs />
        <FAQ />
        <FooterCTA />
      </main>
    </>
  );
}