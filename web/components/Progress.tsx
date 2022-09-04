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
      <div className="flex bg-base-100 rounded-lg p-4 m-4">
        <div
          className={`flex justify-center items-center ${color} p-2 rounded-xl mr-4`}
        >
          {icon}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row pb-2 justify-between items-end">
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
