import { Boxes } from "@/components/ui/background-boxes";
import { Buttons } from "./buttons";
import { IntroData } from "./intro-data";

export const Description = () => {
  return (
    <div className="relative p-3 overflow-hidden flex flex-col gap-3 text-slate-50 mt-[30px]">
      <div className="hidden lg:block absolute w-full h-full z-20">
        <Boxes className="opacity-50" />
      </div>
      <IntroData />
      <div className="flex items-center gap-5 justify-center md:justify-start">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/aws-certified-cloud-practitioner.png?alt=media&token=2ce194c0-27c7-440b-a00e-d5fe2a447d3e"
          width={125}
          height={125}
          alt="aws-clf-02-badge"
          className="z-40"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/microsoft-certified-fundamentals-badge.svg?alt=media&token=3a8c49f7-3a6a-4bbf-8709-c3891e8bda4e"
          width={125}
          height={125}
          alt="ms-azure-900-badge"
          className="z-40"
        />
      </div>
      <Buttons />
    </div>
  );
};
