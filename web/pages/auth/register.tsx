import { zodResolver } from "@hookform/resolvers/zod";
import formUrlEncoded from "form-urlencoded";
import Head from "next/head";
import NextLink from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { IconAt, IconEye, IconGoogle } from "../../assets/icons";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Auth from "../../layouts/Auth";
import { IFormErrorProps, IAuthInputFormProps } from "../../types/LPinterface";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});
// TODO register password validation
// ex. min 8 characters, max 32 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
// labels: enhancement, help wanted, good first issue
const Register: React.FC<IAuthInputFormProps> = () => {
  const [checked, setChecked] = useState(true);
  const [resError, setResError] = useState<IFormErrorProps[]>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<IAuthInputFormProps>({ resolver: zodResolver(formSchema) });
  const onSubmit = async (data: IAuthInputFormProps) => {
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
      const { user, errors } = await response.json();
      if (errors) {
        setResError(errors);
      }
      console.log(user);
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <>
      <Head>
        <title>yaba. | register</title>
      </Head>
      <Auth>
        <p className="text-3xl font-bold">create your free account</p>
        <p className="mt-3 font-medium">
          already using yaba?{" "}
          <NextLink href="/auth/login">
            <span className="whitespace-nowrap font-semibold text-primary cursor-pointer">
              login here
            </span>
          </NextLink>
        </p>
        <div className="flex flex-col items-stretch mt-6">
          <button className="flex items-center justify-center rounded-md border mt-4 px-4 py-2 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <IconGoogle />
            get started with Google
          </button>
        </div>

        <div className="divider text-xs"> or use email instead</div>
        <form
          className="flex flex-col items-stretch"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="h-4 pt-1">
            {resError &&
              resError.map((error: IFormErrorProps, index: number) => (
                <p key={index} className="text-sm text-red-500">
                  {error.msg}
                </p>
              ))}
          </div>
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
                <span className="font-medium text-blue-500 underline cursor-pointer">
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
                <span className="sr-only">loading...</span>
              </div>
            ) : (
              "register"
            )}
          </Button>
        </form>
      </Auth>
    </>
  );
};
export default Register;
