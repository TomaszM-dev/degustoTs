import React from "react";
import spinner from "public/loadingSpinner.svg";
import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center ">
      <Image src={spinner} alt="spinner" width={100} height={100}></Image>
    </div>
  );
};

export default LoadingSpinner;
