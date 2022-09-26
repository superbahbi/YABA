import React, { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
import { ILoginProps } from "../pages/auth/login";

export interface IInputProps {
  type: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<ILoginProps>;
  name: "email" | "password";
  errors?: string;
  icon?: ReactNode;
}
export interface IInputError {
  email?: IInputMsgError;
  password?: IInputMsgError;
}
export interface IInputMsgError {
  message?: string;
}

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
          <input
            className="w-full mt-2 border py-4 px-4 outline-none ring-blue-300 focus:ring"
            {...register(name, { required: true })}
            {...rest}
          />
          <span className="absolute inset-y-0 inline-flex items-center right-4">
            {icon && icon}
          </span>
          {<p className="pt-1 h-4 text-sm text-red-500">{errors && errors}</p>}
        </div>
      </div>
    </>
  );
};
export default Input;
