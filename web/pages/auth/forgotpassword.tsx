import React from "react";
import Auth from "../../layouts/Auth";
import { useForm } from "react-hook-form";
import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export interface IForgotpasswordProps {
  email: string;
}
export interface IResonseProps {
  errors?: {
    message?: string[];
  };
}
const schema = z.object({
  email: z.string().email(),
});

const Forgotpassword: React.FC<IForgotpasswordProps> = () => {
  const { register, handleSubmit } = useForm<IForgotpasswordProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: IForgotpasswordProps) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formUrlEncoded(data),
        }
      );
      await response.json();
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <>
      <Auth>
        <p className="text-center text-2xl font-bold">Forgot Password</p>
        <p className="mt-6 text-center font-medium">
          Don&apos;t worry, happens to the best of us
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
          </div>

          <button
            type="submit"
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2"
          >
            email me a recovery link
          </button>
        </form>
      </Auth>
    </>
  );
};
export default Forgotpassword;
