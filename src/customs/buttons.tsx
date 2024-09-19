import { Homepage } from "@/constants/data";
import { smLinks } from "@/constants/sm-links";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import { GradientButton } from "./gradient-button";

export const Buttons = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href={Homepage.RESUME_LINK} target="_blank">
        <GradientButton text="DOWNLOAD RESUME" icon={<IconDownload />} />
      </Link>
      {smLinks.map((item) => (
        <Link href={item.href} target="_blank">
          <GradientButton icon={item.icon} title={item.name} />
        </Link>
      ))}
    </div>
  );
};
