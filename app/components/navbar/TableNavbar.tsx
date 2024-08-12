"use client";

import { Fragment, useEffect, useState } from "react";
import { CustomButton } from "../shared/CustomButton";
import {
  AdjustmentsHorizontalIcon,
  CloudArrowDownIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { CustomAlert } from "../shared/CustomAlert";
import { CustomSwitch } from "../shared/CustomSwitch";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { toggleTheme } from "../../redux/themeSlice";
import { CustomAddModal } from "../shared/CustomAddModal";

export const TableNavbar = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Effect to add/remove dark class on body
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const openModal = () => {
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <Fragment>
      <nav className='bg-violet-800 dark:bg-lime-900 p-4 flex justify-between items-center'>
        <div className=''>
          <div className='flex flex-column items-center'>
            <h1 className='text-white text-bold text-xl mr-3'>
              Record Data Registry
            </h1>
            <CustomAlert textContent='Data Entry' />
          </div>
          <p className='text-gray-200 text-bold text-sm mt-3'>
            Explore the records by yourself
          </p>
        </div>

        <div className='flex space-x-4' data-testid='navbar-button-section'>
          <CustomSwitch
            enabled={theme === "dark"}
            toggleSwitch={handleToggleTheme}
          />
          <CustomButton
            textColor='white'
            fontType='bold'
            buttonText='Export'
            outline={true}
            icon={
              <CloudArrowDownIcon className='size-6 text-violet-200 dark:text-lime-300' />
            }
          />
          <CustomButton
            buttonColor='blue'
            textColor='white'
            fontType='bold'
            buttonText='Add new record'
            icon={
              <PlusIcon className='size-6 text-violet-200 dark:text-lime-300' />
            }
            onClick={openModal}
          />
        </div>
      </nav>
      {isAddModalOpen && (
        <CustomAddModal
          isAddModalOpen={isAddModalOpen}
          closeModal={closeModal}
        />
      )}
    </Fragment>
  );
};
