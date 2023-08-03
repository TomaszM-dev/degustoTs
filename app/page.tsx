import Link from "next/link";
import Hero from "./components/HomeLayout/Hero";
import Services from "./components/HomeLayout/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-[7rem] mt-10">
      <Hero />
      <Services />
    </div>
  );
}
