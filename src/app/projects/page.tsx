"use client";
import fireIcon from "@/assets/flame-icon.png";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { hoverCardItems, projects } from "@/constants/projects";
import { ProjectCard } from "@/customs/project-card";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex items-center gap-4">
        <h3 className="text-4xl font-bold text-indigo-300">Projects</h3>
        {[1, 2].map(() => (
          <Image src={fireIcon} width={24} height={24} alt="fire-icon" />
        ))}
      </div>
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
      <HoverEffect items={hoverCardItems} />
    </div>
  );
}
