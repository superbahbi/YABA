import React from "react";
import { ICardProps } from "../types/interface";

const Card: React.FC<ICardProps> = ({ title, children }) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="overflow-hidden rounded-lg bg-base-200 shadow-lg">
          <div className="border-b-2 border-base-100 py-3 px-5">
            <div className="text-lg font-semibold text-primary">
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
