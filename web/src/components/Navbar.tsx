import React from "react";
import { Link } from "react-router-dom";
import {
  IconHome,
  IconChart,
  IconWallet,
  IconInvoice,
  IconAccount,
  IconSetting,
} from "../assets/icons";
import { NavbarProps } from "../types/interface";

const Navbar: React.FC<NavbarProps> = () => {
  const linkNames = [
    "Overview",
    "Transaction",
    "Analytics",
    "Wallet",
    "Invoice",
    "Account",
    "Settings",
  ];
  const icons = [
    IconHome,
    IconChart,
    IconChart,
    IconWallet,
    IconInvoice,
    IconAccount,
    IconSetting,
  ];
  return (
    <nav className="flex-col h-full w-10 lg:px-6 md:px-3 lg:mr-6 pt-4 lg:w-52 hidden md:flex">
      <Link
        className="text-sm uppercase font-bold p-4 px-0 hidden lg:block"
        to="/"
      >
        <h1 className="text-2xl text-sky-500">YABA</h1>
      </Link>
      <ul className="flex flex-col list-none">
        {icons.map((Icon, index) => {
          return (
            <li className="items-center" key={index}>
              <Link
                className={"flex text-md py-3 font-light"}
                to={index === 0 ? "/" : "/" + linkNames[index].toLowerCase()}
              >
                <i className={"flex items-center mr-2"}>
                  <Icon />
                </i>
                <span className="hidden lg:inline-block">
                  {linkNames[index]}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
