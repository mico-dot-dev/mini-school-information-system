"use client";

import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

//Separate this to its own component later
import { has_role_permission } from "@/lib/auth/rbac";
import { Permission } from "@/lib/auth/permissions";
import { Role } from "@/lib/enum/role";

//Table
import { tableConfigModel, TableKey } from "@/lib/table/table-config";
import { useTableData } from "@/lib/hooks/useTableData";
import DataTable from "./DataTable";

function DashboardTable({ page }: { page: TableKey }) {
  const contentPage =
    page.toLowerCase() === "audit"
      ? page.toLowerCase()
      : page.slice(0, -1).toLowerCase();

  const router = useRouter();

  //Used to provide the key for create permission
  const createPermissionKey: Permission =
    Permission[(contentPage + "_create") as keyof typeof Permission];

  const [userRole, setUserRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  //Table
  const dataColumns = tableConfigModel[page];
  const tableData = useTableData(contentPage);
  // runs once when component mounts
  useEffect(() => {
    // asigns the user role on load
    async function fetchUserRole() {
      const res = await fetch("/api/auth/user-role", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setUserRole(data.data))
        .catch((err) => console.error(err));
    }

    Promise.all([fetchUserRole()]).then(() => {
      setLoading(false);
    });
  });

  function AddRedirect() {
    router.push("/dashboard/" + page + "/add");
  }

  return (
    <>
      <div className=" h-full min-w-full">
        <header className="flex justify-between w-full mb-10 relative">
          <CiSearch className="absolute text-2xl self-center left-2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            className="border border-inputBorder rounded-xl w-2/5 indent-8 focus:outline-none py-2"
          />
          <div className="flex flex-row text-white ">
            <button className=" bg-button mr-10 rounded-xl p-3 cursor-pointer ">
              <FaFilter className="" />
            </button>

            {/* Checks the users role to see if they have permission to insert data
            on the given page */}
            {has_role_permission(userRole!, createPermissionKey) && (
              <button
                className="bg-button px-15 rounded-xl cursor-pointer"
                onClick={AddRedirect}
              >
                Add {page}
              </button>
            )}
          </div>
        </header>

        {/* Table */}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-lg">Loading...</p>
          </div>
        ) : dataColumns ? (
          <DataTable columns={dataColumns.columns} data={tableData} />
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-lg">
              No table configuration available for {page}.
            </p>
          </div>
        )}

        {/* Table Slider */}
        <footer className="flex flex-row justify-between text-xl font-normal">
          <div className="flex flex-row gap-5">
            <FaArrowLeftLong />
            <p>Previous</p>
          </div>
          <div>
            <ol className="flex flex-row gap-10">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>...</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ol>
          </div>
          <div className="flex flex-row gap-5 ">
            <p>Next</p>
            <FaArrowRightLong />
          </div>
        </footer>
      </div>
    </>
  );
}

export default DashboardTable;
