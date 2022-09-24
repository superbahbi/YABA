import React from "react";
import Auth from "../../../layouts/Auth";
import { useForm } from "react-hook-form";
import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/router";
export interface IResetPasswordProps {
  token: string;
  password: string;
}
export interface IResponseProps {
  status?: string;
  errors?: string | string[];
}

const schema = z.object({
  password: z.string().min(6),
});

const ResetPassword: React.FC<IResetPasswordProps> = () => {
  const [response, setResponse] = React.useState<IResponseProps>({});
  const [errors, setErrors] = React.useState<IResponseProps>({});
  const router = useRouter();
  const { token } = router.query;
  const { register, handleSubmit } = useForm<IResetPasswordProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData: IResetPasswordProps) => {
    console.log("formData", formData);
    const { password } = formData;
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formUrlEncoded({ token, password }),
        }
      );
      const { status, errors } = await response.json();
      setResponse({ status });
      setErrors({ errors });
    } catch (errors) {
      console.log(errors);
    }
  };
  if (response.status === "success") {
    return (
      <Auth>
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="flex items-center justify-center mb-4 text-3xl font-bold">
            Password reset
          </h2>
          <p className="flex items-center justify-center mb-4 text-sm text-center">
            Your password has been reset. You can now login with your new
            password.
          </p>
          <div className="flex flex-col items-stretch">
            <button
              className="mt-10 bg-blue-600 px-6 py-3 font-bold text-white outline-none ring-blue-300 focus:ring"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </button>
          </div>
        </div>
      </Auth>
    );
  }
  return (
    <>
      <Auth>
        <p className="text-3xl font-bold">Reset password</p>
        <p className="mt-3 font-medium">
          In order to protect your account, make your password:
        </p>
        <ul className="p-4 text-xs list-disc">
          <li>Is longer than 6 characters.</li>
          <li>Todo: add more</li>
        </ul>
        <form
          className="flex flex-col items-stretch"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-8 flex flex-col">
            <input
              type="password"
              id="password"
              className="mt-2 border py-4 px-4 outline-none ring-blue-300 focus:ring"
              placeholder="New password"
              {...register("password", { required: true })}
            />
          </div>

          <button
            type="submit"
            className="mt-10 bg-blue-600 px-6 py-3 font-bold text-white outline-none ring-blue-300 focus:ring"
          >
            Change password
          </button>
        </form>
      </Auth>
    </>
  );
};
export default ResetPassword;
