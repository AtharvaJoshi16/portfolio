import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Atharva's Portfolio - Admin page",
};
export default function UploadPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[85vh] sm:h-[82vh]">{children}</div>;
}
