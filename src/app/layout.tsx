import GoogleAnalytics from "@/customs/google-analytics";
import type { Metadata } from "next";
import { Suspense } from "react";
import { ClientLayout } from "./clientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva Joshi",
  icons: {
    icon: "favicon.jpg",
  },
  description: "Portfolio of Atharva Joshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={null}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!} />
      </Suspense>
      <body
        className={`no-scrollbar antialiased bg-slate-800 m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
