"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import spinner from "public/loadingSpinner.svg";
import Image from "next/image";
import LoadingSpinner from "../components/LoadingSpinner";
import formatPrice from "@/utils/priceFormat";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const router = useRouter();
  const session = useSession();
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const fetchOrders = async () => {
    const res = await fetch("/api/get-orders");

    const data = await res.json();

    return data;
  };
  useEffect(() => {
    fetchOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="w-full h-screen">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  console.log(session.status);
  return (
    <>
      {session.status === "authenticated" ? (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-20 relative h-[fit]"
        >
          <motion.div className="flex flex-col items-center mt-20  ">
            <h2 className="text-[3rem] mb-6 font-bold gradientText">
              Your orders{" "}
            </h2>
            {orders?.map((order) => (
              <div
                key={order.id}
                className="rounded-lg p-8 my-4 space-y-2 shadow flex flex-col  w-[53%]"
              >
                <div className=" items-center  gap-4 w-full">
                  {order.products.map((product) => (
                    <div className=" mt-3 " key={product.id}>
                      <div className="flex  gap-10 ">
                        <Image
                          src={product.image!}
                          width={200}
                          height={200}
                          alt={product.name}
                          priority={true}
                          className="w-[13rem] h-[13rem]"
                        />
                        <div className="flex flex-col justify-center gap-4 text-[1.3rem]">
                          <h2 className="py-2 text-[2rem] gradientText">
                            {product.name}
                          </h2>
                          <p>
                            Price:{" "}
                            <span className="gradientText">
                              {formatPrice(product.unit_amount)}
                            </span>
                          </p>
                          <p>
                            Quantity:
                            <span className="gradientText">
                              {" "}
                              {product.quantity}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-[1.4rem]">Details :</h3>
                <div className="w-[15%] h-1 gradientBg rounded-md  "></div>
                <div className="flex flex-col gap-3 text-secondarytext pt-4">
                  <h2 className="text-[1.2rem]  ">
                    Order reference: {order.id}
                  </h2>
                  <p className="text-[1.2rem]">
                    Status:
                    <span
                      className={`${
                        order.status === "completed" ? "gradientBg" : "bg-main"
                      } text-white py-1 rounded-md px-2 mx-2 text-[1.1rem] ml-4`}
                    >
                      {order.status}
                    </span>
                  </p>

                  <p className="text-mt">
                    Time: {new Date(order.createdDate).toString()}
                  </p>
                  <p className="font-medium py-2">
                    Total: {formatPrice(order.amount)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}
