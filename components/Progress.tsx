import React from "react";
import { IProgressProps } from "../types/interface";

const Progress: React.FC<IProgressProps> = ({
  title,
  currentProgress,
  totalProgress,
  icon,
  color,
}) => {
  return (
    <>
      <div className="m-4 flex rounded-lg bg-base-100 p-4">
        <div
          className={`flex items-center justify-center ${color} mr-4 rounded-xl p-2`}
        >
          {icon}
        </div>
        <div className="flex w-full flex-col">
          <div className="flex flex-row items-end justify-between pb-2">
            <div className="text-midnight text-sm font-semibold">{title}</div>
            <div className="text-xs">
              {currentProgress}/{totalProgress}
            </div>
          </div>

          <progress
            className="progress progress-accent h-1 rounded-lg"
            value={currentProgress}
            max={totalProgress}
          ></progress>
        </div>
      </div>
    </>
  );
};
export default Progress;
