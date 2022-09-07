import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import { IconMenu, IconMail, IconNotification } from "../assets/icons";
import { HeaderProps } from "../types/interface";
const Header: React.FC<HeaderProps> = () => {
  const linkNames = [
    "overview",
    "transaction",
    "analytics",
    "wallet",
    "invoice",
    "account",
    "settings",
  ];
  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 z-20">
        <div className="navbar-start">
          <div className="dropdown  md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <IconMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {linkNames.map((name, index) => {
                return (
                  <NextLink href={"/" + name} key={index}>
                    <li className="">
                      <div className="capitalize">{name}</div>
                    </li>
                  </NextLink>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className="normal-case text-xl font-bold">yaba.</div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <IconMail />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IconNotification />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <Image
                  src="https://placeimg.com/80/80/people"
                  alt="avatar"
                  height={80}
                  width={80}
                />
              </div>
            </label>
            <ul
              tabIndex={1}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NextLink href={"/profile"}>
                  <span className="justify-between">Profile</span>
                </NextLink>
              </li>

              <li>
                <NextLink href={"/settings"}>
                  <span>Settings</span>
                </NextLink>
              </li>

              <li>
                <NextLink href={"/logout"}>
                  <span>Logout</span>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
