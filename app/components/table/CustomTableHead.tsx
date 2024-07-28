import { FC } from "react";
import CustomCheckbox from "../shared/CustomCheckbox";

interface Props {
  columns: Array<{ header: string; accessor: string }>;
  mainSelected: boolean;
  onChange: () => void;
}

export const CustomTableHead: FC<Props> = ({
  columns,
  mainSelected,
  onChange,
}) => {
  return (
    <thead>
      <tr>
        <th
          key={"column-selector"}
          className='p-4 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider'
        >
          <CustomCheckbox
            id='main-selector'
            checked={mainSelected}
            onChange={onChange}
          />
        </th>
        {columns.map((column) => (
          <th
            key={column.accessor}
            className='p-4 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider'
          >
            {column.header}
          </th>
        ))}
        <th
          key={"column-selector"}
          className='p-4 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider'
        ></th>
      </tr>
    </thead>
  );
};
