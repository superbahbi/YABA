import React from "react";
import Navbar from "../components/Navbar";
import { MainProps } from "../types/interface";

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-row bg-gray-100">
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
export default Main;
