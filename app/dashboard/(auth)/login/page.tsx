"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { Router } from "next/router";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { SignInResponse } from "next-auth/react";

const Login = () => {
  type response = {
    ok: string;
  };
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    // setIsLoading(false);
    setTimeout(() => {
      router?.push("/dashboard");
    }, 1000);
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
    // const { ok }: { ok: string } = await signIn("credentials", {
    //   email,
    //   password,
    //   redirect: false,
    // });

    // if (ok) return (window.location.href = "/dashboard");
  };

  console.log(session);
  return (
    <>
      {session.status === "unauthenticated" && (
        <div className="flex flex-col items-center border-[4px] border-white max-w-fit p-4 mx-auto rounded-lg mt-60">
          <form
            className="flex flex-col  py-10 px-4 gap-8 w-96 text-black"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="p-5 bg-white w-full"
              placeholder="email"
              required
            />
            <input
              type="password"
              className="p-5 bg-white w-full"
              placeholder="password"
              required
            />
            <button className="px-6 py-4  font-[700] bg-main uppercase text-white">
              Login
            </button>
          </form>
          <div className="flex gap-10">
            <button
              onClick={() => {
                signIn("google");
                setIsLoading(true);
              }}
              className="border-b-2 pb-2"
            >
              Login With Google
            </button>
            <Link href="/dashboard/register " className="border-b-2 pb-2">
              Register
            </Link>
          </div>
        </div>
      )}
      {session.status === "authenticated" && <LoadingSpinner />}
    </>
  );
};

export default Login;