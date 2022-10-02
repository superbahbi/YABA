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
import { INavbarProps } from "../types/interface";

const Navbar: React.FC<INavbarProps> = () => {
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
    <div className="fixed z-1 top-16 overflow-x-hidden">
      <ul className="menu rounded-box hidden md:block p-2 pt-4 md:px-3 lg:mr-6 lg:px-6 lg:w-58">
        {icons.map((Icon, index) => {
          return (
            <NextLink href={"/" + linkNames[index]} key={index}>
              <li className="flex flex-row active:text-white">
                <div className="">
                  <Icon />
                  <div className="hidden capitalize lg:block">
                    {linkNames[index]}
                  </div>
                </div>
              </li>
            </NextLink>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
