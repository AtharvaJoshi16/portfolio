import { skills } from "@/constants/skills";
import { useResponsive } from "@/hooks/useResponsive";
import { CustomCarousel } from "../custom-carousel";
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
  const { isMobile } = useResponsive();
  return (
    <div className="flex flex-col gap-[30px] m-10 md:m-20">
      <>
        <h3 className="text-2xl text-indigo-300 font-bold">
          Programming Languages
        </h3>
        <CustomCarousel
          items={skills.languages.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        />
      </>
      <>
        <h3 className="text-2xl text-indigo-300 font-bold">Technologies</h3>
        <CustomCarousel
          items={skills.technologies.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        />
      </>
      <>
        <h3 className="text-2xl text-indigo-300 font-bold">Tools</h3>
        <CustomCarousel
          items={skills.tools.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        />
      </>
    </div>
  );
};
