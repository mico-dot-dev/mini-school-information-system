import React from "react";
import { Column } from "@/lib/model/table-config";

type Props<T> = {
  columns: Column<T>[];
  data: T[];
};

function DataTable<T>({ columns, data }: Props<T>) {
  return (
    <div className="mb-10 rounded-xl overflow-hidden border border-tableBodyOutline">
      <table className="w-full text-left overflow-x-auto">
        <thead className="bg-tableHead border border-tableHeadOutline">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="px-4 py-2">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white ">
          {data.map((row, idx) => (
            <tr key={idx} className="border-t">
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-2">
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
