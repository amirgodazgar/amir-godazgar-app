import { BaseSyntheticEvent } from "react";

type Props = {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: BaseSyntheticEvent | any) => BaseSyntheticEvent | any;
  disabled?: boolean;
};

export const Button = (props: Props) => {
  const { label, onClick, disabled, type } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="w-full inline-flex items-center justify-center gap-2.5 rounded-md bg-slate-800 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      <span>
        <svg
          className="fill-current"
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 256 256"
          id="Flat"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm49.53125,85.78906-58.67187,56a8.02441,8.02441,0,0,1-11.0625,0l-29.32813-28a8.00675,8.00675,0,0,1,11.0625-11.57812l23.79687,22.72656,53.14063-50.72656a8.00675,8.00675,0,0,1,11.0625,11.57812Z" />
        </svg>
      </span>
      {label}
    </button>
  );
};
