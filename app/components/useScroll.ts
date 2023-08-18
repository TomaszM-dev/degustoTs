"use client";
import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.2 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [element, view]);

  return [element, controls];
};
