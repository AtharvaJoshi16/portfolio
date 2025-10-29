import { HoverEffect } from "@/components/ui/card-hover-effect";
import { achAndCertData } from "@/constants/ach-and-cert";

export const AchievementsAndCertifications = () => {
  return (
    <div className="p-2">
      <HoverEffect
        className="-mt-4"
        items={achAndCertData}
        cardClassName="bg-slate-950/80"
      />
    </div>
  );
};
