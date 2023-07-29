"use client";
import { ReactNode, useEffect, useState } from "react";

import React from "react";

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  // wait till next js completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <>{children}</> : <div>Loading...</div>}</>;
};

export default Hydrate;
