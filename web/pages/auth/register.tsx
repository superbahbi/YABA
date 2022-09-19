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
        <p className="text-center text-xl lg:text-2xl font-bold">
          Create your free account
        </p>
        <p className="mt-6 text-center font-base">
          Already using yaba?{" "}
          <NextLink href="/auth/login">
            <span className="whitespace-nowrap font-semibold text-primary cursor-pointer">
              Login here
            </span>
          </NextLink>
        </p>
        <button className="mt-8 flex items-center justify-center rounded-md border px-4 py-2 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
          <IconGoogle />
          Get started with Google
        </button>
        <div className="divider text-xs"> Or use email instead</div>
        <form
          className="flex flex-col items-stretch pt-3 md:pt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col pt-4">
            <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="email"
                id="login-email"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            {errors?.email && <p className="pt-1">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col pt-4">
            <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600 bg-white">
              <input
                type="password"
                id="login-password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Password (minimum 6 characters)"
                {...register("password", { required: true })}
              />
            </div>
            {errors?.password && (
              <p className="pt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col pt-4">
            <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="text"
                id="login-first-name"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
            </div>
            {errors?.firstName && (
              <p className="pt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex flex-col pt-4 mb-4 ">
            <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="text"
                id="login-last-name"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
            </div>
            {errors?.lastName && (
              <p className="pt-1">{errors.lastName.message}</p>
            )}
          </div>
          <div className="block">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="checkbox mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
            />
            <label
              className="inline-block text-xs lg:text-base"
              htmlFor="remember-me"
            >
              I agree to the{" "}
              <NextLink href="/terms">
                <span className="underline">Terms and Conditions</span>
              </NextLink>
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2"
          >
            Register
          </button>
        </form>
      </Auth>
    </>
  );
};
export default Register;
