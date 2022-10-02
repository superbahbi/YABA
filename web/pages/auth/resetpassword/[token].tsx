import React from "react";
import Auth from "../../../layouts/Auth";
import { useForm } from "react-hook-form";
import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/router";
import { IInputFormProps } from "../../../types/LPinterface";
import Input from "../../../components/Input";
import { IconEye } from "../../../assets/icons";
import Button from "../../../components/Button";
import { IResponseProps } from "../../../types/interface";

const schema = z.object({
  password: z.string().min(6),
});

const ResetPassword: React.FC<IInputFormProps> = () => {
  const [response, setResponse] = React.useState<IResponseProps>({});
  const [, setErrors] = React.useState<IResponseProps>({});
  const router = useRouter();
  const { token } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<IInputFormProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData: IInputFormProps) => {
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
          <Input
            type="password"
            id="register-password"
            register={register}
            errors={errors?.password?.message}
            name="password"
            icon={<IconEye strokeColor="text-gray-500" />}
          />

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
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Change password"
            )}
          </Button>
        </form>
      </Auth>
    </>
  );
};
export default ResetPassword;
