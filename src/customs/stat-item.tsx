export const StatItem = ({
  number,
  text,
}: {
  number: number;
  text: string;
}) => {
  return (
    <p className="w-full text-white flex gap-3 items-center">
      <span className="text-5xl font-bold">{number}</span>
      <span className="text-wrap max-w-30">{text}</span>
    </p>
  );
};
