"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import spinner from "public/loadingSpinner.svg";
import Image from "next/image";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  console.log(session);

  return (
    <>
      {session.status === "authenticated" ? (
        <div>
          <button onClick={() => signOut()}>sign out</button>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default Dashboard;
