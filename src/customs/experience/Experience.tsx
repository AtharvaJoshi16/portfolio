import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "@/constants/experience-data";

export const Experience = () => {
  return (
    <div className="w-full z-100">
      <Timeline data={experienceData} />
    </div>
  );
};
