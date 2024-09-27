export const Description = ({ description }: { description: string[] }) => {
  return (
    <ul className="flex flex-col gap-2 text-justify">
      {description.map((item) => (
        <li className="list-image-none text-sm md:text-base list-none">
          {item}
        </li>
      ))}
    </ul>
  );
};
