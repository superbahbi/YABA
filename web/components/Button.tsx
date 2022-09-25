import React from "react";
import NextLink from "next/link";
interface ButtonProps {
  direction?: "left-0" | "right-0" | "top-0" | "bottom-0";
  inset?: "inset-x-0" | "inset-y-0";
  children: React.ReactNode;
  link?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  direction,
  inset,
  link = "/overview",
  type = "button",
}) => {
  return (
    <>
      <NextLink href={link}>
        <button
          type={type}
          className="relative inline-block px-8 py-3 overflow-hidden border border-base-content group focus:outline-none focus:ring"
        >
          <span
            className={`absolute ${inset} ${direction} ${
              inset === "inset-x-0" ? "h-[2px]" : "w-[2px]"
            } transition-all bg-accent-focus ${
              inset === "inset-x-0"
                ? "group-hover:h-full"
                : "group-hover:w-full"
            } group-active:bg-accent-focus`}
          ></span>
          <span className="relative text-sm font-medium text-base-content transition-colors group-hover:text-white">
            {children}
          </span>
        </button>
      </NextLink>
    </>
  );
};
export default Button;
