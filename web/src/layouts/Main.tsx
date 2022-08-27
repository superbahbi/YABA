import React from "react";
import Navbar from "../components/Navbar";
import { MainProps } from "../types/interface";

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
export default Main;
