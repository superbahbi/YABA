import React from "react";
import Auth from "../../layouts/Auth";
import { useForm } from "react-hook-form";
import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/router";
export interface IForgotpasswordProps {
  email: string;
}
export interface IResponseProps {
  status?: string;
  error?: string | string[];
}
const schema = z.object({
  email: z.string().email(),
});

const Forgotpassword: React.FC<IForgotpasswordProps> = () => {
  const [response, setResponse] = React.useState<IResponseProps>({});
  const router = useRouter();
  const { register, handleSubmit } = useForm<IForgotpasswordProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (dataForm: IForgotpasswordProps) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formUrlEncoded(dataForm),
        }
      );
      const { status } = await response.json();
      setResponse({ status });
      console.log(status);
    } catch (errors) {
      // setError(errors.message);
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
            Email sent
          </h2>
          <p className="flex items-center justify-center mb-4 text-sm text-center">
            Check your email and open the link we sent to continue.
          </p>
          <div className="flex flex-col items-stretch">
            <button
              className="mt-10 bg-blue-600 px-6 py-3 font-bold text-white outline-none ring-blue-300 focus:ring"
              onClick={() => router.push("/auth/login")}
            >
              Continue
            </button>
          </div>
        </div>
      </Auth>
    );
  }
  return (
    <>
      <Auth>
        <p className="text-3xl font-bold">Forgot Password</p>
        <p className="mt-3 font-medium">
          Don&apos;t worry, happens to the best of us
        </p>
        <form
          className="flex flex-col items-stretch"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-8 flex flex-col">
            <input
              className="mt-2 border py-4 px-4 outline-none ring-blue-300 focus:ring"
              type="text"
              id="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />
          </div>

          <button
            type="submit"
            className="mt-10 bg-blue-600 px-6 py-3 font-bold text-white outline-none ring-blue-300 focus:ring"
          >
            email me a recovery link
          </button>
        </form>
      </Auth>
    </>
  );
};
export default Forgotpassword;
