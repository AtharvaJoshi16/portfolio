import { Description } from "@/customs/personal-project-card/description";
import { RepoLink } from "@/customs/personal-project-card/repo-link";
import { Title } from "@/customs/personal-project-card/title";
import { IconPaperclip } from "@tabler/icons-react";

const achievements = [
  {
    title: "January 2024 iChamp Winner at Accenture",
    description: [
      "I was named among the 37 iChamp Award Winners throughout India in the Product & Services category in Accenture Song",
    ],
    linkTitle: "Certificate",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/iChamp_certificate.pdf?alt=media&token=9c29d10e-26ad-430c-8266-64117593908e",
  },
  {
    title: "FY’25 Q1 Growth Catalyst ACE Award by Accenture.",
    description: [
      "Received ACE Award by Accenture Song for seamless deployment of B2B platform for Client",
    ],
    linkTitle: "Certificate",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/Atharva%20Joshi_ACE.pdf?alt=media&token=e866da4d-a7c2-4a99-b0ae-eb30b4f97923",
  },
];
const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900) Certification",
    description: [
      "Completed official Microsoft Certification in Azure Fundamentals through Accenture learning program",
    ],
    linkTitle: "Certificate",

    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/AZ_900_Certificate.pdf?alt=media&token=24668098-7046-40e9-921c-462435185000",
  },
  {
    title: "MERN Full Stack Course at StackRoute",
    description: [
      "Completed MERN full stack certification offered by Wipro as part of their Velocity program where I was trained professionally in full stack development using React and Express.js, along with other technologies such as Redux and MongoDB.",
    ],
    linkTitle: "Certificate",

    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/StackRoute_certificate.pdf?alt=media&token=945c9818-27c8-47c3-903a-a39aaf799bfd",
  },
  {
    title: "0-100 100xDevs Full Stack Development Cohort 2.0 by Harkirat Singh",
    description: [
      "Completed Full Stack Development Cohort launched by Youtuber and Developer, Harkirat Singh where I learned about intermediate and advanced level development concepts",
    ],
    linkTitle: "Certificate",

    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/100xDevs_certificate.png?alt=media&token=3cc0fce6-a0ce-4612-9cb3-dc630dd89dc0",
  },
];

export const achAndCertData = [...achievements, ...certifications].map(
  (item: any) => ({
    title: <Title title={item.title} />,
    description: <Description description={item.description} />,
    footer: (
      <RepoLink
        text={item.linkTitle}
        link={item.link}
        icon={<IconPaperclip width={18} />}
      />
    ),
  })
);
