import { FC, Fragment, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { CustomEditModal } from "./CustomEditModal";
import { CustomDeleteModal } from "./CustomDeleteModal";

interface Props {
  record: any;
  id: string;
}

export const CustomDropdown: FC<Props> = ({ record, id }) => {
  const [isEditModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteRecord = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <Fragment>
      <Menu>
        <MenuButton
          data-testid={id}
          className='inline-flex items-center gap-2 rounded-md mt-1 bg-transparent text-sm/6 font-semibold text-white shadow-white focus:outline-none open:bg-gray-700 focus:outline-1 focus:outline-white'
        >
          <EllipsisHorizontalIcon className='size-5 fill-violet-700 dark:fill-lime-700' />
        </MenuButton>

        <MenuItems
          transition
          anchor='bottom end'
          className='origin-top-right rounded-xl border border-white bg-violet-700 dark:bg-lime-700 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none closed:scale-95 closed:opacity-0'
        >
          <MenuItem>
            <button
              onClick={openModal}
              className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-violet-500 dark:focus:bg-lime-700'
            >
              <PencilIcon className='size-4 fill-white' />
              Edit
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={handleDeleteRecord}
              className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-violet-500 dark:focus:bg-lime-700'
            >
              <TrashIcon className='size-4 fill-white' />
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
      {isEditModalOpen && (
        <CustomEditModal
          isEditModalOpen={isEditModalOpen}
          closeModal={closeModal}
          record={record}
        />
      )}
      {isDeleteModalOpen && (
        <CustomDeleteModal
          record={record}
          closeModal={closeDeleteModal}
          isDeleteModalOpen={isDeleteModalOpen}
        />
      )}
    </Fragment>
  );
};
