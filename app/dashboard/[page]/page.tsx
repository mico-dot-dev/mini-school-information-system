import { notFound } from "next/navigation";
import React from "react";
import DashboardTable from "@/app/component/DashboardTable";

interface DashboardPageProps {
  params: { page: string };
}

export default async function MainPage({ params }: DashboardPageProps) {
  const { page } = await params;
  const allowedPages = new Set(["Courses", "Users", "Subjects", "Students"]);
  if (!allowedPages.has(page)) notFound();

  return (
    <div className="flex flex-col w-full h-full">
      <p className="text-4xl mb-10">{page}</p>
      <DashboardTable page={page} />
    </div>
  );
}
