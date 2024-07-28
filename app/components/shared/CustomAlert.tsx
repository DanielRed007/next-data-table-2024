import { FC } from "react";

interface Props {
  textContent: string;
}

export const CustomAlert: FC<Props> = ({ textContent }) => {
  return (
    <div
      className='flex items-center p-2 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800'
      role='alert'
    >
      <div>{textContent}</div>
    </div>
  );
};
