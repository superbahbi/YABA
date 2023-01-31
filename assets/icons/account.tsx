import React from "react";
import { ISvgIcon } from "@/types/interface";

export const IconAccount: ISvgIcon = ({
  strokeColor = "text-black-500",
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
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);
