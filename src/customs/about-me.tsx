"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { Homepage } from "@/constants/data";

const SparklesText = ({ text }: { text: string }) => (
  <div className="w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 className="font-mono md:text-2xl text-xl lg:text-4xl font-bold text-center text-white relative z-20">
      {text}
    </h1>
    <div className="w-[40rem] mt-2 h-40 relative">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-slate-800 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  </div>
);

export const AboutMe = () => {
  const { ABOUT_ME } = Homepage;
  const { description } = ABOUT_ME;
  return (
    <>
      {/* <SparklesText text={header} /> */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg md:text-2xl font-bold text-indigo-300">
          About Me 😃
        </h3>
        {description.map((item) => (
          <h3 className="text-justify text-sm md:text-base text-slate-100">
            {item}
          </h3>
        ))}
      </div>
    </>
  );
};
