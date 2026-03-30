"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { has_role_permission } from "@/lib/auth/rbac";
import { Permission } from "@/lib/auth/permissions";
import { Role } from "@/lib/enum/role";

function DashboardTable({ page }: { page: string }) {
  const router = useRouter();
  let permissionKey = page.toLowerCase();
  if (permissionKey !== "audit") permissionKey = permissionKey.slice(0, -1);
  permissionKey += "_create";

  const insertRequiredPermission =
    Permission[permissionKey as keyof typeof Permission];

  //Tempory, flow would be changed to a more secure api connection after some time
  const userRole = Role.SuperAdmin;
  const [showModal, setShowModal] = useState(false);

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
            <button
              className=" bg-button mr-10 rounded-xl p-3 cursor-pointer "
              onClick={() => setShowModal(true)}
            >
              <FaFilter className="" />
            </button>
            {/* Checks the users role to see if they have permission to insert data on the given page */}
            {has_role_permission(userRole, insertRequiredPermission) && (
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
        <div className="mb-10 rounded-xl overflow-hidden border border-tableBodyOutline">
          <table className="w-full overflow-x-auto text-left ">
            <thead className="bg-tableHead border border-tableHeadOutline ">
              <tr>
                <th scope="col" className="px-5 py-3 w-30">
                  Email
                </th>
                <th scope="col" className="px-5 py-3">
                  Role
                </th>
                <th scope="col" className="px-5 py-3">
                  Added At
                </th>
                <th scope="col" className="px-5 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white ">
              <tr>
                <th scope="col" className="px-5 py-3">
                  belavista@gmail.com
                </th>
                <td scope="col" className="px-5 py-3">
                  Admin
                </td>
                <td scope="col" className="px-5 py-3">
                  September 09, 2000
                </td>
                <td scope="col" className="px-5 py-3">
                  Icon
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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

      {/* Modal for the sorting, dynamically changes content based on the current page */}
      <Dialog open={showModal} onClose={setShowModal}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        ></DialogBackdrop>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative overflow-y-scroll rounded-lg bg-white text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <p>Sort</p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default DashboardTable;
