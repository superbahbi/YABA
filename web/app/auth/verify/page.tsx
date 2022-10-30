"use client";
import React from "react";
import { useForm } from "react-hook-form";
import formUrlEncoded from "form-urlencoded";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { IVerifyProps } from "@/types/interface";

const schema = z.object({
  code: z.string().min(6),
});
const Verify: React.FC<IVerifyProps> = () => {
  const { handleSubmit } = useForm<IVerifyProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: IVerifyProps) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formUrlEncoded(data),
        }
      );
      console.log(
        "🚀 ~ file: verify.tsx ~ line 44 ~ onSubmit ~ response",
        response
      );
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <>
      <p className="text-center text-2xl font-bold">
        Verify your email address
      </p>
      <p className="mt-6 text-center font-light">
        Enter the code you received at
      </p>
      <p className=" text-center font-medium">su****@g****.com</p>

      <form
        className="flex flex-col items-stretch pt-3 md:pt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          id="code"
          className="flex flex-row justify-center text-center px-2 mt-5 text-gray-800"
        >
          <input
            className="m-2 border h-10 w-10 text-center form-control rounded"
            type="text"
            id="first"
            maxLength={1}
          />
          <input
            className="m-2 border h-10 w-10 text-center form-control rounded"
            type="text"
            id="second"
            maxLength={1}
          />
          <input
            className="m-2 border h-10 w-10 text-center form-control rounded"
            type="text"
            id="third"
            maxLength={1}
          />
          <input
            className="m-2 border h-10 w-10 text-center form-control rounded"
            type="text"
            id="fourth"
            maxLength={1}
          />
          <input
            className="m-2 border h-10 w-10 text-center form-control rounded"
            type="text"
            id="fifth"
            maxLength={1}
          />
          <input
            className="m-2 border h-10 w-10 text-center form-control rounded"
            type="text"
            id="sixth"
            maxLength={1}
          />
        </div>

        <button
          type="submit"
          className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2"
        >
          Verify
        </button>
      </form>
    </>
  );
};
export default Verify;
