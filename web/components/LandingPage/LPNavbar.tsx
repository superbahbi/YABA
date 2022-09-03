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
              <a className="btn btn-ghost normal-case text-sm text-accent">
                explore
              </a>
            </li>
            <li tabIndex={0}>
              <a className="btn btn-ghost normal-case text-sm text-accent gap-2">
                login
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a className="btn btn-ghost normal-case text-sm text-accent">
                    account
                  </a>
                </li>
                <li>
                  <a className="btn btn-ghost normal-case text-sm text-accent">
                    sign-up
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="btn btn-ghost normal-case text-sm text-accent">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LPNavbar;
