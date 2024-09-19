import { levels } from "@/constants/levels";
import { BadgeText } from "./badge-text";
import { Card } from "./card";

const BadgeElementsCardItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

export const BadgeElementsCard = () => {
  return (
    <Card className="absolute right-10 z-50 w-[200px]">
      <div className="flex flex-col gap-3 text-sm">
        {levels.map((level) => (
          <BadgeElementsCardItem>
            <BadgeText bold text={level.title} />
            <BadgeText bold text={level.roman} />
          </BadgeElementsCardItem>
        ))}
      </div>
    </Card>
  );
};
