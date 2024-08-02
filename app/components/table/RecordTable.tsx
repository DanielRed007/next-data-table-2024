"use client";

import { useState } from "react";
import { CustomTableHead } from "./CustomTableHead";
import { CustomTableRow } from "./CustomTableRow";

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: Array<{ header: string; accessor: string }>;
}

export const RecordTable: React.FC<TableProps> = ({ data, columns }) => {
  const [mainCheckboxSelected, setMainCheckboxSelected] = useState(true);

  const handleMainCheckboxSelector = () => {
    setMainCheckboxSelected(!mainCheckboxSelected);
  };

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-violet-100 dark:bg-lime-100 border'>
        <CustomTableHead
          columns={columns}
          mainSelected={mainCheckboxSelected}
          onChange={handleMainCheckboxSelector}
        />
        <CustomTableRow
          data={data}
          columns={columns}
          rowChecked={mainCheckboxSelected}
          onChange={handleMainCheckboxSelector}
        />
      </table>
    </div>
  );
};
