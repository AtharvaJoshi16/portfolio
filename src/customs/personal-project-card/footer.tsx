import { ProjectCardProps } from "../project-card";
import { RepoLink } from "./repo-link";

type FooterProps = Pick<ProjectCardProps, "repos" | "technologies" | "title">;

export const Footer = ({ repos, technologies, title }: FooterProps) => {
  return (
    <div className="flex flex-col gap-1">
      {repos?.fe && (
        <RepoLink
          link={repos?.fe}
          text="Frontend Repo"
          title={title}
          action="project_repo_link_click"
        />
      )}
      {repos?.be && (
        <RepoLink
          link={repos?.be}
          text="Backend Repo"
          title={title}
          action="project_repo_link_click"
        />
      )}
    </div>
  );
};
