import React from "react";
import NextLink from "next/link";
import Auth from "../../layouts/Auth";
import { useForm } from "react-hook-form";
import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export interface ILoginProps {
  email: string;
  password: string;
}
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login: React.FC<ILoginProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ILoginProps) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formUrlEncoded(data),
        }
      );
      const { user, accessToken, refreshToken } = await response.json();
      console.log(
        "🚀 ~ file: login.tsx ~ line 44 ~ onSubmit ~ refreshToken",
        refreshToken
      );
      console.log(
        "🚀 ~ file: login.tsx ~ line 44 ~ onSubmit ~ accessToken",
        accessToken
      );
      console.log("🚀 ~ file: login.tsx ~ line 44 ~ onSubmit ~ user", user);
      if (user && accessToken) {
        // TODO: Save the user and access token to local storage or a cookie
        // localStorage.setItem("user", JSON.stringify(user));
        // localStorage.setItem("accessToken", accessToken);
        // window.location.href = "/overview";
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <>
      <Auth>
        <p className="text-center text-2xl font-bold">Welcome back to yaba</p>
        <p className="mt-6 text-center font-medium">
          Don&apos;t have an account?
          <NextLink href="/auth/register">
            <span className="whitespace-nowrap font-semibold text-primary cursor-pointer">
              Sign up for free.
            </span>
          </NextLink>
        </p>
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

          <div className="flex flex-col pt-4 mb-4 ">
            <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
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
          <div className="block">
            <label className="inline-block" htmlFor="remember-me">
              <NextLink href="/forgotpassword">
                <span className="underline cursor-pointer">
                  Forgot password?
                </span>
              </NextLink>
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2"
          >
            Sign in
          </button>
        </form>
      </Auth>
    </>
  );
};
export default Login;
