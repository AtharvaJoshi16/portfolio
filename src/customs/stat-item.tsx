export const StatItem = ({
  number,
  text,
}: {
  number: number;
  text: string;
}) => {
  return (
    <p className="w-full text-white flex justify-between md:justify-center xl:justify-start gap-3 items-center">
      <span className="text-2xl md:text-5xl font-bold">{number}</span>
      <span className="text-sm md:text-base text-wrap max-w-30 text-end">
        {text}
      </span>
    </p>
  );
};
