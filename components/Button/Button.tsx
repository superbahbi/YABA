import React from "react";

interface IButtonProps {
  direction?: "left-0" | "right-0" | "top-0" | "bottom-0";
  inset?: "inset-x-0" | "inset-y-0";
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

/**
 * Button component
 * @param {string} direction - direction of the button
 * @param {string} inset - inset of the button
 * @param {string} children - children of the button
 * @param {string} type - type of the button
 * @param {string} className - className of the button
 * @param {boolean} disabled - disabled state of the button
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
export const Button: React.FC<IButtonProps> = ({
  children,
  direction = "left-0",
  inset = "inset-y-0",
  type = "button",
  className,
  disabled,
}) => {
  return (
    <div className={className} data-testid="button-test">
      <button
        type={type}
        disabled={disabled}
        className="group relative inline-block w-full overflow-hidden border border-base-content px-8 py-3 focus:outline-none"
      >
        <span
          className={`absolute ${inset} ${direction} ${
            inset === "inset-x-0" ? "h-[2px]" : "w-[2px]"
          } bg-accent-focus transition-all ${
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
