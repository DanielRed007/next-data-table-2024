interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CustomCheckbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className='flex items-center'>
      <input
        id={id}
        type='checkbox'
        className='h-5 w-5 text-blue-600 border-gray-300 rounded-lg focus:ring-blue-500'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label && (
        <label htmlFor={id} className='ml-2 block text-sm text-gray-900'>
          {label}
        </label>
      )}
    </div>
  );
};

export default CustomCheckbox;
