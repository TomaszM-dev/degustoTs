"use client";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useCartStore } from "@/store";
import { AiFillShopping } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Cart from "./Cart";

const Nav = ({ user }) => {
  const cartStore = useCartStore();
  const pathname = usePathname();

  console.log(cartStore.cart);
  return (
    <div className="flex items-center pt-8  z-[100] top-0 left-0  justify-between fixed w-[100%] px-20 mx-auto border-b-2 border-purple bg-main">
      <h1 className="gradientText text-[2rem] font-[400]  ">
        <Link href="/" className="">
          DegustoVR
        </Link>
      </h1>
      <div className="flex items-center gap-7 text-[1.2rem]">
        <Link
          className={`text-[1.3rem] ${pathname === "/" ? "gradientText" : ""}`}
          href="/"
        >
          Home
        </Link>

        <Link
          className={`text-[1.3rem] ${
            pathname === "/products" ? "gradientText" : ""
          }`}
          href="/products"
        >
          Products
        </Link>
        <div
          onClick={() => cartStore.toggleCart()}
          className="flex items-center text-3xl relative cursor-pointer "
        >
          <AiFillShopping className="text-[2.3rem] mb-3 cursor-pointer" />
          <span className="gradientBg text-white text-sm font-[500] w-5 h-5 rounded-full absolute top-[-0.1rem] right-[-0.3rem] items-center flex justify-center ">
            {cartStore.cart.length}
          </span>
        </div>
        {!user && (
          <Link
            className="gradientBg px-6 py-2 rounded-lg  mb-4"
            href="/dashboard"
          >
            Sign Up
          </Link>
        )}
        {user && (
          <>
            <Image
              alt="profile img"
              width={40}
              height={40}
              src={user?.image}
              className="rounded-full mb-3 "
            ></Image>
            <button
              className="gradientBg px-6 py-2  mb-5  rounded-lg "
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        )}
      </div>

      {cartStore.isOpen && <Cart />}
    </div>
  );
};

export default Nav;
