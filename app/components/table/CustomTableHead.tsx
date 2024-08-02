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
          className='p-4 bg-violet-400 dark:bg-lime-400 text-left text-sm font-semibold text-white uppercase rounded-tl-lg'
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
            className='p-4 bg-violet-400 dark:bg-lime-400 text-left text-sm font-semibold text-white uppercase'
          >
            {column.header}
          </th>
        ))}
        <th
          key={"column-options"}
          className='p-4 bg-violet-400 dark:bg-lime-400 text-left text-sm font-semibold text-white uppercase rounded-tr-lg'
        ></th>
      </tr>
    </thead>
  );
};
