import { Fragment } from "react";
import { CustomButton } from "./CustomButton";
import {
  AdjustmentsHorizontalIcon,
  BeakerIcon,
  CloudArrowDownIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

export const TableNavbar = () => {
  return (
    <Fragment>
      <nav className='bg-white dark:bg-gray-800 p-4 flex justify-between items-center'>
        <div className='flex flex-col md:flex-row items-start md:items-center'>
          <div className='flex space-x-4'>
            <h1 className='text-white text-xl'>Título 1</h1>
            <h1 className='text-white text-xl'>Título 2</h1>
          </div>
          <p className='text-gray-400 text-sm mt-2 md:mt-0'>
            Texto adicional debajo de los títulos
          </p>
        </div>

        <div className='flex space-x-4'>
          <CustomButton
            textColor='white'
            fontType='bold'
            buttonText='Delete'
            icon={<TrashIcon className='size-6 text-blue-200' />}
          />
          <CustomButton
            textColor='white'
            fontType='bold'
            buttonText='Filters'
            icon={
              <AdjustmentsHorizontalIcon className='size-6 text-blue-200' />
            }
          />
          <CustomButton
            textColor='white'
            fontType='bold'
            buttonText='Export'
            outline={true}
            icon={<CloudArrowDownIcon className='size-6 text-blue-200' />}
          />
          <CustomButton
            buttonColor='blue'
            textColor='white'
            fontType='bold'
            buttonText='Add new record'
            icon={<PlusIcon className='size-6 text-blue-200' />}
          />
        </div>
      </nav>
    </Fragment>
  );
};
