import { GradientButtonProps } from "@/interface/GradientButtonProps";

export const GradientButton2 = ({
  text,
  icon,
  ...props
}: GradientButtonProps) => {
  const isIconButton = !text && !!icon;
  return (
    <button
      {...props}
      className="px-2 py-1 w-fit flex items-center gap-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
    >
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent flex items-center justify-center z-20" />
      <span className="relative z-20">{text}</span>
      {icon}
    </button>
  );
};
