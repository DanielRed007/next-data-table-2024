import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { Fragment } from "react";

export const CustomDropdown = () => {
  return (
    <Fragment>
      <Menu>
        <MenuButton className='inline-flex items-center gap-2 rounded-md mt-1 bg-transparent text-sm/6 font-semibold text-white shadow-white focus:outline-none open:bg-gray-700 focus:outline-1 focus:outline-white'>
          <EllipsisHorizontalIcon className='size-5 fill-blue-700' />
        </MenuButton>

        <MenuItems
          transition
          anchor='bottom end'
          className='origin-top-right rounded-xl border border-white bg-blue-700 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none closed:scale-95 closed:opacity-0'
        >
          <MenuItem>
            <button className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-blue-500'>
              <PencilIcon className='size-4 fill-white' />
              Edit
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-blue-500'>
              <Square2StackIcon className='size-4 fill-white' />
              Duplicate
            </button>
          </MenuItem>
          <div className='my-1 h-px bg-blue-500' />
          <MenuItem>
            <button className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-blue-500'>
              <ArchiveBoxXMarkIcon className='size-4 fill-white' />
              Archive
            </button>
          </MenuItem>
          <MenuItem>
            <button className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-blue-500'>
              <TrashIcon className='size-4 fill-white' />
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </Fragment>
  );
};
