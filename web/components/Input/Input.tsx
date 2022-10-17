import React, { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
import { IAuthInputFormProps } from "../../types/LPinterface";

interface IInputProps {
  type: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<IAuthInputFormProps>;
  name: "email" | "password" | "firstName" | "lastName";
  errors?: string;
  icon?: ReactNode;
}

export const Input: React.FC<IInputProps> = ({
  register,
  name,
  errors,
  icon,
  ...rest
}) => {
  return (
    <div className="mt-2 flex flex-col">
      <div className="relative">
        <div className="border mt-2 py-1 px-4 outline-none ring-blue-300 focus:ring">
          <span className="text-xs font-medium text-gray-500">{name}</span>
          <input
            data-testid="input-test"
            role="textBox"
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
  );
};
