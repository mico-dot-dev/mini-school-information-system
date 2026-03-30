import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Information System",
  description:
    "A school information system built with Next.js and Tailwind CSS.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-full flex flex-col overflow-y-hidden">
        {children}
      </body>
    </html>
  );
}
