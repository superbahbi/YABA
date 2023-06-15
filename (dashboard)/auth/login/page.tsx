"use client";
import React from "react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formUrlEncoded from "form-urlencoded";
import * as z from "zod";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { IconAt, IconEye, IconGoogle, IconLoading } from "@/assets/icons";
import { IAuthInputFormProps } from "@/types/LPinterface";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { userStore } from "../../../store/userStore";

interface loginType {
  email: string;
  password: string;
}

const formSchema = z.object({
  email: z.string().email("Email Address is invalid"),
  password: z
    .string()
    .min(8, "Password must contain atleast 8 characters long")
    .max(32, "Password must be at max 32 characters long"),
  // .regex(
  //   /^(?=.*[A-Z])/,
  //   "Password must contain atleast one uppercase character"
  // )
  // .regex(
  //   /^(?=.*[a-z])/,
  //   "Password must contain atleast one lowercase character(s)"
  // )
  // .regex(/^(?=.*[0-9])/, "Password must contain atleast one number")
  // .regex(
  //   /^(?=.*[!@#$%^&*])/,
  //   "Password must contain atleast one special character(s)"
  // ),
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
  const router = useRouter();
  const { setCurrentUser, getCurrentUser } = userStore();

  const loginMutation = useMutation(
    (newUser: loginType) =>
      fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formUrlEncoded(newUser),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        setCurrentUser(data.id);
        console.log("getCurrentUser:", getCurrentUser());
        toast.success("You successfully logged in");
        router.push("/overview");
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: () => {
        toast.error("Invalid credentials");
      },
    }
  );

  const onSubmit = async (dataForm: loginType) => {
    loginMutation.mutate(dataForm);
  };
  return (
    <>
      <p className="text-3xl font-bold">welcome back to yaba</p>
      <p className="mt-3 font-medium">
        don&apos;t have an account?{" "}
        <NextLink href="/auth/register">
          <span className="cursor-pointer whitespace-nowrap font-semibold text-primary">
            sign up for free.
          </span>
        </NextLink>
      </p>
      <div className="mt-6 flex flex-col items-stretch">
        <button
          onClick={() => console.log("signin")}
          className="mt-4 flex items-center justify-center rounded-md border px-4 py-2 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"
        >
          <IconGoogle />
          get started with Google
        </button>
      </div>
      <div className="divider text-xs"> or use email instead</div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
            <span className="cursor-pointer font-medium text-blue-500 underline">
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
          {loginMutation.isLoading ? (
            <div className="flex justify-center">
              <IconLoading />
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
