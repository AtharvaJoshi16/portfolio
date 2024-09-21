import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Title = ({ title, link }: { title: string; link?: string }) => {
  return link ? (
    <Link href={link} target="_blank">
      <Button
        variant="link"
        className="text-indigo-300 font-semibold text-base p-0"
      >
        {title}
      </Button>
    </Link>
  ) : (
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-indigo-100">{title}</h3>
    </div>
  );
};
