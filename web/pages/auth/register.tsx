import React, { useState } from "react";
import { IconGoogle } from "../../assets/icons";
import NextLink from "next/link";
import Auth from "../../layouts/Auth";
import { useForm } from "react-hook-form";
import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Head from "next/head";

export interface IRegisterProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});
const Register: React.FC<IRegisterProps> = () => {
  const [checked, setChecked] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProps>({ resolver: zodResolver(schema) });
  const onSubmit = async (data: IRegisterProps) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formUrlEncoded(data),
        }
      );
      const newUser = await response.json();
      console.log(newUser);
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <>
      <Head>
        <title>yaba. | Register</title>
      </Head>
      <Auth>
        <p className="text-3xl font-bold">Create your free account</p>
        <p className="mt-3 font-medium">
          Already using yaba?{" "}
          <NextLink href="/auth/login">
            <span className="whitespace-nowrap font-semibold text-primary cursor-pointer">
              Login here
            </span>
          </NextLink>
        </p>
        <div className="flex flex-col items-stretch mt-6">
          <button className="flex items-center justify-center rounded-md border mt-4 px-4 py-2 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <IconGoogle />
            Get started with Google
          </button>
        </div>

        <div className="divider text-xs"> Or use email instead</div>
        <form
          className="flex flex-col items-stretch"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-2 flex flex-col">
            <input
              type="email"
              id="login-email"
              className="mt-2 border py-4 px-4 outline-none ring-blue-300 focus:ring"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors?.email && <p className="pt-1">{errors.email.message}</p>}
          </div>
          <div className="mt-2 flex flex-col">
            <input
              type="password"
              id="login-password"
              className="mt-2 border py-4 px-4 outline-none ring-blue-300 focus:ring"
              placeholder="Password (minimum 6 characters)"
              {...register("password", { required: true })}
            />

            {errors?.password && (
              <p className="pt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="mt-2 flex flex-col">
            {" "}
            <input
              type="text"
              id="login-first-name"
              className="mt-2 border py-4 px-4 outline-none ring-blue-300 focus:ring"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            {errors?.firstName && (
              <p className="pt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div className="mt-2 flex flex-col">
            {" "}
            <input
              type="text"
              id="login-last-name"
              className="mt-2 border py-4 px-4 outline-none ring-blue-300 focus:ring"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
            {errors?.lastName && (
              <p className="pt-1">{errors.lastName.message}</p>
            )}
          </div>

          <label htmlFor="terms" className="mt-6 flex items-center">
            <input
              className="mr-4 h-6 w-6 accent-blue-600"
              type="checkbox"
              name="terms"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className="text-sm">
              I agree to the{" "}
              <NextLink href="/terms">
                <span className="font-medium text-blue-500 underline cursor-pointer">
                  Terms and Conditions
                </span>
              </NextLink>
            </span>
          </label>

          <button
            type="submit"
            className="mt-10 bg-blue-600 px-6 py-3 font-bold text-white outline-none ring-blue-300 focus:ring"
          >
            Register
          </button>
        </form>
      </Auth>
    </>
  );
};
export default Register;
