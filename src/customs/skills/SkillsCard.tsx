import { BackgroundGradient } from "@/components/ui/background-gradient";
import classNames from "classnames";
import { Icon } from "../icon";

export const SkillsCard = ({
  icon,
  title,
  badge,
  small,
}: {
  small?: boolean;
  icon: React.ReactNode;
  title: string;
  badge?: React.ReactNode;
}) => {
  return (
    <div className="m-2">
      <BackgroundGradient
        badge={badge}
        className={classNames(
          { "w-[75px] h-[75px] md:w-[125px] md:h-[125px] lg:p-4": !small },
          { "w-[36px] h-[36px] md:w-[40px] md:h-[40px]": small },
          "rounded-[22px] flex items-center justify-center p-1 bg-zinc-900"
        )}
      >
        <Icon tooltipText={title} tooltipClasses="top-[-40px]">
          {icon}
        </Icon>
      </BackgroundGradient>
    </div>
  );
};
