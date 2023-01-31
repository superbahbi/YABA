import React from "react";
import { IBalanceProps } from "../types/interface";

const Balance: React.FC<IBalanceProps> = ({ data }) => {
  return (
    <>
      {/* <div className="flex flex-row mb-4">
        <i className="flex justify-center items-center pr-4 mr-4 border-r-2 border-primary">
          {icon}
        </i>
        <div className="flex flex-col">
          <span className="text-xs">{title}</span>
          <span className="text-md font-semibold text-accent">${amount}</span>
        </div>
      </div> */}
      <div className="stats stats-vertical flex items-center shadow lg:stats-horizontal">
        {data.map((item, index) => (
          <div key={index} className="stat place-items-center">
            <div className="stat-title">{item.title}</div>
            <div className="stat-value text-lg">{item.amount}</div>
            <div className="stat-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Balance;
