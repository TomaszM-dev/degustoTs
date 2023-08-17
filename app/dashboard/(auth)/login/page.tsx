"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { Router } from "next/router";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { SignInResponse } from "next-auth/react";
import { motion } from "framer-motion";

const Login = () => {
  type response = {
    ok: string;
  };
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  const session = useSession();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    // signIn("credentials", { email, password , redirect: false});

    signIn("credentials", { email, password, redirect: false }).then(
      ({ error }: any) => {
        console.log(error);

        if (error === null) {
          window.location.replace("/");
        } else {
          setErr(true);
        }
      }
    );
  };

  if (session.status === "authenticated") {
    router.push("/");
  }

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
      {err && (
        <motion.div
          onClick={() => setErr(false)}
          className="absolute w-full h-full  left-0 z-10  flex items-center justify-center backdrop-blur-[0.2rem] "
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="flex-col w-[30rem] h-[10rem] z-10 bg-black bg-opacity-100 flex shadow pt-4"
          >
            <span
              onClick={() => setErr(false)}
              className="text-[1.2rem] font-bold self-end px-5 mb-3 "
            >
              X
            </span>
            <h2 className="text-[1.2rem] px-5 font-bold uppercase ">
              Something went wrong try diffrent credentials
            </h2>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Login;
