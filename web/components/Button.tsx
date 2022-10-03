import React from "react";
import { IButtonProps } from "../types/interface";

/**
 * Button component
 * @param {string} direction - direction of the button
 * @param {string} inset - inset of the button
 * @param {string} children - children of the button
 * @param {string} type - type of the button
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Button direction="left-0" inset="inset-y-0">test</Button>
 * @example
 * <Button direction="right-0" inset="inset-y-0">test</Button>
 * @example
 * <Button direction="top-0" inset="inset-x-0">test</Button>
 * @example
 * <Button direction="bottom-0" inset="inset-x-0">test</Button>
 * @example
 * <Button direction="left-0" inset="inset-y-0" type="submit">test</Button>
 */
const Button: React.FC<IButtonProps> = ({
  children,
  direction = "left-0",
  inset = "inset-y-0",
  type = "button",
  className,
  disabled,
}) => {
  return (
    <div className={className}>
      <button
        type={type}
        disabled={disabled}
        className="w-full relative inline-block px-8 py-3 overflow-hidden border border-base-content group focus:outline-none"
      >
        <span
          className={`absolute ${inset} ${direction} ${
            inset === "inset-x-0" ? "h-[2px]" : "w-[2px]"
          } transition-all bg-accent-focus ${
            inset === "inset-x-0" ? "group-hover:h-full" : "group-hover:w-full"
          } group-active:bg-accent-focus`}
        ></span>
        <span className="relative text-sm font-medium text-base-content transition-colors group-hover:text-white">
          {children}
        </span>
      </button>
    </div>
  );
};
export default Button;
