"use client";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { AiFillShopping } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Nav = ({ user }: Session) => {
  const pathname = usePathname();
  const session = useSession();
  console.log(pathname);

  return (
    <div className="flex items-center mt-10 justify-between ">
      <h1 className="gradientText text-[2rem] font-[400] ">
        <Link href="/">DegustoVR</Link>
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

        <AiFillShopping className="text-[2.3rem] mb-3" />
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

      {/* <ul className="flex gap-5 mb-10 p-10">
        <Link href="/dashboard">Dashboard</Link>
        {!user && (
          <li className="">
            <Link href="/dashboard/login">Sign In</Link>
          </li>
        )}
        {user && (
          <div className="flex items-center gap-10">
            <li className="">
              <button onClick={() => signOut()}>Sign Out</button>
            </li>
          </div>
        )}
      </ul>
      <li className=" p-10">
        SERVER SESSION USER: {user?.name}  => {user?.id}
      </li>
      <li className=" p-10">
        CLIENT USER: {session.data?.user?.name}  => {session.data?.user?.id}
      </li>
      <div></div> */}
    </div>
  );
};

export default Nav;
