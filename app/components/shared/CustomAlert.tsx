import { FC } from "react";

interface Props {
  textContent: string;
}

export const CustomAlert: FC<Props> = ({ textContent }) => {
  // bg-violet-800 dark:bg-lime-900
  return (
    <div
      className='flex items-center p-2 text-sm bg-violet-400 text-violet-900 border-violet-300  dark:bg-lime-400 dark:text-lime-900 dark:border-lime-600 border-2 rounded-lg'
      role='alert'
    >
      <div>{textContent}</div>
    </div>
  );
};
