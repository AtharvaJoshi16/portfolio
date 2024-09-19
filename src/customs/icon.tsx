import { Tooltip } from "@/components/ui/tooltip";
import React, { useState } from "react";

export const Icon = ({
  children,
  tooltipText,
  tooltipClasses,
}: {
  children: React.ReactNode;
  tooltipText: string;
  tooltipClasses?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <Tooltip className={tooltipClasses} title={tooltipText} />}
      {children}
    </div>
  );
};
