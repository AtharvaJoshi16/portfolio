import { Homepage } from "@/constants/data";
import { Container } from "./commons";

export const Principal = ({ index }: { index: number }) => {
  const { EXPERIENCE } = Homepage;
  const data = EXPERIENCE[index];
  return (
    <Container
      role={data.ROLE}
      org={data.ORG}
      loc={data.LOC}
      logo={data.LOGO}
      // subRole={data.SUB_ROLE}
      description={data.DESCRIPTION}
    />
  );
};
