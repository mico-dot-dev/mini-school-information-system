import React from "react";
import { notFound } from "next/navigation";
import { Page } from "@/lib/enum/page";
import DashboardTable from "@/app/component/(table)/DashboardTable";
import { TableKey } from "@/lib/table/table-config";

interface DashboardPageProps {
  params: { page: string };
}

export default async function MainPage({ params }: DashboardPageProps) {
  const { page } = await params;
  //Checks whether the slug sent a page name that exists
  const isValidPage =
    typeof page === "string" && Object.values(Page).includes(page as Page);
  if (!isValidPage) notFound();

  return (
    <div className="flex flex-col w-full h-full">
      <p className="text-4xl mb-10">{page}</p>
      <DashboardTable page={page as TableKey} />
    </div>
  );
}
