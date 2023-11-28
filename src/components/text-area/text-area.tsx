import { BaseSyntheticEvent } from "react";

type Props = {
  label: string;
  disabled?: boolean;
  rows?: number;
  onChange?: (e: BaseSyntheticEvent | any) => BaseSyntheticEvent | any;
  register?: any;
};

export const TextArea = (props: Props) => {
  const { label, disabled, rows, onChange, register } = props;
  return (
    <div>
      <label className="mb-1 block text-black font-bold">{label}</label>
      <textarea
        {...register}
        onChange={onChange}
        rows={rows ? rows : 3}
        disabled={disabled}
        placeholder={label}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
      ></textarea>
    </div>
  );
};
