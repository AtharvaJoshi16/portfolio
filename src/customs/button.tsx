import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "px-8 py-2 tracking-wide rounded-md bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-semibold focus:ring-2 focus:ring-indigo-400 hover:shadow-xl transition duration-200 disabled:opacity-60",
        props?.className
      )}
    />
  );
};
