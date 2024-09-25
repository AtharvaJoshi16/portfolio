import { BadgeText } from "@/customs/badge-text";
import {
  AzureDevops,
  ConfluenceLight,
  Css,
  Git,
  Java,
  JiraLight,
  Js,
  Next,
  Postgresql,
  Python5,
  React,
  Redux,
  Sass,
  Sb,
  Ts,
  Tw,
} from "@/icons";

const commonClasses = "w-[36px] h-[36px] lg:w-auto md:w-[60px] md:h-[60px]";

const wideIconsClasses = "w-[56px] h-[56px] md:w-[96px] md:h-[96px]";

export const skills = {
  technologies: [
    {
      title: "React.js",
      icon: <React className={commonClasses} />,
      badge: <BadgeText text="IV" />,
    },
    {
      title: "Redux",
      icon: <Redux className={commonClasses} />,
      badge: <BadgeText text="III" />,
    },
    {
      title: "Next.js",
      icon: <Next className={commonClasses} />,
      badge: <BadgeText text="IV" />,
    },
    {
      title: "Css",
      icon: <Css className={commonClasses} />,
      badge: <BadgeText text="II" />,
    },
    {
      title: "Tailwind",
      icon: <Tw className={commonClasses} />,
      badge: <BadgeText text="II" />,
    },
    {
      title: "Storybook",
      icon: <Sb className={commonClasses} />,
    },
    {
      title: "Sass",
      icon: <Sass className={commonClasses} />,
      badge: <BadgeText text="III" />,
    },
  ],
  languages: [
    {
      title: "Javascript ES6",
      icon: <Js className={commonClasses} />,
      badge: <BadgeText text="III" />,
    },
    {
      title: "Typescript",
      icon: <Ts className={commonClasses} />,
      badge: <BadgeText text="III" />,
    },
    {
      title: "Java",
      icon: <Java className={commonClasses} />,
      badge: <BadgeText text="I" />,
    },
    {
      title: "PostgreSQL",
      icon: <Postgresql className={commonClasses} />,
      badge: <BadgeText text="I" />,
    },
    {
      title: "Python",
      icon: <Python5 className={commonClasses} />,
      badge: <BadgeText text="II" />,
    },
  ],
  tools: [
    {
      title: "Jira",
      icon: <JiraLight className={wideIconsClasses} />,
    },
    {
      title: "Confluence",
      icon: <ConfluenceLight className={wideIconsClasses} />,
    },
    {
      title: "Azure Devops",
      icon: <AzureDevops className={commonClasses} />,
    },
    {
      title: "Git",
      icon: <Git className={commonClasses} />,
    },
  ],
};
