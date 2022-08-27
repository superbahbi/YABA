import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconAccount } from "../assets/icons/account.svg";
import { ReactComponent as IconChart } from "../assets/icons/chart.svg";
import { ReactComponent as IconHome } from "../assets/icons/home.svg";
import { ReactComponent as IconInvoice } from "../assets/icons/invoice.svg";
import { ReactComponent as IconSetting } from "../assets/icons/setting.svg";
import { ReactComponent as IconWallet } from "../assets/icons/wallet.svg";
import { NavbarProps } from "../types/interface";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex-col h-full w-10 lg:px-6 md:px-3 lg:mr-6 pt-4 lg:w-52 hidden md:flex">
      <Link
        className="text-sm uppercase font-bold p-4 px-0 hidden lg:block"
        to="/"
      >
        <h1 className="text-2xl text-sky-500">YABA</h1>
      </Link>
      <ul className="flex flex-col list-none">
        <li className="items-center">
          <Link className={"flex text-sm py-3 font-light"} to="/">
            <i className={"flex items-center mr-2"}>
              <IconHome className="h-4" />
            </i>
            <span className="hidden lg:inline-block">Overview</span>
          </Link>
        </li>
        <li className="items-center">
          <Link className={"flex text-sm py-3 font-light"} to="/transaction">
            <i className={"flex items-center mr-2"}>
              <IconChart className="h-4" />
            </i>
            <span className="hidden lg:inline-block">Transaction</span>
          </Link>
        </li>
        <li className="items-center">
          <Link className={"flex text-sm py-3 font-light"} to="/analytics">
            <i className={"flex items-center mr-2"}>
              <IconChart className="h-4" />
            </i>
            <span className="hidden lg:inline-block">Analytics</span>
          </Link>
        </li>
        <li className="items-center">
          <Link className={"flex text-sm py-3 font-light"} to="/wallet">
            <i className={"flex items-center mr-2"}>
              <IconWallet className="h-4" />
            </i>
            <span className="hidden lg:inline-block">Wallet</span>
          </Link>
        </li>
        <li className="items-center">
          <Link className={"flex text-sm py-3 font-light"} to="/invoice">
            <i className={"flex items-center mr-2"}>
              <IconInvoice className="h-4" />
            </i>
            <span className="hidden lg:inline-block">Invoice</span>
          </Link>
        </li>
        <li className="items-center">
          <Link className={"flex text-sm py-3 font-light"} to="/account">
            <i className={"flex items-center mr-2"}>
              <IconAccount className="h-4" />
            </i>
            <span className="hidden lg:inline-block">Account</span>
          </Link>
        </li>
        <li className="items-center">
          <Link className={"flex text-sm py-3 font-light"} to="/settings">
            <i className={"flex items-center mr-2"}>
              <IconSetting className="h-4" />
            </i>
            <span className="hidden lg:inline-block">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
