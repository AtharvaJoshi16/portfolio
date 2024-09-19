import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Icon } from "../icon";

export const SkillsCard = ({
  icon,
  title,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  badge?: React.ReactNode;
}) => {
  return (
    <div className="m-2">
      <BackgroundGradient
        badge={badge}
        className="w-[75px] h-[75px] md:w-[125px] md:h-[125px] rounded-[22px] flex items-center justify-center p-1 lg:p-4 bg-zinc-900"
      >
        <Icon tooltipText={title} tooltipClasses="top-[-40px]">
          {icon}
        </Icon>
      </BackgroundGradient>
    </div>
  );
};
