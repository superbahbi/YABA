import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ILoginProps } from "../pages/auth/login";

export interface IInputProps {
  type: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<ILoginProps>;
  name: "email" | "password";
  errors?: string;
}
export interface IInputError {
  email?: IInputMsgError;
  password?: IInputMsgError;
}
export interface IInputMsgError {
  message?: string;
}

const Input: React.FC<IInputProps> = ({ register, name, errors, ...rest }) => {
  return (
    <>
      <div className="mt-2 flex flex-col">
        <input
          className="mt-2 border py-4 px-4 outline-none ring-blue-300 focus:ring"
          {...register(name, { required: true })}
          {...rest}
        />

        {<p className="pt-1 text-red-500">{errors && errors}</p>}
      </div>
    </>
  );
};
export default Input;
