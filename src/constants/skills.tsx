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

export const skills = {
  technologies: [
    {
      title: "React.js",
      icon: <React />,
      badge: <BadgeText text="IV" />,
    },
    {
      title: "Redux",
      icon: <Redux />,
      badge: <BadgeText text="III" />,
    },
    {
      title: "Next.js",
      icon: <Next />,
      badge: <BadgeText text="IV" />,
    },
    {
      title: "Css",
      icon: <Css />,
      badge: <BadgeText text="II" />,
    },
    {
      title: "Tailwind",
      icon: <Tw />,
      badge: <BadgeText text="II" />,
    },
    {
      title: "Storybook",
      icon: <Sb />,
    },
    {
      title: "Sass",
      icon: <Sass />,
      badge: <BadgeText text="III" />,
    },
  ],
  languages: [
    {
      title: "Javascript ES6",
      icon: <Js />,
      badge: <BadgeText text="III" />,
    },
    {
      title: "Typescript",
      icon: <Ts />,
      badge: <BadgeText text="III" />,
    },
    {
      title: "Java",
      icon: <Java />,
      badge: <BadgeText text="I" />,
    },
    {
      title: "PostgreSQL",
      icon: <Postgresql />,
      badge: <BadgeText text="I" />,
    },
    {
      title: "Python",
      icon: <Python5 />,
      badge: <BadgeText text="II" />,
    },
  ],
  tools: [
    {
      title: "Jira",
      icon: <JiraLight />,
    },
    {
      title: "Confluence",
      icon: <ConfluenceLight />,
    },
    {
      title: "Azure Devops",
      icon: <AzureDevops />,
    },
    {
      title: "Git",
      icon: <Git />,
    },
  ],
};
