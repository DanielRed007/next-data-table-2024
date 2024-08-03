import React, { FC } from "react";
import CustomCheckbox from "../shared/CustomCheckbox";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import { CustomDropdown } from "../shared/CustomDropdown";
import { Row } from "@/app/types/row";

interface Props {
  data: Row[];
  columns: Array<{ header: string; accessor: string }>;
  rowChecked: boolean;
  onChange: () => void;
}

export const CustomTableRow: FC<Props> = ({
  data,
  columns,
  rowChecked,
  onChange,
}) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className='dark:hover:bg-lime-200 hover:bg-violet-200'
        >
          <td key={"column.accessor"} className='p-4 border-b'>
            <CustomCheckbox
              id='main-selector'
              checked={rowChecked}
              onChange={onChange}
            />
          </td>
          {columns.map((column) => (
            <td key={column.accessor} className='p-4 border-b'>
              {row[column.accessor].value}
            </td>
          ))}
          <td key={"column.options"} className='p-6 border-b'>
            <CustomDropdown />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
