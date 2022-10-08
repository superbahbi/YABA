import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import { IconMail, IconNotification } from "../assets/icons";
import Logo from "../assets/images/logo.png";
import { IHeaderProps } from "../types/interface";

const Header: React.FC<IHeaderProps> = () => {
  // const linkNames = [
  //   "overview",
  //   "transaction",
  //   "analytics",
  //   "wallet",
  //   "invoice",
  //   "account",
  //   "settings",
  // ];
  return (
    <>
      <div className="sticky top-0 z-10 px-8 navbar bg-base-100 bg-none">
        <div className="navbar-start">
          <NextLink href="/">
            <div className="pl-2 cursor-pointer">
              <Image src={Logo} alt="logo" width={32} height={32} />
            </div>
          </NextLink>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle text-accent">
            <IconMail />
          </button>
          <button className="btn btn-ghost btn-circle text-accent">
            <div className="indicator">
              <IconNotification />
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-accent"></span>
            </div>
          </button>
          <button className="dropdown dropdown-end">
            <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
              <div className="w-6 rounded-full">
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
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NextLink href={"/profile"}>
                  <span>Profile</span>
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
          </button>
          <select
            className="bg-transparent border-transparent focus:border-transparent focus:ring-0 bg-none indent-0 p-2"
            data-choose-theme
          >
            <option value="light">🌞</option>
            <option value="night">🌙</option>
          </select>
        </div>
      </div>

      {/* <div className="fixed top-0 z-20 navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="navbar-brand sm:hidden md:block">
            <NextLink href="/">
              <span className="flex items-center">
                <Image src={Logo} alt="logo" width={50} height={50} />
              </span>
            </NextLink>
          </div>
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <IconMenu />
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
          <div className="text-xl font-bold normal-case">yaba.</div>
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
         
      </div> */}
    </>
  );
};
export default Header;
