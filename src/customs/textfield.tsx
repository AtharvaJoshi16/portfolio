import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LabelProps } from "@radix-ui/react-label";
import React from "react";

export interface TextfieldProps extends React.ComponentProps<typeof Input> {
  label?: LabelProps;
  endIcon?: JSX.Element;
}

export const Textfield = ({ label, endIcon, id, ...props }: TextfieldProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <Label
          {...label}
          htmlFor={id}
          className="font-semibold text-slate-100 ml-1"
        />
      )}
      <div className="relative">
        <Input {...props} id={id} />
        {endIcon && (
          <span className={"absolute my-auto inset-y-0 right-3 h-fit w-fit"}>
            {endIcon}
          </span>
        )}
      </div>
    </div>
  );
};
