import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function DashboardTable({ page }: { page: string }) {
  return (
    <div className=" h-full min-w-full">
      <header className="flex justify-between w-full mb-10 relative">
        <CiSearch className="absolute text-2xl self-center left-2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search"
          className="border border-inputBorder rounded-xl w-2/5 indent-8 focus:outline-none py-2"
        />
        <div className="flex flex-row text-white ">
          <button className=" bg-button mr-10 rounded-xl p-3">
            <FaFilter className="" />
          </button>
          <button className="bg-button px-15 rounded-xl">Add {page}</button>
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
  );
}

export default DashboardTable;
