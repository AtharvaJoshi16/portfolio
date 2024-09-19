export const BadgeText = ({ text, bold }: { text: string; bold?: boolean }) => {
  return <h3 className="font-semibold text-slate-50">{text}</h3>;
};
