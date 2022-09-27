import React from "react";
import { IInputProps } from "../types/LPinterface";

const Input: React.FC<IInputProps> = ({
  register,
  name,
  errors,
  icon,
  ...rest
}) => {
  return (
    <>
      <div className="mt-2 flex flex-col">
        <div className="relative">
          <div className="border mt-2 py-1 px-4 outline-none ring-blue-300 focus:ring">
            <span className="text-xs font-medium text-gray-500 capitalize">
              {name}
            </span>
            <input
              className="w-full text-sm border-none p-0 focus:ring-0 text-gray-500 focus:border-none"
              {...register(name, { required: true })}
              {...rest}
            />
            <span className="absolute inset-y-0 inline-flex items-center right-4">
              {icon && icon}
            </span>
          </div>
          <p className="pt-1 h-4 text-sm text-red-500">{errors && errors}</p>
        </div>
      </div>
    </>
  );
};
export default Input;
