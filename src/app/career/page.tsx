"use client";
import { Tabs } from "@/components/ui/tabs";
import { tabs } from "@/constants/all-tabs";

export default function ExperiencePage() {
  return (
    <Tabs
      containerClassName="p-1"
      tabClassName="text-slate-50"
      activeTabClassName="bg-slate-500 font-semibold bg-opacity-50"
      tabs={tabs}
    />
  );
}
