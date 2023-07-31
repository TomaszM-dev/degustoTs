"use client";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = ({ user }: Session) => {
  const session = useSession()
  return (
    <div className="flex flex-col gap-10 bg-slate-900">
      <ul className="flex gap-5 mb-10 p-10">
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
      <div></div>
    </div>
  );
};

export default Nav;
