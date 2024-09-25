"use client";
import { Meteors } from "@/components/ui/meteors";
import { useResponsive } from "@/hooks/useResponsive";

export const Tab = ({
  title,
  isActive,
  center,
  data,
  elementsCard,
}: {
  title: string;
  isActive?: boolean;
  center?: boolean;
  data: React.ReactNode;
  elementsCard?: React.ReactNode;
}) => {
  const { isTablet } = useResponsive();
  return (
    <div className="w-full relative h-[78vh] md:h-[70vh]">
      <div className="absolute inset-0 h-full w-full transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-2 md:px-4 py-8 h-full overflow-y-scroll no-scrollbar rounded-2xl flex flex-col justify-start items-start">
        <h1 className="font-bold text-xl text-white mx-[30px] relative z-50">
          {title}
        </h1>
        {!isTablet && elementsCard}
        <div className={`${center ? "m-auto" : ""} w-full`}>{data}</div>
        {/* Meaty part - Meteor effect */}
        {isActive && <Meteors number={30} />}
      </div>
    </div>
  );
};
