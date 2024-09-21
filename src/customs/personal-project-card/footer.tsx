import { ProjectCardProps } from "../project-card";
import { RepoLink } from "./repo-link";

type FooterProps = Pick<ProjectCardProps, "repos" | "technologies">;

export const Footer = ({ repos, technologies }: FooterProps) => {
  return (
    <div className="flex flex-col gap-1">
      {repos?.fe && <RepoLink link={repos?.fe} text="Frontend Repo" />}
      {repos?.be && <RepoLink link={repos?.be} text="Backend Repo" />}
    </div>
  );
};
