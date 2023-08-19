"use client";
import { ReactNode, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

import React from "react";

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <>{children}</> : <LoadingSpinner />}</>;
};

export default Hydrate;
