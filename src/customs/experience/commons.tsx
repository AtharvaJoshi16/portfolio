import { IconMapPin } from "@tabler/icons-react";

export const Container = ({
  role,
  org,
  logo,
  loc,
  subRole,
  description,
}: {
  logo?: JSX.Element;
  role: string;
  org: string;
  loc: string;
  subRole?: string;
  description: string;
}) => {
  return (
    <div className="text-slate-50 flex gap-4 sm:gap-8">
      <div className="flex h-fit w-full basis-56">{logo}</div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl lg:text-3xl">{role}</h3>
        {subRole && (
          <h3 className="font-semibold text-md lg:text-lg ml-2 lg:ml-8">{`(${subRole})`}</h3>
        )}
        <h3 className="font-semibold flex gap-2 items-end md:items-start ml-2 lg:ml-8">
          <span className="text-base lg:text-lg">at</span>
          <span className="text-xl lg:text-2xl text-indigo-400">{org}</span>
        </h3>
        <div className="flex gap-2 items-center">
          <IconMapPin className="text-indigo-400" />
          {loc}
        </div>
        <p className="text-justify break-all">{description}</p>
      </div>
    </div>
  );
};
