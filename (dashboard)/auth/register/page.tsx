"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import formUrlEncoded from "form-urlencoded";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { IconAt, IconEye, IconGoogle } from "@/assets/icons";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { IAuthInputFormProps } from "@/types/LPinterface";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must contain atleast 8 characters long")
    .max(32, "Password must be at max 32 characters long")
    .regex(
      /^(?=.*[A-Z])/,
      "Password must contain atleast one uppercase character"
    )
    .regex(
      /^(?=.*[a-z])/,
      "Password must contain atleast one lowercase character(s)"
    )
    .regex(/^(?=.*[0-9])/, "Password must contain atleast one number")
    .regex(
      /^(?=.*[!@#$%^&*])/,
      "Password must contain atleast one special character(s)"
    ),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});
// TODO register password validation
// ex. min 8 characters, max 32 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
// labels: enhancement, help wanted, good first issue
export default function Register() {
  const [checked, setChecked] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<IAuthInputFormProps>({ resolver: zodResolver(formSchema) });
  const router = useRouter();
  const registerMutation = useMutation(
    (newUser: IAuthInputFormProps) =>
      fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formUrlEncoded(newUser),
      }).then((res) => res.json()),
    {
      onSuccess: () => {
        toast.success("You successfully register");
        router.push("/login");
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: () => {
        toast.error("Invalid credentials");
      },
    }
  );
  return (
    <>
      <p className="text-3xl font-bold">create your free account</p>
      <p className="mt-3 font-medium">
        already using yaba?{" "}
        <NextLink href="/auth/login">
          <span className="cursor-pointer whitespace-nowrap font-semibold text-primary">
            login here
          </span>
        </NextLink>
      </p>
      <div className="mt-6 flex flex-col items-stretch">
        <button className="mt-4 flex items-center justify-center rounded-md border px-4 py-2 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
          <IconGoogle />
          get started with Google
        </button>
      </div>

      <div className="divider text-xs"> or use email instead</div>
      <form
        className="flex flex-col items-stretch"
        onSubmit={handleSubmit((dataForm) => {
          registerMutation.mutate(dataForm);
        })}
      >
        <Input
          type="email"
          id="register-email"
          register={register}
          errors={errors?.email?.message}
          name="email"
          icon={<IconAt strokeColor="text-gray-500" />}
        />

        <Input
          type="password"
          id="register-password"
          register={register}
          errors={errors?.password?.message}
          name="password"
          icon={<IconEye strokeColor="text-gray-500" />}
        />

        <Input
          type="text"
          id="register-first-name"
          register={register}
          errors={errors?.firstName?.message}
          name="firstName"
        />
        <Input
          type="text"
          id="register-last-name"
          register={register}
          errors={errors?.lastName?.message}
          name="lastName"
        />

        <label htmlFor="terms" className="my-6 flex items-center">
          <input
            className="mr-4 h-6 w-6 accent-blue-600"
            type="checkbox"
            name="terms"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className="text-sm">
            i agree to the{" "}
            <NextLink href="/terms">
              <span className="cursor-pointer font-medium text-blue-500 underline">
                terms and conditions
              </span>
            </NextLink>
          </span>
        </label>

        <Button
          className="w-full"
          type="submit"
          direction="left-0"
          inset="inset-y-0"
          disabled={!isDirty}
        >
          {isSubmitting ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 h-6 w-6 animate-spin fill-accent text-gray-200"
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
              <span className="sr-only">loading...</span>
            </div>
          ) : (
            "register"
          )}
        </Button>
      </form>
    </>
  );
}
