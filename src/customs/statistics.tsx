import { Homepage } from "@/constants/data";
import { StatItem } from "./stat-item";

export const Statistics = () => {
  const { STATISTICS } = Homepage;
  const { YOE, PROJECTS, LEETCODE, ACHIEVEMENT } = STATISTICS;
  return (
    <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-[10px] md:gap-[50px]">
      <StatItem number={YOE} text="Years Of Experience" />
      <StatItem number={PROJECTS.PROFESSIONAL} text="Projects" />
      <StatItem number={LEETCODE} text="Leetcode Problems" />
      <StatItem number={1} text={ACHIEVEMENT} />
    </div>
  );
};
