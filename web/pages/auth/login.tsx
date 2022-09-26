import React from "react";
import NextLink from "next/link";
import Auth from "../../layouts/Auth";
import { useForm } from "react-hook-form";
import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import Input from "../../components/Input";

export interface ILoginProps {
  email: string;
  password: string;
}
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login: React.FC<ILoginProps> = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>({ resolver: zodResolver(schema) });

  const onSubmit = async (dataForm: ILoginProps) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formUrlEncoded(dataForm),
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
      if (accessToken) {
        // TODO: Save the user and access token to local storage or a cookie
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("accessToken", accessToken);
        router.push("/overview");
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <>
      <Auth>
        <p className="text-3xl font-bold">Welcome back to yaba</p>
        <p className="mt-3 font-medium">
          Don&apos;t have an account?{" "}
          <NextLink href="/auth/register">
            <span className="whitespace-nowrap font-semibold text-primary cursor-pointer">
              Sign up for free.
            </span>
          </NextLink>
        </p>

        <form
          className="flex flex-col items-stretch"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="email"
            id="login-email"
            placeholder="Email"
            register={register}
            errors={errors?.email?.message}
            name="email"
          />
          <Input
            type="password"
            id="password"
            placeholder="Password (minimum 6 characters)"
            register={register}
            errors={errors?.password?.message}
            name="password"
          />
          <span className="my-6 flex items-center text-sm">
            <NextLink href="/auth/forgotpassword">
              <span className="font-medium text-blue-500 underline cursor-pointer">
                Forgot password?
              </span>
            </NextLink>
          </span>

          <Button type="submit" direction="left-0" inset="inset-y-0">
            Sign in
          </Button>
        </form>
      </Auth>
    </>
  );
};
export default Login;
