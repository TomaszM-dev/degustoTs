"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useCartStore } from "@/store";
import { AiFillShopping } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Cart from "./Cart";
import { AnimatePresence, motion } from "framer-motion";
import hamburger from "public/hamburger.png";
import close from "public/close.png";

const Nav = ({ user }) => {
  const cartStore = useCartStore();
  const pathname = usePathname();
  const session = useSession();
  const [activeBar, setActiveBar] = useState(false);

  return (
    <div className="flex items-center pt-8  z-[100] top-0 left-0  justify-between fixed w-[100%] px-20 max-lg:px-4 mx-auto border-b-2 border-purple bg-main ">
      <h1 className="gradientText text-[2rem] max-lg:text-[1.7rem] font-[400]  ">
        <Link href="/" className="">
          DegustoVR
        </Link>
      </h1>
      <div className="flex items-center gap-7 text-[1.2rem]">
        <div className=" flex gap-4 max-lg:hidden">
          <Link
            className={`text-[1.3rem] ${
              pathname === "/" ? "gradientText" : ""
            }`}
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
        </div>
        <div className="max-lg:flex hidden items-center ">
          <button onClick={() => setActiveBar(!activeBar)}>
            <Image
              src={hamburger}
              width={100}
              height={100}
              alt="hamburger"
              className=" w-10 h-10 mb-2 "
            ></Image>
          </button>
        </div>

        <div
          onClick={() => cartStore.toggleCart()}
          className="flex items-center text-3xl relative cursor-pointer "
        >
          <AnimatePresence>
            <AiFillShopping className="text-[2.3rem] mb-3 cursor-pointer" />
            {cartStore.cart.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="gradientBg text-white text-sm font-[500] w-5 h-5 rounded-full absolute top-[-0.1rem] right-[-0.3rem] items-center flex justify-center "
              >
                {cartStore.cart.length}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {!user && (
          <Link
            className="gradientBg px-6 py-2 rounded-lg  mb-4"
            href="/dashboard/login"
          >
            Sign Up
          </Link>
        )}
        {user && (
          <div className="dropdown dropdown-end cursor-pointer ">
            <Image
              alt="profile img"
              width={40}
              height={40}
              src={user?.image}
              className="rounded-full mb-3 "
              tabIndex={0}
            ></Image>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-5 shadow space-y-3 z-10 text-[1.1rem]  w-72 mt-2 mr-[-3rem]"
            >
              <li className=" ">
                <Link
                  href="/dashboard "
                  className="  py-4"
                  onClick={() => {
                    if (document.activeElement instanceof HTMLElement) {
                      document.activeElement.blur();
                    }
                  }}
                >
                  Orders
                </Link>
              </li>
              <li>
                <button
                  className="py-4"
                  onClick={() => {
                    signOut();
                    if (document.activeElement instanceof HTMLElement) {
                      document.activeElement.blur();
                    }
                  }}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <AnimatePresence>
        {activeBar && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed w-full    h-screen left-0 top-0  bg-opacity-[0.40]"
            onClick={() => setActiveBar(!activeBar)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className=" bg-main shadow absolute right-0 top-0 w-[20rem] h-screen  overflow-scroll flex flex-col items-center gap-5 bg-opacity-[0.98]  "
            >
              <div
                onClick={() => setActiveBar(!activeBar)}
                className=" right-0 self-end text-[1.6rem] cursor-pointer gradientText p-4 "
              >
                X
              </div>

              <div className="flex flex-col items-center gap-8 mt-20 ">
                <Link
                  onClick={() => setActiveBar(!activeBar)}
                  className={`text-[1.7rem] border-b-[1px] border-purple ${
                    pathname === "/" ? "gradientText" : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>

                <Link
                  onClick={() => setActiveBar(!activeBar)}
                  className={`text-[1.7rem] border-b-[1px] border-purple ${
                    pathname === "/products" ? "gradientText" : ""
                  }`}
                  href="/products"
                >
                  Products
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
    </div>
  );
};

export default Nav;
