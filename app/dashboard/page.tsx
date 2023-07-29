"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <h3>essa</h3>
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
};

export default Dashboard;
