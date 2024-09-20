import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-md border border-black bg-green-600 text-slate-50 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
    />
  );
};
