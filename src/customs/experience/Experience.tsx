import { Timeline } from "@/components/ui/timeline";
import { Homepage } from "@/constants/data";
import { experienceData } from "@/constants/experience-data";

export const Experience = () => {
  const data = Homepage.EXPERIENCE[1];
  return (
    <div className="w-full z-100">
      <Timeline data={experienceData} />
    </div>
  );
};
