import { TimelineEntry } from "@/components/ui/timeline";
import { Accenture } from "@/customs/experience/Accenture";
import { Internship } from "@/customs/experience/Internship";

export const experienceData: TimelineEntry[] = [
  {
    title: "Dec 2024 - Present",
    content: <Accenture index={0} />,
  },
  {
    title: "Dec 2022 -  Nov 2024",
    content: <Accenture index={1} />,
  },
  {
    title: "Sept 2021 - May 2022",
    content: <Internship />,
  },
];
