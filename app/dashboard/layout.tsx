import { ReactNode, isValidElement } from "react";
import SideNav from "@/app/component/SideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="flex min-h-screen">
        <SideNav />
        <div className="my-10 w-full mx-15">{children}</div>
      </main>
    </div>
  );
}
