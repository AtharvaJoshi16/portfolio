"use client";
import fireIcon from "@/assets/flame-icon.png";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { hoverCardItems, projects } from "@/constants/projects";
import { ProjectCard } from "@/customs/project-card";
import Image from "next/image";

export default function ProjectsPage() {
  const Fire = () => (
    <Image
      className="w-[16px] md:w-[24px]"
      src={fireIcon}
      width={24}
      height={24}
      alt="fire-icon"
    />
  );
  return (
    <div className="flex flex-col gap-[15px] lg:gap-[30px]">
      <div className="flex items-center gap-4  mt-8 mx-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-300">
          Projects
        </h3>
        {[1, 2].map(() => (
          <Fire />
        ))}
      </div>
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
      <div className="mt-8">
        <div className="flex items-center gap-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-300">
            Personal Projects
          </h3>
          {[1, 2].map(() => (
            <Fire />
          ))}
        </div>
        <HoverEffect items={hoverCardItems} />
      </div>
    </div>
  );
}
