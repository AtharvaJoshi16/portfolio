"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { Toaster } from "@/components/ui/toaster";
import { links } from "@/constants/navlinks";
import { useResponsive } from "@/hooks/useResponsive";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useResponsive();
  return (
    <div className={`${isMobile ? "m-[10px]" : "m-[40px]"}`}>
      <FloatingDock
        desktopClassName="z-50 fixed w-fit inset-x-0 h-16 bottom-[20px]"
        mobileClassName="z-50 w-fit fixed bottom-[15px] left-[15px]"
        items={links}
      />
      <Toaster />
      {children}
    </div>
  );
};
