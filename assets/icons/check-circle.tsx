import React from "react";
import { ISvgIcon } from "@/types/interface";

export const IconCheckCircle: ISvgIcon = ({
  strokeColor = "text-black-500",
  strokeWidth = 1.5,
  width = "w-5",
  height = "h-5",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    className={`stroke-current ${strokeColor} ${width} ${height}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
