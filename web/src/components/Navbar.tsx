import React from "react";
import { Link } from "react-router-dom";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden border-r-2 border-blueLight bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto">
        <Link
          className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          to="/"
        >
          YABA
        </Link>
        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <li className="items-center">
            <Link className={"text-xs uppercase py-3 font-bold block "} to="/">
              <i className={"fas fa-home mr-2 text-sm "}> </i>
              Overview
            </Link>
          </li>
          <li className="items-center">
            <Link
              className={"text-xs uppercase py-3 font-bold block "}
              to="/analytics"
            >
              <i className={"fas fa-chart-pie mr-2 text-sm "}> </i>
              Analytics
            </Link>
          </li>
          <li className="items-center">
            <Link
              className={"text-xs uppercase py-3 font-bold block "}
              to="/wallet"
            >
              <i className={"fas fa-wallet mr-2 text-sm "}> </i>
              Wallet
            </Link>
          </li>
          <li className="items-center">
            <Link
              className={"text-xs uppercase py-3 font-bold block "}
              to="/invoices"
            >
              <i className={"fas fa-receipt mr-2 text-sm "}> </i>
              Invocies
            </Link>
          </li>
          <li className="items-center">
            <Link
              className={"text-xs uppercase py-3 font-bold block "}
              to="/account"
            >
              <i className={"fas fa-user mr-2 text-sm "}> </i>
              Account
            </Link>
          </li>
          <li className="items-center">
            <Link
              className={"text-xs uppercase py-3 font-bold block "}
              to="/settings"
            >
              <i className={"fas fa-wrench mr-2 text-sm "}> </i>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
