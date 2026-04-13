import React, { useEffect, useState } from "react";

export function useTableData(page: string) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    async function fetchTableData() {
      try {
        const res = await fetch(`/api/${page}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setTableData(await data.data);
      } catch (err) {
        console.error("Error fetching table data: ", err);
      }
    }
    fetchTableData();
  }, [page]);
  return tableData;
}
