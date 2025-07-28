import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full  rounded-md border-2 border-input/30 bg-slate-800 px-3 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-indigo-600 file:rounded-md file:bg-opacity-70 file:text-sm file:font-semibold file:text-indigo-100  focus-visible:ring-[3px] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/60 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
