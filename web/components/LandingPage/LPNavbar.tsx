import NextLink from "next/link";
import React from "react";
import { ILPNavbarProps } from "../../types/LPinterface";

const LPNavbar: React.FC<ILPNavbarProps> = ({}) => {
  return (
    <div
      className="navbar bg-base-100 z-10 sticky top-0 bg-none justify-center"
      data-theme="night"
    >
      <div className="lg:max-w-screen-xl w-screen">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">yaba.</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NextLink
                className="btn btn-ghost normal-case text-sm text-accent"
                href="/explore"
              >
                <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline text-accent text-sm">
                  explore
                </button>
              </NextLink>
            </li>
            <li tabIndex={0}>
              <NextLink
                className="btn btn-ghost normal-case text-sm text-accent"
                href="/explore"
              >
                <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline text-accent text-sm">
                  account
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </button>
              </NextLink>
              <ul className="p-2 bg-base-100">
                <li>
                  <NextLink
                    className="btn btn-ghost normal-case text-sm text-accent"
                    href="/explore"
                  >
                    <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline text-accent text-sm">
                      login
                    </button>
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    className="btn btn-ghost normal-case text-sm text-accent"
                    href="/explore"
                  >
                    <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline text-accent text-sm">
                      sign up
                    </button>
                  </NextLink>
                </li>
              </ul>
            </li>
            <li>
              <NextLink
                className="btn btn-ghost normal-case text-sm text-accent"
                href="/contact"
              >
                <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline text-accent text-sm">
                  contact
                </button>
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LPNavbar;
