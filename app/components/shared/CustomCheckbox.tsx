import { Checkbox } from "@headlessui/react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CustomCheckbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
}) => {
  return (
    <div className='flex items-center'>
      <Checkbox
        checked={checked}
        onChange={onChange}
        className='group block size-5 rounded-md border bg-white data-[checked]:bg-blue-500'
      >
        <svg
          className='stroke-white opacity-0 group-data-[checked]:opacity-100'
          viewBox='0 0 14 14'
          fill='none'
        >
          <path
            d='M3 8L6 11L11 3.5'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Checkbox>
    </div>
  );
};

export default CustomCheckbox;
