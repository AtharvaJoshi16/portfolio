import { Button } from "@/components/ui/button";
import { ProjectCardProps } from "@/customs/project-card";
import {
  Algolia,
  Java,
  Jest,
  Magnolia,
  Mui,
  Mysql,
  Next,
  React,
  ReactFlow,
  Redux,
  Sass,
  Shadcn,
  Springboot,
  Turbo,
  Tw,
  Uberall,
} from "@/icons";
import { IconLink } from "@tabler/icons-react";

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

export const personalProjects: ProjectCardProps[] = [
  {
    title: "Flow Nodes",
    link: "https://develop.d4xajhu5z1ils.amplifyapp.com/canvas",
    repos: { fe: "https://github.com/AtharvaJoshi16/flow-nodes" },
    description: [
      "A web application that enables user to create roadmaps and schemas using drag and drop options",
      "Developed as part of trying out React Flow library",
    ],
    technologies: [
      { title: "Next.js", icon: <Next /> },
      { title: "React Flow", icon: <ReactFlow /> },
      { title: "React Toolkit", icon: <Redux /> },
      { title: "Shadcn", icon: <Shadcn /> },
      { title: "TailwindCSS", icon: <Tw /> },
    ],
  },
  {
    title: "Job Finder App",
    repos: {
      fe: "https://github.com/AtharvaJoshi16/job-portal-fe",
      be: "https://github.com/AtharvaJoshi16/job-portal-be",
    },
    description: [
      "Developed a fullstack application using MERN Stack that enables an employee to find a relevant job and an employer to post jobs as per requirements.",
    ],
    technologies: [
      {
        title: "MERN Stack",
        icon: (
          <img
            src="/src/assets/mern.png"
            alt="mern-logo"
            width={30}
            height={30}
          />
        ),
      },
      { title: "Material UI", icon: <Mui /> },
      { title: "Shadcn", icon: <Shadcn /> },
    ],
  },
  {
    title: "Taskman API",
    repos: { be: "https://github.com/AtharvaJoshi16/taskman" },
    description: [
      "Developed a microservice that enables user to perform CRUD operations his various tasks, epics or subtasks. Epics include multiple tasks and tasks include multiple subtasks.",
    ],
    technologies: [
      {
        title: "Java",
        icon: <Java />,
      },
      { title: "Springboot", icon: <Springboot /> },
      { title: "MySQL", icon: <Mysql /> },
    ],
  },
];

export const hoverCardItems = personalProjects.map((project) => ({
  title: (
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-indigo-100">{project.title}</h3>
    </div>
  ),
  description: (
    <div className="flex flex-col gap-1 text-justify">
      {project.description[0]}
      {project.repos && (
        <>
          {project.repos.fe && (
            <div className="flex items-center gap-1">
              <Button size="icon" variant="ghost">
                <IconLink width="18" />
              </Button>
              <h3>Frontend Repo</h3>
            </div>
          )}
          {project.repos.be && (
            <div className="flex items-center gap-1">
              <Button size="icon" variant="ghost">
                <IconLink width="18" />
              </Button>
              <h3>Backend Repo</h3>
            </div>
          )}
        </>
      )}
    </div>
  ),
  link: project.link,
}));
