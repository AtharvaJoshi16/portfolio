import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atharva Joshi - About me",
  description: "Atharva's Portfolio - About Me page",
};
export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
