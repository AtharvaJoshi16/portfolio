"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { Toaster } from "@/components/ui/toaster";
import { links } from "@/constants/navlinks";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FloatingDock
        desktopClassName="z-50 fixed w-fit inset-x-0 h-16 bottom-[20px]"
        mobileClassName="z-50 w-fit fixed bottom-[30px] left-[30px]"
        items={links}
      />
      <Toaster />
      {children}
    </>
  );
};
