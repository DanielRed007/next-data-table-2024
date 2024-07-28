import { Fragment } from "react";
import { CustomButton } from "../shared/CustomButton";
import {
  AdjustmentsHorizontalIcon,
  CloudArrowDownIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { CustomAlert } from "../shared/CustomAlert";

export const TableNavbar = () => {
  return (
    <Fragment>
      <nav className='bg-white dark:bg-gray-800 p-4 flex justify-between items-center'>
        <div className=''>
          <div className='flex flex-column items-center'>
            <h1 className='text-white text-xl mr-3'>Record Data Registry</h1>
            <CustomAlert textContent='Data Entry' />
          </div>
          <p className='text-gray-400 text-sm mt-3'>
            Explore the records by yourself
          </p>
        </div>

        <div className='flex space-x-4' data-testid='navbar-button-section'>
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
