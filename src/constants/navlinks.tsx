import {
  IconBriefcaseFilled,
  IconCode,
  IconHome,
  IconSquareRoundedLetterAFilled,
} from "@tabler/icons-react";
import { Cog } from "lucide-react";

export const links = [
  {
    title: "Home",
    icon: <IconHome />,
    href: "/",
  },
  {
    title: "Career",
    icon: <IconBriefcaseFilled />,
    href: "/career",
  },
  {
    title: "Projects",
    icon: <IconCode />,
    href: "/projects",
  },
  // {
  //   title: "Feedbacks",
  //   icon: <IconMessage2 />,
  //   href: "/feedbacks",
  // },
  {
    title: "About me",
    icon: <IconSquareRoundedLetterAFilled />,
    href: "/about-me",
  },
  {
    title: "Admin only",
    icon: <Cog />,
    href: "/admin/upload",
  },
];
