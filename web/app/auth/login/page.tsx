"use client";
import React from "react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
// import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { IconAt, IconEye } from "../../../assets/icons";
import { IAuthInputFormProps } from "../../../types/LPinterface";

const formSchema = z.object({
  email: z.string().email("Email Address is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export interface ILoginDataFormProps {
  email: string;
  password: string;
}
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<IAuthInputFormProps>({ resolver: zodResolver(formSchema) });

  // API Get Current Logged-in user

  return (
    <>
      <p className="text-3xl font-bold">welcome back to yaba</p>
      <p className="mt-3 font-medium">
        don&apos;t have an account?{" "}
        <NextLink href="/auth/register">
          <span className="whitespace-nowrap font-semibold text-primary cursor-pointer">
            sign up for free.
          </span>
        </NextLink>
      </p>

      <form
        className="flex flex-col"
        onSubmit={handleSubmit((dataForm: IAuthInputFormProps) => {
          console.log(dataForm);
        })}
      >
        <Input
          type="email"
          id="login-email"
          register={register}
          errors={errors?.email?.message}
          name="email"
          icon={<IconAt strokeColor="text-gray-500" />}
        />
        <Input
          type="password"
          id="password"
          register={register}
          errors={errors?.password?.message}
          name="password"
          icon={<IconEye strokeColor="text-gray-500" />}
        />

        <span className="my-6 flex items-center text-sm">
          <NextLink href="/auth/forgotpassword">
            <span className="font-medium text-blue-500 underline cursor-pointer">
              forgot password?
            </span>
          </NextLink>
        </span>

        <Button
          className="w-full"
          type="submit"
          direction="left-0"
          inset="inset-y-0"
          disabled={!isDirty || isSubmitting}
        >
          {isSubmitting ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 w-6 h-6 text-gray-200 animate-spin fill-accent"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "sign in"
          )}
        </Button>
      </form>
    </>
  );
}
