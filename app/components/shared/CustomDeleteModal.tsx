import { FC, SetStateAction, useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { deleteInfo, fetchInfo, updateInfo } from "@/app/redux/infoSlice";
import { AppDispatch } from "@/app/redux/store";

interface Props {
  isDeleteModalOpen: boolean;
  openModal?: (value: SetStateAction<boolean>) => void;
  closeModal: () => void;
  record: any;
}

export const CustomDeleteModal: FC<Props> = ({
  closeModal,
  isDeleteModalOpen,
  record,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    dispatch(deleteInfo(record._id));
    closeModal();
  };

  return (
    <>
      <Dialog
        open={isDeleteModalOpen}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={closeModal}
      >
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-md rounded-xl bg-violet-300 dark:bg-lime-300 p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            >
              <DialogTitle
                as='h3'
                className='text-base/7 font-medium text-black dark:text-black'
              >
                Delete Record
              </DialogTitle>

              <form onSubmit={handleSubmit} className='mt-2'>
                <div className='mt-4'>
                  <h1 className='mb-5'>Delete this record?</h1>
                  <Button
                    className='inline-flex items-center gap-2 mr-4 rounded-md bg-violet-700 dark:bg-lime-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-violet-600 dark:data-[hover]:bg-lime-600 data-[focus]:outline-1 data-[focus]:outline-black data-[open]:bg-violet-700 dark:data-[open]:bg-lime-700'
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                  <Button
                    type='submit'
                    className='inline-flex items-center gap-2 rounded-md bg-violet-700 dark:bg-lime-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-violet-600 dark:data-[hover]:bg-lime-600 data-[focus]:outline-1 data-[focus]:outline-black data-[open]:bg-violet-700 dark:data-[open]:bg-lime-700'
                  >
                    Delete
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
