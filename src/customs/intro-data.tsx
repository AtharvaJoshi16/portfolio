"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Homepage } from "@/constants/data";

export const IntroData = () => {
  const { ROLE, DESCRIPTION, TYPEWRITER_WORDS } = Homepage;

  return (
    <div className="flex items-center gap-10 xl:gap-15 flex-col w-full xl:flex-row">
      <div className="flex order-2 xl:order-1 flex-col w-fit">
        <h3 className="text-xl md:text-2xl text-center xl:text-start z-20">
          {ROLE}
        </h3>
        <TypewriterEffectSmooth className="z-20" words={TYPEWRITER_WORDS} />
        <p className="text-sm md:text-base z-20 w-full text-justify xl:w-[90%]">
          {DESCRIPTION}
        </p>
      </div>
      <Avatar className="z-20 order-1 xl:order-2 aspect-square h-[180px] w-[160px] lg:h-[320px] lg:w-[300px]">
        <AvatarImage
          className="object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/IMG_20240922_090717.jpg?alt=media&token=d77f6aad-f9ce-4561-885c-928964792fdf"
          alt="profile-pic"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
    </div>
  );
};
