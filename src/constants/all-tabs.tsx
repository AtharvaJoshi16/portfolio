import { Tab as TabProps } from "@/components/ui/tabs";
import { BadgeElementsCard } from "@/customs/badge-elements-card";
import { Education } from "@/customs/education/Education";
import { Experience } from "@/customs/experience/Experience";
import { Skills } from "@/customs/skills/Skills";
import { Tab } from "@/customs/tab";

export const tabs: TabProps[] = [
  {
    title: "Education",
    value: "education",
    center: true,
    content: <Tab title="Education" data={<Education />} />,
  },
  {
    title: "Experience",
    value: "experience",
    content: <Tab title="Experience" data={<Experience />} />,
  },
  {
    title: "Skills",
    value: "skills",
    center: true,
    elementsCard: <BadgeElementsCard />,
    content: <Tab title="Skills" data={<Skills />} />,
  },
];
