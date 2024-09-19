import { ProjectCardProps } from "@/customs/project-card";
import {
  Algolia,
  Jest,
  Magnolia,
  Mui,
  Next,
  React,
  Redux,
  Sass,
  Turbo,
  Uberall,
} from "@/icons";

export const projects: ProjectCardProps[] = [
  {
    title: "Supermarket Web Application",
    role: "Junior React Developer",
    duration: "April 2023 - Feb 2024",
    technologies: [
      {
        title: "Next.js",
        icon: <Next height="36" width="36" />,
      },
      {
        title: "Jest",
        icon: <Jest height="36" width="36" />,
      },
      {
        title: "React.js",
        icon: <React height="36" width="36" />,
      },
      {
        title: "Sass",
        icon: <Sass height="36" width="36" />,
      },
      {
        title: "Magnolia CMS",
        icon: <Magnolia height="36" width="100" />,
      },
      {
        title: "Algolia",
        icon: <Algolia height="36" width="100" />,
      },
      {
        title: "Uberall",
        icon: <Uberall height="36" width="100" />,
      },
    ],
    description: [
      "Collaborated in the development of a web application for client that provides customers with latest offers on various products such as groceries, electronics and daily needs and adding the items to cart for the purchase.",
      "Developed a custom npm component library in client’s private registry using React.js and Sass with Storybook as the design system.",
      "Developed a website using Next.js Pages router format along with components from the custom library developed.",
      "Integrated the website with Magnolia CMS APIs as backend, Algolia Search API for search queries and filter functionalities and Uberall API for client’s store locator.",
      "Worked on Unit Test Case development using Jest and React Testing Library to ensure code coverage as per requirements.",
    ],
  },
  {
    title: "Rail Freight Services Web Application",
    role: "Junior React Developer",
    duration: "March 2024 - Present",
    technologies: [
      {
        title: "Next.js",
        icon: <Next height="36" width="36" />,
      },
      {
        title: "React.js",
        icon: <React height="36" width="36" />,
      },
      {
        title: "Material UI",
        icon: <Mui height="36" width="36" />,
      },
      {
        title: "Redux Toolkit",
        icon: <Redux height="36" width="36" />,
      },
      {
        title: "Jest",
        icon: <Jest height="36" width="36" />,
      },
      {
        title: "Turborepo",
        icon: <Turbo height="36" width="100" />,
      },
    ],
    description: [
      "Collaborated in the development of a web application for client that enables user, either individual or corporate, in booking of various containers, such as truck, fleet or railway containers for transfer of logistics throughout the country. The application further helps the user to prebook, cancel or track the booked services as the needs.",
      "Developed a custom npm component library in client’s private registry using React.js and Material UI with Storybook as the design system.",
      "Developed a website using Monorepo project structure, Next.js App router format, Redux Toolkit along with components from the custom library developed.",
      "Integrated the website with client ready APIs for all the services offered by client.",
      "Worked on Unit Test Case development using Jest and React Testing Library to ensure code coverage as per requirements.",
    ],
  },
];
