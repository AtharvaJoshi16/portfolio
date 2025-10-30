import { Acn, Pfg } from "@/icons";
import moment from "moment";
const getYOE = () => {
  const startDate = moment("09/01/2021"); //joining date
  const today = moment();
  const diff = today.diff(startDate, "months") / 12;
  return parseFloat(diff.toFixed(1));
};

const AcnLogo = () => {
  return <Acn size={24} className="w-full h-full max-w-25 basis-56" />;
};

const PGSLogo = () => {
  return <Pfg size={24} className="w-full h-full max-w-25 basis-56" />;
};

export const Homepage = {
  NAME: "Atharva",
  ROLE: "Software Engineer",
  TYPEWRITER_WORDS: [
    {
      className: "text-slate-50",
      text: "Hello",
    },
    {
      className: "text-slate-50",
      text: "I'm",
    },
    {
      text: "Atharva Joshi",
      className: "text-indigo-400",
    },
  ],
  DESCRIPTION:
    // "I excel as a Frontend Developer, building pixel perfect UI using React. I have engrossed myself in the React ecosystem since 2020, and have been actively upgrading myself with the latest updates. I also have knowledge of API development using Express or Java Springboot. I'm actively seeking Frontend or Full Stack Developer roles.",
    "I excel as a Full Stack Developer with a degree in Information Technology and over 3 years of hands-on experience. I specialize in crafting clean, responsive and pixel perfect UIs with React.js and building robust backend systems using Java/Node.js.  I'm currently seeking Frontend, Backend or Fullstack Developer roles where I can contribute to building impactful digital products.",
  RESUME_LINK:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/Atharva_ResumeJun27_25.pdf?alt=media&token=4e55e57e-0e40-419e-8d70-f48b017e430c",
  STATISTICS: {
    YOE: getYOE(),
    PROJECTS: {
      PROFESSIONAL: 3,
      PERSONAL: "5+",
    },
    LEETCODE: "70+",
    ACHIEVEMENT: "Awards at Accenture",
  },
  EDUCATION: {
    SSC: {
      title: "Secondary Education",
      linkText: "SSC Marksheet",
      BOARD: "Maharashtra State Board",
      PERCENTAGE: "96.20%",
      PASSOUT_YEAR: 2016,
      href: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/10th%20marksheet.pdf?alt=media&token=d7f595e7-f05f-4188-95c6-6c0c247413e3",
    },
    HSC: {
      title: "Higher Secondary Education",
      linkText: "HSC Marksheet",
      BOARD: "Maharashtra State Board",
      PERCENTAGE: "80.15%",
      PASSOUT_YEAR: "2016 - 2018",
      href: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/12th-1.pdf?alt=media&token=01bd6963-3c5b-4bf5-b628-34baa5bef397",
    },
    BE: {
      title: "Bachelor of Engineering",
      linkText: "Degree Certificate",
      STREAM: "Information Technology",
      UNIVERSITY: "Savitribai Phule Pune University",
      PASSOUT_YEAR: "2018 - 2022",
      CGPA: 9.09,
      href: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/PDC.pdf?alt=media&token=e1404241-e259-4b50-a771-e5fc24c2dfc7",
    },
  },
  EXPERIENCE: [
    {
      ROLE: "Software Engineer",
      SUB_ROLE: "Analyst",
      ORG: "Principal Global Services",
      SPAN: "Nov 2025 - Present",
      LOC: "Pune, Maharashtra",
      LOGO: <PGSLogo />,
      DESCRIPTION:
        "Full Stack Developer contributing to React.js, AWS services, Node.js developing software solutions for internal tools.",
    },
    {
      ROLE: "Software Engineer",
      SUB_ROLE: "Custom Software Engineering Analyst",
      ORG: "Accenture Solutions Pvt. Ltd.",
      SPAN: "Dec 2024 - Present",
      LOC: "Pune, Maharashtra",
      LOGO: <AcnLogo />,
      DESCRIPTION:
        "Collaborated in the development of private UI libraries as well as web applications according to client requirements in the form of user stories as well as defects and change requests.",
    },
    {
      ROLE: "Associate Software Engineer",
      SUB_ROLE: "Custom Software Engineering Associate",
      ORG: "Accenture Solutions Pvt. Ltd.",
      SPAN: "Dec 2022 - Nov 2024",
      LOC: "Pune, Maharashtra",
      LOGO: <AcnLogo />,
      DESCRIPTION:
        "Collaborated in the development of private UI libraries as well as web applications according to client requirements in the form of user stories as well as defects and change requests.",
    },
    {
      ROLE: "Cybersecurity Intern",
      ORG: "Netlux Systems Pvt. Ltd.",
      SPAN: "Sept 2021 - May 2022",
      LOC: "Pune, Maharashtra",
      LOGO: <AcnLogo />,
      DESCRIPTION:
        "Studied about Vulnerability Assessment And Penetration Testing and prepared a system architecture for the project. Later, collaborated in the development of the project using technologies such as Python, Linux CLI tools, and React and managed a team of 4 to deliver it.",
    },
  ],
  ABOUT_ME: {
    header: "Hands dirty in every new tech",
    description: [
      "As a Full Stack Developer, I build pixel perfect UIs using React and corresponding frameworks and power them with good backends using Java. I have been into React development since early 2020 and have been constantly upgrading myself since then.",
      "I aim to place myself at an expert level and generate content to help other developers excel in this field.",
    ],
  },
};
