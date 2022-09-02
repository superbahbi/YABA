import React from "react";
import { BalanceProps } from "../types/interface";

const Balance: React.FC<BalanceProps> = ({ title, amount, icon }) => {
  return (
    <>
      <div className="flex flex-row mb-4">
        <i className="flex justify-center items-center pr-4 mr-4 border-r-2 border-gray-100">
          {icon}
        </i>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">{title}</span>
          <span className="text-md font-semibold text-accent">${amount}</span>
        </div>
      </div>
    </>
  );
};
export default Balance;
