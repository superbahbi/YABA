import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import { ILPHeroProps } from "../../types/LPinterface";
import Button from "../Button";

const LPHero: React.FC<ILPHeroProps> = () => {
  return (
    <section>
      <div className="">
        <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-3xl lg:pr-5">
                <h2 className="mb-6 max-w-2xl text-3xl font-semibold leading-snug tracking-tight md:text-7xl">
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
                <NextLink href="/auth/register" passHref>
                  <div>
                    <Button direction="left-0" inset="inset-y-0">
                      Get Started for Free
                    </Button>
                  </div>
                </NextLink>

                <NextLink
                  href="/auth/register"
                  aria-label=""
                  className="underline-offset-2 inline-flex items-center font-semibold underline transition-colors duration-200 hover:underline"
                >
                  <button className="link md:ml-4 mt-4 md:mt-0 no-underline">
                    Sign up
                  </button>
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
              <Image
                className="w-full h-full"
                alt="investing"
                src={"https://i.postimg.cc/hPYft2kC/Investment-data-amico.png"}
                width="600px"
                height="600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LPHero;
