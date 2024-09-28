import { Button } from "@/components/ui/button";
import { IconLink } from "@tabler/icons-react";
import Link from "next/link";

export const RepoLink = ({
  text,
  link,
  icon,
}: {
  text: string;
  link: string;
  icon?: JSX.Element;
}) => {
  return (
    <Link href={link} target="_blank" onClick={(e) => e.stopPropagation()}>
      <Button
        variant="link"
        className="text-indigo-300 p-0 h-auto flex items-center gap-2"
      >
        {text}
        {icon ?? <IconLink width={18} />}
      </Button>
    </Link>
  );
};
