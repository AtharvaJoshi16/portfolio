import { Homepage } from "@/constants/data";
import { Container } from "./commons";

export const Internship = ({ index }: { index: number }) => {
  const { EXPERIENCE } = Homepage;
  const data = EXPERIENCE[index];
  return (
    <Container
      role={data.ROLE}
      org={data.ORG}
      loc={data.LOC}
      description={data.DESCRIPTION}
    />
  );
};
