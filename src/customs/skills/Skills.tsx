import { skills } from "@/constants/skills";
import { CustomCarousel } from "../custom-carousel";
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
  const headerClasses = "text-lg md:text-xl text-indigo-300 font-bold";
  return (
    <div className="flex flex-col gap-[25px] my-10 mx-6 md:my-20 md:mx-10">
      <>
        <h3 className={headerClasses}>Programming Languages</h3>
        <CustomCarousel
          items={skills.languages.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        />
      </>
      <>
        <h3 className={headerClasses}>Technologies</h3>
        <CustomCarousel
          items={skills.technologies.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        />
      </>
      <>
        <h3 className={headerClasses}>Tools</h3>
        <CustomCarousel
          items={skills.tools.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        />
      </>
    </div>
  );
};
