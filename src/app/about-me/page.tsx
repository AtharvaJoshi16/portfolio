"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { achAndCertData } from "@/constants/ach-and-cert";
import { AboutMe } from "@/customs/about-me";

export default function AboutMePage() {
  return (
    <div className="flex flex-col gap-4 m-4 md:mx-20 md:my-16">
      <AboutMe />
      <div className="flex flex-col gap-2 mt-8">
        <h3 className="text-lg md:text-2xl font-bold text-indigo-300">
          Achievements & Certifications 🏆
        </h3>
        <HoverEffect className="-mt-4" items={achAndCertData} />
      </div>
    </div>
  );
}
