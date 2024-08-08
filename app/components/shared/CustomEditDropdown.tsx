import { FC, Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

interface Props {
  modalEditHandler: () => void;
}

export const CustomDropdown: FC<Props> = ({ modalEditHandler }) => {
  return (
    <Fragment>
      <Menu>
        <MenuButton className='inline-flex items-center gap-2 rounded-md mt-1 bg-transparent text-sm/6 font-semibold text-white shadow-white focus:outline-none open:bg-gray-700 focus:outline-1 focus:outline-white'>
          <EllipsisHorizontalIcon className='size-5 fill-violet-700 dark:fill-lime-700' />
        </MenuButton>

        <MenuItems
          transition
          anchor='bottom end'
          className='origin-top-right rounded-xl border border-white bg-violet-700 dark:bg-lime-700 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none closed:scale-95 closed:opacity-0'
        >
          <MenuItem>
            <button
              onClick={modalEditHandler}
              className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-violet-500 dark:focus:bg-lime-700'
            >
              <PencilIcon className='size-4 fill-white' />
              Edit
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-violet-500 dark:focus:bg-lime-700'>
              <TrashIcon className='size-4 fill-white' />
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </Fragment>
  );
};
