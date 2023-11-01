const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  red = false,
  grey = false,
}) => {
  let buttonClasses = `bg-blue-dark flex flex-row justify-center items-center w-full rounded-full border border-none 
  cursor-pointer text-12 font-bold px-2 py-2 text-white-light hover:bg-blue-darker`;

  if (red) {
    buttonClasses += ` bg-red-middle hover:bg-red-middle`;
  }

  if (disabled) {
    buttonClasses += ` cursor-not-allowed bg-blue-disabled text-disabled-text hover:bg-blue-disabled`;
  }

  if (grey) {
    buttonClasses += ` bg-grey-dark text-white-light hover:bg-grey-darker`;
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  red?: boolean;
  grey?: boolean;
}

export default Button;
