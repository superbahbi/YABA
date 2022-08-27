import React from "react";
import { Link } from "react-router-dom";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex-col h-full w-10  lg:px-6 md:px-3 lg:mr-6 pt-4 lg:w-52 hidden md:flex">
      <Link
        className="text-sm uppercase font-bold p-4 px-0 hidden lg:block"
        to="/"
      >
        <h1 className="text-2xl text-sky-500">YABA</h1>
      </Link>
      <ul className="flex flex-col list-none">
        <li className="items-center">
          <Link className={"text-xs uppercase py-3 font-bold block "} to="/">
            <i className={"fas fa-home mr-2 text-sm "}> </i>
            <span className="hidden lg:inline-block">Overview</span>
          </Link>
        </li>
        <li className="items-center">
          <Link
            className={"text-xs uppercase py-3 font-bold block "}
            to="/transaction"
          >
            <i className={"fas fa-chart-pie mr-2 text-sm "}> </i>
            <span className="hidden lg:inline-block">Transaction</span>
          </Link>
        </li>
        <li className="items-center">
          <Link
            className={"text-xs uppercase py-3 font-bold block "}
            to="/analytics"
          >
            <i className={"fas fa-chart-pie mr-2 text-sm "}> </i>
            <span className="hidden lg:inline-block">Analytics</span>
          </Link>
        </li>
        <li className="items-center">
          <Link
            className={"text-xs uppercase py-3 font-bold block "}
            to="/wallet"
          >
            <i className={"fas fa-wallet mr-2 text-sm "}> </i>
            <span className="hidden lg:inline-block">Wallet</span>
          </Link>
        </li>
        <li className="items-center">
          <Link
            className={"text-xs uppercase py-3 font-bold block "}
            to="/invoice"
          >
            <i className={"fas fa-receipt mr-2 text-sm "}> </i>
            <span className="hidden lg:inline-block">Invoice</span>
          </Link>
        </li>
        <li className="items-center">
          <Link
            className={"text-xs uppercase py-3 font-bold block "}
            to="/account"
          >
            <i className={"fas fa-user mr-2 text-sm "}> </i>
            <span className="hidden lg:inline-block">Account</span>
          </Link>
        </li>
        <li className="items-center">
          <Link
            className={"text-xs uppercase py-3 font-bold block "}
            to="/settings"
          >
            <i className={"fas fa-wrench mr-2 text-sm "}> </i>
            <span className="hidden lg:inline-block">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
