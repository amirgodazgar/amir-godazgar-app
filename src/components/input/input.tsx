import React, { BaseSyntheticEvent } from "react";

type Props = {
  label: string;
  register: any;
  disabled?: boolean;
  onChange?: (e: BaseSyntheticEvent | any) => BaseSyntheticEvent | any;
  type?: React.HTMLInputTypeAttribute;
};

export const Input = (props: Props) => {
  const { label, register, onChange, disabled, type } = props;

  return (
    <div>
      <label className="mb-1 block text-black font-bold">{label}</label>
      <input
        {...register}
        type={type ? type : "text"}
        disabled={disabled}
        onChange={onChange}
        placeholder={label}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
      />
    </div>
  );
};
