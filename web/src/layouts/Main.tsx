import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { MainProps } from "../types/interface";

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-row justify-center w-full min-h-screen bg-base-100">
        <div className="sticky top-0 h-screen">
          <Navbar />
        </div>
        <div className="flex flex-col md:w-[1440px]">
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
