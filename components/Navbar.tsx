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
    "transactions",
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
    <div className="z-1 fixed top-16 overflow-x-hidden">
      <ul className="lg:w-58 menu rounded-box hidden p-2 pt-4 md:block md:px-3 lg:mr-6 lg:px-6">
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
