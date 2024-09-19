import Image from "next/image";
export const DetailsCard = ({
  title,
  board,
  image,
  percentage,
  cgpa,
  passoutYear,
  university,
  stream,
}: {
  title?: string;
  board?: string;
  image?: any;
  passoutYear?: string;
  percentage?: string;
  cgpa?: string;
  university?: string;
  stream?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 text-slate-50">
      <h4 className="font-semibold text-xl text-center">{title}</h4>
      <h4 className="font-semibold text-2xl text-indigo-300 text-center">
        {passoutYear}
      </h4>
      <div className="bg-slate-50 w-full h-full p-2 rounded-md">
        <Image
          className="object-cover rounded-md m-auto"
          src={image}
          width={80}
          height={80}
          alt={title!}
        />
      </div>
      <div className="flex flex-col gap-2">
        {board && <h4>{board}</h4>}
        {university && <h4>{university}</h4>}
        {stream && <h4>{stream}</h4>}
        {percentage && <h4 className="font-semibold">Score: {percentage}</h4>}
        {cgpa && <h4 className="font-semibold">Score: {cgpa} CGPA</h4>}
      </div>
    </div>
  );
};
