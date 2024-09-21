import { Icon } from "./icon";
import { Technology } from "./project-card";
import { SkillsCard } from "./skills/SkillsCard";

export const TechCards = ({
  technologies,
  gradient,
}: {
  technologies: Technology[];
  gradient?: boolean;
}) => {
  return (
    <div className="flex items-center gap-[30px] flex-wrap">
      {technologies.map((tech) =>
        gradient ? (
          <SkillsCard small={gradient} icon={tech.icon} title={tech.title} />
        ) : (
          <Icon tooltipText={tech.title}>{tech.icon}</Icon>
        )
      )}
    </div>
  );
};
