"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { Router } from "next/router";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { SignInResponse } from "next-auth/react";
import { motion } from "framer-motion";
import LoginAnimation from "@/app/components/LoginAnimation";

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
        <div className="container h-screen px-6   ">
          <div className=" flex h-full flex-wrap items-center justify-center lg:justify-between ">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <LoginAnimation />
            </div>

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className=" w-full bg-main py-4 focus:outline-none shadow-sm shadow-purple  px-5"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="  w-full bg-main py-4 focus:outline-none shadow-sm shadow-purple  px-5"
                    placeholder="Password"
                    required
                  />
                </div>

                <button
                  className="btn gradientBg text-white w-full"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Sign in
                </button>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
              </form>
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={() => {
                    signIn("google");
                    setIsLoading(true);
                  }}
                  className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "
                  role="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Continue with Google
                </button>
                <Link
                  href="/dashboard/register "
                  className="w-full   px-3 py-3 text-center  uppercase btn text-white"
                >
                  Dont have account? Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {session.status === "authenticated" && <LoadingSpinner />}
      {err && (
        <motion.div
          onClick={() => setErr(false)}
          className="absolute w-full h-full  left-0 z-10  flex items-center  justify-center backdrop-blur-[0.2rem] "
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="mb-40 flex-col w-[30rem] h-[10rem] z-10 bg-black bg-opacity-100 flex shadow pt-4"
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
