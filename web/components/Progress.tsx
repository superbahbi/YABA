import React from "react";
import { ProgressProps } from "../types/interface";

const Progress: React.FC<ProgressProps> = ({
  title,
  currentProgress,
  totalProgress,
  icon,
  color,
}) => {
  return (
    <>
      <div className="flex bg-gray-100 rounded-lg p-4 my-2">
        <div
          className={`flex justify-center items-center ${color} p-2 rounded-xl mr-2`}
        >
          {icon}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row pb-2 justify-between items-end">
            <div className="text-midnight text-sm font-semibold">{title}</div>
            <div className="text-gray-600 text-xs">
              {currentProgress}/{totalProgress}
            </div>
          </div>
          <div className="relative bg-gray-300 h-1 rounded-lg">
            <div
              className={`block bg-sky-600 h-full rounded-lg`}
              style={{ width: `${currentProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Progress;
