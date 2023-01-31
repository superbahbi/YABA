import React from "react";
import { ISvgIcon } from "@/types/interface";

export const IconArrowLeft: ISvgIcon = ({
  strokeColor = "text-green-500",
  strokeWidth = 1.5,
  width = 24,
  height = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    className={`stroke-current ${strokeColor} h-5 w-5`}
    width={width}
    height={height}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);
