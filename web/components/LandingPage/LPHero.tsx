import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import { ILPHeroProps } from "../../types/LPinterface";
import Button from "../Button";

const LPHero: React.FC<ILPHeroProps> = ({ bgVideo }) => {
  console.log(bgVideo);
  return (
    <section>
      <div className="">
        <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-3xl lg:pr-5">
                <h2 className="mb-6 max-w-2xl text-5xl font-bold leading-snug tracking-tight sm:text-8xl">
                  Welcome to the{" "}
                  <span className="text-accent-focus">future</span> of{" "}
                  <span className="text-accent-focus">money management.</span>
                </h2>
                <p className="text-base ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque it.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <Button direction="left-0" inset="inset-y-0" link="auth/login">
                  Start Now
                </Button>

                <NextLink
                  href="auth/register"
                  aria-label=""
                  className="underline-offset-2 inline-flex items-center font-semibold underline transition-colors duration-200 hover:underline"
                >
                  <button className="link ml-4 no-underline">Sign up</button>
                </NextLink>
              </div>
              <div className="mt-12 flex flex-col space-y-3 divide-gray-300 text-sm  sm:flex-row sm:space-y-0 sm:divide-x">
                <div className="flex max-w-xs space-x-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="flex max-w-xs space-x-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
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
              <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-10 -top-20 h-28 w-28 rounded-xl "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <Image
                  className="-mb-20"
                  src="/images/2fugLKmm9JsRrFhS_F57Z.png"
                  alt=""
                  width="300px"
                  height="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LPHero;
