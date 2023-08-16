"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({
  children,
  session: sessionClient,
}: {
  children: any;
  session: any;
}) => {
  return <SessionProvider session={sessionClient}>{children}</SessionProvider>;
};

export default AuthProvider;
