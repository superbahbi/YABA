import React from "react";
import { Link } from "react-router-dom";
import {
  IconHome,
  IconChart,
  IconWallet,
  IconInvoice,
  IconAccount,
  IconSetting,
  IconTransaction,
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
    IconTransaction,
    IconChart,
    IconWallet,
    IconInvoice,
    IconAccount,
    IconSetting,
  ];
  return (
    <ul className="menu p-2 rounded-box lg:px-6 md:px-3 lg:mr-6 pt-4 lg:w-56">
      <Link
        className="hidden lg:block text-center text-sm uppercase font-bold p-4 px-0"
        to="/overview"
      >
        <h1 className="text-2xl text-primary">YABA</h1>
      </Link>
      {icons.map((Icon, index) => {
        return (
          <li key={index}>
            <Link
              className="text-neutral active:text-white"
              to={"/" + linkNames[index].toLowerCase()}
            >
              <Icon />
              <span className="hidden lg:inline-block">{linkNames[index]}</span>
            </Link>
          </li>
        );
      })}
    </ul>
    // </nav>
  );
};
export default Navbar;
