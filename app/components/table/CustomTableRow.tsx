import React, { FC } from "react";
import CustomCheckbox from "../shared/CustomCheckbox";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import { CustomDropdown } from "../shared/CustomDropdown";
import { Row } from "@/app/types/row";

interface Props {
  data: any;
  columns: Array<{ header: string; accessor: keyof Row }>;
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
      {data.map((row: any, rowIndex: number) => (
        <tr
          key={row._id}
          className='dark:hover:bg-lime-200 hover:bg-violet-200'
        >
          <td className='p-4 border-b'>
            <CustomCheckbox
              id={`main-selector-${row._id}`}
              checked={rowChecked}
              onChange={onChange}
            />
          </td>
          {columns.map((column) => (
            <td key={column.accessor} className='p-4 border-b'>
              {row[column.accessor]}
            </td>
          ))}
          <td className='p-6 border-b'>
            <CustomDropdown />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
