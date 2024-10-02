import { GradientButtonProps } from "@/interface/GradientButtonProps";

export const ShimmerButton = ({
  text,
  icon,
  ...props
}: GradientButtonProps) => {
  return (
    // Button code
    <button
      {...props}
      className="flex gap-4 z-20 relative h-12 animate-shimmer items-center justify-center rounded-full border border-indigo-700 bg-[linear-gradient(110deg,#312e81,45%,#818cf8,55%,#312e81)] bg-[length:200%_100%] px-6 text-indigo-100 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 tracking-wider focus:ring-offset-slate-50"
    >
      {text}
      {icon}
    </button>
  );
};
