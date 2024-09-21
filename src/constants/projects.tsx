import mern from "@/assets/mern.png";
import { Description } from "@/customs/personal-project-card/description";
import { Footer } from "@/customs/personal-project-card/footer";
import { Title } from "@/customs/personal-project-card/title";
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
import Image from "next/image";

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
      "Developed using Next.js App router, Typescript, React Flow, Redux Toolkit, TailwindCSS, Shadcn-UI.",
    ],
    technologies: [
      { title: "Next.js", icon: <Next width={30} height={30} /> },
      { title: "React Flow", icon: <ReactFlow width={30} height={30} /> },
      { title: "React Toolkit", icon: <Redux width={30} height={30} /> },
      { title: "Shadcn", icon: <Shadcn width={30} height={30} /> },
      { title: "TailwindCSS", icon: <Tw width={30} height={30} /> },
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
      "Developed using Typescript, React.js, Material UI, Shadcn-UI as frontend and Express.js, MongoDB as backend.",
    ],
    technologies: [
      {
        title: "MERN Stack",
        icon: <Image src={mern} alt="mern-logo" width={120} height={30} />,
      },
      { title: "Material UI", icon: <Mui width="30" height="30" /> },
      { title: "Shadcn", icon: <Shadcn width="30" height="30" /> },
    ],
  },
  {
    title: "Taskman API",
    repos: { be: "https://github.com/AtharvaJoshi16/taskman" },
    description: [
      "Developed a microservice that enables user to perform CRUD operations his various tasks, epics or subtasks. Epics include multiple tasks and tasks include multiple subtasks.",
      "Developed using Springboot, Java and MySQL.",
    ],
    technologies: [
      {
        title: "Java",
        icon: <Java width="30" height="30" />,
      },
      { title: "Springboot", icon: <Springboot width="30" height="30" /> },
      { title: "MySQL", icon: <Mysql width="30" height="30" /> },
    ],
  },
  {
    title: "Movies App",
    link: "https://develop.d1bbhsl076xzev.amplifyapp.com/",
    repos: { fe: "https://github.com/AtharvaJoshi16/movies-app" },
    description: [
      "Developed a website that provides user with reviews and highlights of a movie.",
      "Next.js, Shadcn and Tailwind learning based project",
      "Developed using Next.js App router with TailwindCSS and Shadcn-UI.",
    ],
    technologies: [
      {
        title: "Java",
        icon: <Java width="30" height="30" />,
      },
      { title: "Springboot", icon: <Springboot width="30" height="30" /> },
      { title: "MySQL", icon: <Mysql width="30" height="30" /> },
    ],
  },
  {
    title: "Portfolio (This website)",
    repos: { fe: "https://github.com/AtharvaJoshi16/portfolio" },
    link: "/",
    description: [
      "Developed this website that provides viewer with my career portfolio and demonstrates my frontend skills as well.",
      "Developed using Next.js App router, TailwindCSS, Aceternity UI and Shadcn-UI",
    ],
    technologies: [
      {
        title: "Java",
        icon: <Java width="30" height="30" />,
      },
      { title: "Springboot", icon: <Springboot width="30" height="30" /> },
      { title: "MySQL", icon: <Mysql width="30" height="30" /> },
    ],
  },
];

export const hoverCardItems = personalProjects.map((project) => ({
  title: <Title title={project.title} link={project.link} />,
  description: <Description description={project.description} />,
  link: project.link,
  footer: <Footer repos={project.repos} technologies={project.technologies} />,
}));
