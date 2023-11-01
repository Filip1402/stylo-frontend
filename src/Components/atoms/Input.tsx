import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

interface InputProps {
  type?: HTMLInputTypeAttribute;
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type = "text",
  label = "",
  value,
  name,
  placeholder,
  error = false,
  disabled = false,
  onChange,
}) => {
  let inputClasses = `border-2 border-grey-middle px-4 bg-white-light w-full rounded-md h-12 font-semibold focus:outline-none text-grey-dark`;

  if (disabled) {
    inputClasses += `cursor-not-allowed bg-slate-200 text-disabled-text hover:bg-slate-200 border-slate-200 `;
  }

  return (
    <div>
      <label htmlFor={label} className="font-semibold text-lg text-grey-dark">
        {label}
      </label>
      <input
        className={inputClasses}
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && (
        <p className=" text-red-500 font-medium text-center md:text-left rounded-md px-4">
          {label} ne može biti prazno!
        </p>
      )}
    </div>
  );
};

export default Input;
