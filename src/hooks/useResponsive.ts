"use client";
import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ maxWidth: 767 });
  const isDesktopSmall = useMediaQuery({ maxWidth: 1023 });
  const isDesktopMedium = useMediaQuery({ maxWidth: 1279 });
  return {
    isMobile,
    isTablet,
    isDesktopSmall,
    isDesktopMedium,
  };
};
