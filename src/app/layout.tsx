import type { Metadata } from "next";
import { ClientLayout } from "./clientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva Joshi",
  description: "Portfolio of Atharva Joshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-slate-800 m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
