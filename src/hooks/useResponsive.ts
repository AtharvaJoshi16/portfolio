"use client";
import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return {
    isMobile,
  };
};
