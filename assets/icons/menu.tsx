import React from "react";
import { ISvgIcon } from "@/types/interface";

export const IconMenu: ISvgIcon = ({
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
      d="M4 6h16M4 12h16M4 18h7"
    />
  </svg>
);
