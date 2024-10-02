import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atharva Joshi - Projects",
  description: "Atharva's Portfolio - Projects page",
};
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
