"use client";

import profilePic from "@/assets/profile_pic.png";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Homepage } from "@/constants/data";
import Image from "next/image";

export const IntroData = () => {
  const { ROLE, DESCRIPTION, TYPEWRITER_WORDS } = Homepage;
  return (
    <div className="flex items-center flex-col w-full lg:flex-row justify-between">
      <div className="flex flex-col">
        <h3 className="text-2xl text-center lg:text-start z-20">{ROLE}</h3>
        <TypewriterEffectSmooth className="z-20" words={TYPEWRITER_WORDS} />
        <p className="text-lg z-20 w-full text-justify lg:w-[70%]">
          {DESCRIPTION}
        </p>
      </div>
      <Image
        className="z-20 w-full"
        width={200}
        height={200}
        alt="profile-pic"
        src={profilePic}
      />
    </div>
  );
};
