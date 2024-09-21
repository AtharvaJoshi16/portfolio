"use client";
import { Card } from "./card";
import { TechCards } from "./tech-cards";

export interface Technology {
  title: string;
  icon: JSX.Element;
}

export interface ProjectCardProps {
  title: string;
  description: string[];
  technologies: Technology[];
  role?: string;
  duration?: string;
  link?: string;
  repos?: {
    fe?: string;
    be?: string;
  };
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  role,
  duration,
}: ProjectCardProps) => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h3 className="flex items-end gap-2 font-semibold text-2xl text-indigo-200">
          <span>{title}</span>
          <span className="text-lg font-normal">({duration})</span>
        </h3>
        <h3 className="font-semibold text-lg text-slate-50 ml-5">{role}</h3>
        <ul className="flex flex-col gap-2 px-10">
          {description.map((des) => (
            <li className="text-slate-50 text-justify">{des}</li>
          ))}
        </ul>
        <TechCards technologies={technologies} />
      </div>
    </Card>
  );
};
