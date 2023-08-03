import Link from "next/link";
import Hero from "./components/HomeLayout/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <Hero />
    </div>
  );
}
