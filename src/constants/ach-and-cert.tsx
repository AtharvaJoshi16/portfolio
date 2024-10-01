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
    linkTitle: "iChamp_Certificate.pdf",
    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/iChamp_certificate.pdf?alt=media&token=9c29d10e-26ad-430c-8266-64117593908e",
  },
];
const certifications = [
  {
    title: "MERN Full Stack Course at StackRoute",
    description: [
      "Completed MERN full stack certification offered by Wipro as part of their Velocity program where I was trained professionally in full stack development using React and Express.js, along with other technologies such as Redux and MongoDB.",
    ],
    linkTitle: "StackRoute_Certificate.pdf",

    link: "https://firebasestorage.googleapis.com/v0/b/portfolio-1f6e3.appspot.com/o/StackRoute_certificate.pdf?alt=media&token=945c9818-27c8-47c3-903a-a39aaf799bfd",
  },
  {
    title: "0-100 100xDevs Full Stack Development Cohort 2.0 by Harkirat Singh",
    description: [
      "Completed Full Stack Development Cohort launched by Youtuber and Developer, Harkirat Singh where I learned about intermediate and advanced level development concepts",
    ],
    linkTitle: "100xDevs_Cohort_2_Cert.png",

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
