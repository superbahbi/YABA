import React from "react";
import { SvgIcon } from "../../types/interface";

export const IconChevronRight: SvgIcon = ({
  strokeColour = "text-black-500",
  strokeWidth = 1.5,
  width = 24,
  height = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    className={`stroke-current ${strokeColour} w-6 h-6`}
    width={width}
    height={height}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);
