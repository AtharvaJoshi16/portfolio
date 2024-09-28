import { Button } from "@/components/ui/button";
import { IconLink } from "@tabler/icons-react";
import Link from "next/link";

export const Title = ({ title, link }: { title: string; link?: string }) => {
  return link ? (
    <Link href={link} target="_blank">
      <div className="flex items-center gap-2">
        <Button
          variant="link"
          className="text-indigo-300 font-semibold text-base p-0"
        >
          {title}
        </Button>
        <IconLink className="text-indigo-300" width={18} />
      </div>
    </Link>
  ) : (
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-indigo-100">{title}</h3>
    </div>
  );
};
