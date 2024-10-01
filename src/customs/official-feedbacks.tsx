"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ProjectFeedbacks } from "@/constants/project-feedbacks";

export const OfficialFeedbacks = () => {
  const desktopData = ProjectFeedbacks.map((item) => ({
    name: item.by,
    quote: item.description,
  }));

  return (
    <div className="flex flex-col gap-2 mt-5">
      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-indigo-300">
        Project Feedbacks
      </h3>
      <InfiniteMovingCards direction="right" items={desktopData} speed="slow" />
    </div>
  );
};
