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
const schema = z.object({
  token: z.string(),
  password: z.string().min(6),
});
const ResetPassword: React.FC<IResetPasswordProps> = () => {
  const router = useRouter();
  const { token } = router.query;
  const { register, handleSubmit } = useForm<IResetPasswordProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData: IResetPasswordProps) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formUrlEncoded(formData),
        }
      );
      const { data } = await response.json();
      console.log("data", data);
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <>
      <Auth>
        <p className="text-center text-2xl font-bold">Change Password</p>
        <p className="mt-6  font-medium text-xs">
          In order to protect your account, make your password:
        </p>
        <ul className="p-4 text-xs list-disc">
          <li>Is longer than 6 characters.</li>
          <li>Todo: add more</li>
        </ul>
        <form
          className="flex flex-col items-stretch pt-3 md:pt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col pt-4">
            <input
              type="hidden"
              id="token"
              value={token}
              {...register("token", { required: true })}
            />
            <div className="relative flex rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="new password"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2"
          >
            change password
          </button>
        </form>
      </Auth>
    </>
  );
};
export default ResetPassword;
