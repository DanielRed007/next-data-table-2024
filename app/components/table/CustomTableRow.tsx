import React, { FC, Fragment, useState } from "react";
import CustomCheckbox from "../shared/CustomCheckbox";
import { CustomDropdown } from "../shared/CustomEditDropdown";
import { Row } from "@/app/types/row";
import { CustomEditModal } from "../shared/CustomEditModal";

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
    <Fragment>
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
              <CustomDropdown record={row} />
            </td>
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
};
