import signature from "@/assets/signature.png";
import { Copyright } from "lucide-react";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-slate-50 mx-auto md:mx-0 lg:mx-0 xl:mx-0 font-semibold text-xs md:text-sm mt-10 w-fit">
      <Image src={signature} width={100} height={100} alt="signature" />
      <div className="flex items-center justify-center gap-2">
        <Copyright size={16} /> 2024 - Atharva Joshi
      </div>
    </footer>
  );
};
