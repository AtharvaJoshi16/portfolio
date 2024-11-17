import moment from "moment";
const getYOE = () => {
  const startDate = moment("12/1/2022"); //joining date
  const today = moment();
  const diff = today.diff(startDate, "years", true);
  return diff.toFixed(1);
};
export const Homepage = {
  NAME: "Atharva",
  ROLE: "Software Developer",
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
    "I excel as a Frontend Developer, building pixel perfect UI using React. I have engrossed myself in the React ecosystem since 2020, and have been actively upgrading myself with the latest updates. I also have knowledge of API development using Express or Java Springboot. I'm actively seeking Frontend or Full Stack Developer roles.",
  RESUME_LINK:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/AtharvaResumeLatestNov6.pdf?alt=media&token=dd554733-ca0a-4ff3-ac9c-62ca73352c7c",
  STATISTICS: {
    YOE: getYOE(),
    PROJECTS: {
      PROFESSIONAL: 2,
      PERSONAL: "5+",
    },
    LEETCODE: 40,
    ACHIEVEMENT: "iChamp Winner at Accenture",
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
      ROLE: "Associate Software Engineer",
      SUB_ROLE: "Custom Software Engineering Associate",
      ORG: "Accenture Solutions Pvt. Ltd.",
      SPAN: "Dec 2022 - Present",
      LOC: "Pune, Maharashtra",
      DESCRIPTION:
        "Collaborated in the development of private UI libraries as well as web applications according to client requirements in the form of user stories as well as defects and change requests.",
    },
    {
      ROLE: "Cybersecurity Intern",
      ORG: "Netlux Systems Pvt. Ltd.",
      SPAN: "Sept 2021 - May 2022",
      LOC: "Pune, Maharashtra",
      DESCRIPTION:
        "Studied about Vulnerability Assessment And Penetration Testing and prepared a system architecture for the project. Later, collaborated in the development of the project using technologies such as Python, Linux CLI tools, and React and managed a team of 4 to deliver it.",
    },
  ],
  ABOUT_ME: {
    header: "Hands dirty in every new tech",
    description: [
      "As a Frontend Developer, I build pixel perfect UIs using React and corresponding frameworks. I have been into React development since early 2020 and have been constantly upgrading myself since then.",
      "I aim to place myself at an expert level and generate content to help other developers excel in this field.",
    ],
  },
};
