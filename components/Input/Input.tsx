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
        <div className="mt-2 border py-1 px-4 outline-none ring-blue-300 focus:ring">
          <span className="text-xs font-medium text-primary">{name}</span>
          <input
            data-testid="input-test"
            role="textBox"
            className="w-full border-none bg-base-100 p-0 text-sm text-secondary focus:border-none focus:ring-0"
            {...register(name, { required: true })}
            {...rest}
          />
          <span className="absolute inset-y-0 right-4 inline-flex items-center">
            {icon && icon}
          </span>
        </div>
        <p className="h-4 pt-1 text-sm text-red-500">{errors && errors}</p>
      </div>
    </div>
  );
};
