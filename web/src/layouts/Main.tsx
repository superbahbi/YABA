import React from "react";
import Navbar from "../components/Navbar";
import { MainProps } from "../types/interface";

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-8">
        <div>
          <Navbar />
        </div>
        <div className="col-span-7">{children}</div>
      </div>
    </>
  );
};
export default Main;
