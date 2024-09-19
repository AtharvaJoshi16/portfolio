import { Boxes } from "@/components/ui/background-boxes";
import { Buttons } from "./buttons";
import { IntroData } from "./intro-data";

export const Description = () => {
  return (
    <div className="relative p-3 overflow-hidden flex flex-col gap-3 text-slate-50 mt-[30px]">
      <div className="absolute w-full h-full z-20">
        <Boxes className="opacity-50" />
      </div>
      <IntroData />
      <Buttons />
    </div>
  );
};
