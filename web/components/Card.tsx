import React from "react";
import { ICardProps } from "../types/interface";

const Card: React.FC<ICardProps> = ({ title, children }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="shadow-lg rounded-lg overflow-hidden bg-base-200">
          <div className="py-3 px-5 border-b-2 border-base-100">
            <div className="text-primary text-lg font-semibold">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Card;
