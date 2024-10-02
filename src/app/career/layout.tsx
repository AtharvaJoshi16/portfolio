import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atharva Joshi - Career",
  description: "Atharva's Portfolio - Career page",
};
export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[85vh] sm:h-[82vh]">{children}</div>;
}
