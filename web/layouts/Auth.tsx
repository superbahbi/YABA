import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { IconArrowLeft } from "../assets/icons";
import { themeChange } from "theme-change";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IAuthProps } from "../types/LPinterface";

const Auth: React.FC<IAuthProps> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <div className="min-h-screen lg:bg-[linear-gradient(90deg,_white_70%,_yellow_70%)]">
        <div className="mx-auto pt-20 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="lg:max-w-lg lg:pr-5">
              <div className="max-w-xl">
                <div>
                  <p className="mb-2 inline-block rounded-full px-3 text-xs font-semibold tracking-wider text-blue-900">
                    new and improved
                  </p>
                </div>
                <h2 className="mb-6 max-w-lg text-3xl font-bold leading-snug tracking-tight text-blue-600 sm:text-5xl sm:leading-snug">
                  budget platform for your{" "}
                  <span className="my-1 inline-block border-b-8 font-light text-blue-600">
                    financial needs
                  </span>
                </h2>
                <p className="text-base text-gray-700">
                  yaba is a budgeting platform that helps you to track your
                  income and expenses, set goals and save money. It is a simple
                  to use platform that helps you to manage your finances.
                </p>
              </div>
            </div>
            <div className="relative text-blue-600 lg:ml-32 lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
              <div className="-mx-4 flex flex-col bg-gray-50 px-4 py-6 text-center sm:px-12 sm:text-left lg:bg-white lg:py-10 lg:shadow-xl lg:shadow-blue-900/20">
                <button
                  className="btn btn-ghost btn-circle"
                  onClick={() => router.back()}
                >
                  <IconArrowLeft strokeColor="text-secondary" />
                </button>

                <div className="p-4">{children} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
export default Auth;
