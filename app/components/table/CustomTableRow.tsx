import React, { FC } from "react";
import CustomCheckbox from "../shared/CustomCheckbox";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

interface Props {
  data: Array<{ [key: string]: any }>;
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
        <tr key={rowIndex} className='hover:bg-gray-50'>
          <td key={"column.accessor"} className='p-4 border-b border-gray-200'>
            <CustomCheckbox
              id='main-selector'
              checked={rowChecked}
              onChange={onChange}
            />
          </td>
          {columns.map((column) => (
            <td key={column.accessor} className='p-4 border-b border-gray-200'>
              {row[column.accessor]}
            </td>
          ))}
          <td key={"column.options"} className='p-4 border-b border-gray-200'>
            <EllipsisHorizontalIcon className='size-4 text-blue-700' />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
