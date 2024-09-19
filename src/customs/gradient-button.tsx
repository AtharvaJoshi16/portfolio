import { GradientButtonProps } from "@/interface/GradientButtonProps";

export const GradientButton = ({
  text,
  icon,
  className,
  ...props
}: GradientButtonProps) => {
  const isIconButton = !text && !!icon;
  return (
    <button
      className={`${className} ${
        isIconButton ? "w-12" : "w-fit"
      } relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 z-20`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`${
          isIconButton ? "justify-center" : "justify-between"
        } inline-flex h-full w-full cursor-pointer items-center gap-[10px] rounded-full bg-slate-800 px-3 py-1 text-md font-medium tracking-wider text-white backdrop-blur-3xl`}
      >
        {text}
        {icon}
      </span>
    </button>
  );
};
