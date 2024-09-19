"use client";

import profilePic from "@/assets/profile_pic.png";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Homepage } from "@/constants/data";
import Image from "next/image";

export const IntroData = () => {
  const { ROLE, DESCRIPTION, TYPEWRITER_WORDS } = Homepage;
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="text-2xl z-20">{ROLE}</h3>
        <TypewriterEffectSmooth className="z-20" words={TYPEWRITER_WORDS} />
        <p className="text-lg z-20 w-[70%]">{DESCRIPTION}</p>
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
