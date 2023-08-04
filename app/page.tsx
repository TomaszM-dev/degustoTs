import Link from "next/link";
import { Fa500Px } from "react-icons/fa";
import Faq from "./components/HomeLayout/Faq";
import Features from "./components/HomeLayout/Features";
import Hero from "./components/HomeLayout/Hero";
import ProductOverview from "./components/HomeLayout/ProductOverview";
import Services from "./components/HomeLayout/Services";
import Team from "./components/HomeLayout/Team";
import Testimonials from "./components/HomeLayout/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-[4rem] mt-10">
      <Hero />
      <Features />
      <ProductOverview />
      <Team />
      <Services />
      <Testimonials />
      <Faq />
    </div>
  );
}
