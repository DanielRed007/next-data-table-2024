import { Fragment } from "react";
import { CustomButton } from "./CustomButton";

export const TableNavbar = () => {
  return (
    <Fragment>
      <nav className='bg-gray-800 p-4 flex justify-between items-center'>
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
            buttonColor='blue'
            textColor='white'
            fontType='bold'
            buttonText='Export'
          />
          <CustomButton
            buttonColor='red'
            textColor='white'
            fontType='bold'
            buttonText='delete'
          />
          <CustomButton
            buttonColor='green'
            textColor='white'
            fontType='bold'
            buttonText='filters'
          />
          <CustomButton
            buttonColor='yellow'
            textColor='white'
            fontType='bold'
            buttonText='Add Record'
          />
        </div>
      </nav>
    </Fragment>
  );
};
