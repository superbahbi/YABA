import React from "react";
import Form from "../../components/Form";
import { IconGoogle } from "../../assets/icons";
import NextLink from "next/link";
import Image from "next/image";
import Auth from "../../layouts/Auth";
export interface RregisterProps {}

const Register: React.FC<RregisterProps> = () => {
  return (
    <>
      <Auth>
        <div className="mx-auto flex flex-col justify-center px-8 py-8">
          <p className="text-center text-2xl font-bold">
            Create your free account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
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
          <form className="flex flex-col items-stretch pt-3 md:pt-3">
            <div className="flex flex-col pt-4">
              <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  id="login-email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="login-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password (minimum 6 characters)"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="login-first-name"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-4 ">
              <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="login-last-name"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="block">
              <input
                className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
                type="checkbox"
                id="remember-me"
                checked
              />
              <label className="inline-block" htmlFor="remember-me">
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
        </div>
      </Auth>
    </>
  );
};
export default Register;
