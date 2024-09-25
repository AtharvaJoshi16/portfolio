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
      <body className={`antialiased bg-slate-800 mx-4 xl:mx-20`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
