"use client";
import { Homepage } from "@/constants/data";
import { smLinks } from "@/constants/sm-links";
import { sendEvent } from "@/lib/analytics";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import { GradientButton } from "./gradient-button";
import { ShimmerButton } from "./shimmer-button";

export const Buttons = () => {
  return (
    <div className="flex items-center justify-center xl:justify-start flex-col md:flex-row gap-5 mt-5">
      <Link href={Homepage.RESUME_LINK} target="_blank">
        <ShimmerButton
          className="w-full md:w-fit"
          text="DOWNLOAD RESUME"
          icon={<IconDownload />}
          onClick={() => {
            sendEvent({
              action: "resume_download",
              label: "Downloaded Resume",
            });
          }}
        />
      </Link>
      <div className="flex items-center gap-5">
        {smLinks.map((item, idx) => (
          <Link href={item.href} target="_blank" key={`${item.name}-${idx}`}>
            <GradientButton
              icon={item.icon}
              title={item.name}
              onClick={() => {
                sendEvent({
                  action: "sm_links_click",
                  label: `Clicked ${item.name}`,
                });
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
