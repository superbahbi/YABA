import React from "react";
import { ICreditScoreProps } from "../types/interface";

const CreditScore: React.FC<ICreditScoreProps> = ({ score }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl font-bold">{score}</h1>
        <p className="text-sm">Your credit score is Legitness!</p>
      </div>

      <div className="relative border border-emerald-900  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
        <div
          className="absolute h-20 border-r-2 border-base-content"
          style={{ width: `${((score - 300) / 550) * 100}%` }}
        ></div>
        <div className="flex flex-row justify-between">
          <div className="w-full h-20 "></div>
          <div className="w-full h-20 "></div>
          <div className="w-full h-20 "></div>
          <div className="w-full h-20 border-r-0 border-red-50"></div>
        </div>
      </div>
      <div className="flex flex-row justify-between text-xs pt-2">
        <div>300</div>
        <div>440</div>
        <div>580</div>
        <div>710</div>
        <div>850</div>
      </div>
    </>
  );
};
export default CreditScore;
