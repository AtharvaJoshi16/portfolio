import { skills } from "@/constants/skills";
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-[30px] m-20">
      <>
        <h3 className="text-2xl text-indigo-300 font-bold">
          Programming Languages
        </h3>
        <div className="flex items-center gap-10 flex-wrap">
          {skills.languages.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        </div>
      </>
      <>
        <h3 className="text-2xl text-indigo-300 font-bold">Technologies</h3>
        <div className="flex items-center gap-10 flex-wrap">
          {skills.technologies.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        </div>
      </>
      <>
        <h3 className="text-2xl text-indigo-300 font-bold">Tools</h3>
        <div className="flex items-center gap-10 flex-wrap">
          {skills.tools.map((skill) => (
            <SkillsCard {...skill} />
          ))}
        </div>
      </>
    </div>
  );
};
