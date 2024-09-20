"use client";
import { contacts } from "@/constants/contact";
import { useToast } from "@/hooks/use-toast";
import { copyText } from "@/lib/copyText";
import { IconClipboardCheck, IconCopy } from "@tabler/icons-react";
import { Homepage } from "../constants/data";
import { GradientButton2 } from "./gradient-button-2";
import { Statistics } from "./statistics";
export const Header = () => {
  const { toast } = useToast();
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-full flex items-center gap-2">
        <h2 className="text-slate-50 text-4xl font-bold">
          {Homepage.NAME}
          <span className="text-indigo-400">.</span>
        </h2>
        <div className="flex flex-col gap-4">
          <GradientButton2
            onClick={() => {
              copyText(contacts.email);
              toast({
                duration: 2000,
                variant: "transparent",
                className: "p-2 w-fit",
                description: (
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold">Email copied to clipboard</h3>
                    <IconClipboardCheck
                      width={18}
                      height={18}
                      className="text-indigo-300"
                    />
                  </div>
                ),
              });
            }}
            title={contacts.email}
            text={contacts.email}
            icon={
              <IconCopy width={16} height={16} className="text-indigo-300" />
            }
          />
          <GradientButton2
            onClick={() => {
              copyText(contacts.phone);
              toast({
                duration: 2000,
                variant: "transparent",
                className: "p-2 w-fit left-auto",
                description: (
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold">Phone copied to clipboard</h3>
                    <IconClipboardCheck
                      width={18}
                      height={18}
                      className="text-indigo-300"
                    />
                  </div>
                ),
              });
            }}
            text={contacts.phone}
            title={contacts.phone}
            icon={
              <IconCopy width={16} height={16} className="text-indigo-300" />
            }
          />
        </div>
      </div>
      <Statistics />
    </div>
  );
};
