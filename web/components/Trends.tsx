import React from "react";
import { ITrendsProps } from "../types/interface";

const Trends: React.FC<ITrendsProps> = ({
  title,
  amount,
  maxProgress,
  barColor,
}) => {
  return (
    <>
      <div className="flex flex-row items-center place-self-center p-4">
        <span className="min-w-[50px] text-sm">{title}</span>
        <progress
          className={`progress progress-${barColor} h-1 rounded-lg pr-4`}
          value={amount}
          max={maxProgress || amount}
        ></progress>
        <span className="text-sm">${amount}</span>
      </div>
    </>
  );
};
export default Trends;
