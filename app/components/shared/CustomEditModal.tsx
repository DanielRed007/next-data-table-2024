import { FC, SetStateAction, useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { fetchInfo, updateInfo } from "@/app/redux/infoSlice";
import { AppDispatch } from "@/app/redux/store";

interface Props {
  isEditModalOpen: boolean;
  openModal?: (value: SetStateAction<boolean>) => void;
  closeModal: () => void;
  record: any;
}

export const CustomEditModal: FC<Props> = ({
  closeModal,
  isEditModalOpen,
  record,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState(record);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    dispatch(updateInfo(formData));
    closeModal();
  };

  return (
    <>
      <Dialog
        open={isEditModalOpen}
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
                Edit Record
              </DialogTitle>
              <form onSubmit={handleSubmit} className='mt-2'>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-black dark:text-black'>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    className='w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-black dark:text-black'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    className='w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-black dark:text-black'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-black dark:text-black'>
                    Age
                  </label>
                  <input
                    type='number'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                    className='w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-black dark:text-black'>
                    Created At
                  </label>
                  <input
                    type='text'
                    name='createdAt'
                    value={formData.createdAt}
                    onChange={handleChange}
                    readOnly
                    className='w-full rounded-md border border-gray-300 p-2 bg-gray-100 cursor-not-allowed'
                  />
                </div>
                <div className='mt-4'>
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
                    Update
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
