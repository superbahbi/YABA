import React from "react";

interface ButtonProps {
  direction?: "left-0" | "right-0" | "top-0" | "bottom-0";
  inset?: "inset-x-0" | "inset-y-0";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, direction, inset }) => {
  return (
    <>
      <button className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring">
        <span
          className={`absolute ${inset} ${direction} ${
            inset === "inset-x-0" ? "h-[2px]" : "w-[2px]"
          } transition-all bg-indigo-600 group-hover:${
            inset === "inset-x-0" ? "h-full" : "w-full"
          } group-active:bg-indigo-500`}
        ></span>
        <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          {children}
        </span>
      </button>
    </>
  );
};
export default Button;
