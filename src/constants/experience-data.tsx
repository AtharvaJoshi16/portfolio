import { TimelineEntry } from "@/components/ui/timeline";
import { Accenture } from "@/customs/experience/Accenture";
import { Internship } from "@/customs/experience/Internship";
import { Principal } from "@/customs/experience/Principal";

export const experienceData: TimelineEntry[] = [
  {
    title: "Nov 2025 - Present",
    content: <Principal index={0} />,
  },
  {
    title: "Dec 2024 - Nov 2025",
    content: <Accenture index={1} />,
  },
  {
    title: "Dec 2022 -  Nov 2024",
    content: <Accenture index={2} />,
  },
  {
    title: "Sept 2021 - May 2022",
    content: <Internship index={3} />,
  },
];
