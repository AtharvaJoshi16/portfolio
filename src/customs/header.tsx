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
    <div className="w-full flex flex-col gap-4 xl:gap-0 xl:flex-row xl:items-center xl:justify-between">
      <div className="w-full flex flex-col items-center sm:flex-row gap-2">
        <h2 className="text-slate-50 text-2xl md:text-4xl font-bold">
          {Homepage.NAME}
          <span className="text-indigo-400">.</span>
        </h2>
        <div className="flex flex-col items-center sm:items-start gap-4">
          <GradientButton2
            onClick={() => {
              copyText(contacts.email);
              toast({
                duration: 2000,
                description: (
                  <div className="flex items-center gap-3">
                    <IconClipboardCheck
                      width={21}
                      height={21}
                      className="text-indigo-300"
                    />
                    <h3 className="font-semibold">Email copied to clipboard</h3>
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
                description: (
                  <div className="flex items-center gap-3">
                    <IconClipboardCheck
                      width={21}
                      height={21}
                      className="text-indigo-300"
                    />
                    <h3 className="font-semibold">Phone copied to clipboard</h3>
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
