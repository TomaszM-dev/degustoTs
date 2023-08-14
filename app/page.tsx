import Link from "next/link";
import { Fa500Px } from "react-icons/fa";
import Faq from "./components/HomeLayout/Faq";
import Features from "./components/HomeLayout/Features";
import Hero from "./components/HomeLayout/Hero";
import ProductOverview from "./components/HomeLayout/ProductOverview";
import Services from "./components/HomeLayout/Services";
import Team from "./components/HomeLayout/Team";
import Testimonials from "./components/HomeLayout/Testimonials";
import { useCartStore } from "@/store";
import Stripe from "stripe";

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const products = await stripe.products.list();
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      return {
        id: product.id,
        description: product.description,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        metadata: product.metadata,
      };
    })
  );
  return productWithPrices;
};
export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-[4rem] mt-10">
      <Hero />
      <Features />
      <ProductOverview products={products} />
      <Team />
      <Services />
      <Testimonials />
      <Faq />
    </div>
  );
}
