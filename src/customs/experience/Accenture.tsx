import { Homepage } from "@/constants/data";
import { Container } from "./commons";

export const Accenture = () => {
  const { EXPERIENCE } = Homepage;
  const data = EXPERIENCE[0];
  return (
    <Container
      role={data.ROLE}
      org={data.ORG}
      loc={data.LOC}
      subRole={data.SUB_ROLE}
      description={data.DESCRIPTION}
    />
  );
};
