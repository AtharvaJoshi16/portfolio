import { Homepage } from "@/constants/data";
import { Container } from "./commons";

export const Internship = () => {
  const { EXPERIENCE } = Homepage;
  const data = EXPERIENCE[1];
  return (
    <Container
      role={data.ROLE}
      org={data.ORG}
      loc={data.LOC}
      description={data.DESCRIPTION}
    />
  );
};
