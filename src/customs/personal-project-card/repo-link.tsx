import { Button } from "@/components/ui/button";
import { useResponsive } from "@/hooks/useResponsive";
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
  const { isMobile } = useResponsive();
  return (
    <Link href={link} target="_blank" onClick={(e) => e.stopPropagation()}>
      <Button
        variant="link"
        className="text-indigo-300 text-sm md:text-base p-0 h-auto flex items-center gap-2"
      >
        {text}
        {icon ?? <IconLink width={isMobile ? 14 : 18} />}
      </Button>
    </Link>
  );
};
