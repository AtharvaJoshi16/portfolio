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
  Tw,
} from "@/icons";
import Image from "next/image";

export const projects: ProjectCardProps[] = [
  {
    title: "Accenture Internal",
    role: "React Developer",
    duration: "April 2023 - July 2023",
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
    ],
    description: [
      "Worked as a Development Lead, managing a small frontend team of entry level associates, along with working on core features for an experimental E-commerce project that handles purchase, offers management and listing of products for employee reward points, using Next.js for website, Material-UI and Storybook for UI library along with Magnolia CMS Integration.",
      "Performed code reviews, merging of pull requests and deployment on multiple environments.",
    ],
  },
  {
    title: "B2B Banking Application",
    role: "Backend Developer",
    duration: "August 2023 - February 2024",
    technologies: [
      {
        title: "Java",
        icon: <Java height="36" width="36" />,
      },
      {
        title: "Springboot",
        icon: <Springboot height="36" width="36" />,
      },
    ],
    description: [
      "Contributed to API development of a logistics freight booking application that handles customer container bookings for transportation through rail, fleet and trucks using Springboot, Java and Amazon RDS database along with test case development with a maintained code coverage of 80%.",
      "Performed and managed API deployments for multiple environments for pull requests along with debugging build pipelines for pull requests that includes SonarQube issues and Checkmarx vulnerability scanning.",
    ],
  },
  {
    title: "Rail Freight Services Application",
    role: "Backend Developer",
    duration: "March 2024 - Present",
    technologies: [
      {
        title: "Java",
        icon: <Java height="36" width="36" />,
      },
      {
        title: "Springboot",
        icon: <Springboot height="36" width="36" />,
      },
    ],
    description: [
      "Contributed to API development of a logistics freight booking application that handles customer container bookings for transportation through rail, fleet and trucks using Springboot, Java and Amazon RDS database along with test case development with a maintained code coverage of 80%.",
      "Performed and managed API deployments for multiple environments for pull requests along with debugging build pipelines for pull requests that includes SonarQube issues and Checkmarx vulnerability scanning.",
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
      "Developed using Next.js App router with TailwindCSS, Shadcn-UI and TMDB API.",
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
      "Developed using Next.js App router, TailwindCSS, Aceternity UI, Shadcn-UI and Firebase Storage",
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
