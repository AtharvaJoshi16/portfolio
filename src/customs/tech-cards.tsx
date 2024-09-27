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
    <div className="flex items-center justify-center md:justify-start gap-6 w-full md:gap-10 flex-wrap mt-4 md:mt-0 md:m-5">
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
