import React from "react";
import NextLink from "next/link";

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
    "overview",
    "transaction",
    "analytics",
    "wallet",
    "invoice",
    "account",
    "settings",
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
    <ul className="menu p-2 rounded-box lg:px-6 md:px-3 lg:mr-6 pt-4 lg:w-58">
      <NextLink
        className="hidden lg:block text-center text-sm uppercase font-bold p-4 px-0"
        href="/overview"
      >
        <h1 className="text-2xl text-primary">YABA</h1>
      </NextLink>
      {icons.map((Icon, index) => {
        return (
          <NextLink href={"/" + linkNames[index]} key={index}>
            <li className="flex flex-row text-neutral active:text-white">
              <span>
                <Icon />{" "}
                <span className="hidden uppercase lg:inline-block">
                  {linkNames[index]}
                </span>
              </span>
            </li>
          </NextLink>
        );
      })}
    </ul>
    // </nav>
  );
};
export default Navbar;
