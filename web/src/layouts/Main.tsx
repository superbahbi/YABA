import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { MainProps } from "../types/interface";

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-row w-full min-h-screen bg-gray-100">
        <div className="sticky top-0 h-screen">
          <Navbar />
        </div>
        <div className="flex flex-col w-full">
          <div>
            <Header />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
export default Main;
