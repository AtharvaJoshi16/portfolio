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

export const projects: ProjectCardProps[] = [
  {
    title: "B2B Banking Operations Platform Development",
    role: "Junior Backend Developer",
    duration: "Feb 2023 - September 2023",
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
      "Collaborated in the development of one of the many microservices for a B2B banking platform that handles customer subscriptions, assets, along with roles and permissions, performing advanced CRUD operations on multiple modules such as subscriptions and roles using Springboot, Java, JPA and client’s third party API integration.",
      "Performed deployments for various environments along with pipeline debugging for vulnerabilities and SonarQube issues.",
      "Maintained 80% of code coverage for the application using JUnit along with API documentation using Swagger.",
    ],
  },
  {
    title: "CMS Website for Major German Supermarket Chain",
    role: "Junior React Developer",
    duration: "October 2023 - Feb 2024",
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
    role: "React Developer",
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
    title: "Rentbandhu",
    link: "https://rentbandhu.atharvajoshi.dev",
    repos: {
      be: "https://github.com/AtharvaJoshi16/rms-api",
      fe: "https://github.com/AtharvaJoshi16/rms-app",
    },
    description: [
      "Developed a full stack application that enables users to search properties, host a property and rent a property.",
      "Developed using Next.js, Shadcn UI, Redux and React Hook Form for frontend and Springboot, Java for backend along with AWS S3 storage, EC2, and RDS MySQL Database.",
    ],
    technologies: [],
  },
  {
    title: "Easylib UI",
    link: "https://easylib-ui.atharvajoshi.dev",
    repos: {
      fe: "https://github.com/AtharvaJoshi16/easylib-ui",
    },
    description: [
      "Developed a custom component library as an npm package @aj.dev/easylib-ui that follows Atomic Design Principles using React.js, Storybook, Vite, TailwindCSS and Typescript.",
    ],
    technologies: [],
  },
  {
    title: "Flow Nodes",
    link: "https://develop.d2v373g4q5ir6f.amplifyapp.com/canvas",
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
    title: "Ecommerce API",
    repos: { be: "https://github.com/AtharvaJoshi16/ecomm-microservices" },
    link: "/",
    description: [
      "Developed multiple Spring Boot microservices including products, orders, auth, and cart, using Spring Cloud Gateway and Eureka for service discovery and routing.",
      "Implemented Redis caching, dockerized all services, integrated MySQL and AWS S3 bucket for persistence and media storage.",
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
