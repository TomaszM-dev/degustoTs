"use client";

import { setRevalidateHeaders } from "next/dist/server/send-payload";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { registerType } from "@/utils/authTypes";
import { ChangeEvent, useState } from "react";
import spinner from "public/loadingSpinner.svg";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const name = e.target[1].value;
    const password = e.target[2].value;

    try {
      setIsLoading(true);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(res.status);
      setIsLoading(false);
      res.status === 200 && router.push("/dashboard/login");
      res.status === 500 && setErr(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!isLoading ? (
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
              type="text"
              className="p-5 bg-white w-full"
              placeholder="username"
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
            <Link href="/dashboard/login">
              <button className="px-6 py-4  font-[700] bg-main uppercase text-white">
                Go Back
              </button>
            </Link>
          </form>
        </div>
      ) : (
        <div className="relative w-full h-screen flex items-center justify-center">
          <Image src={spinner} alt="spinner" width={100} height={100}></Image>
        </div>
      )}
      {err && <div></div>}
    </>
  );
}
