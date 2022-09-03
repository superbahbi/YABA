import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { MainProps } from "../types/interface";

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <div
        data-theme="dark"
        className="flex flex-col justify-center w-full min-h-screen bg-base-100"
      >
        <Header />
        <div className="flex flex-row mx-auto md:w-[1440px]">
          <Navbar />
          <div className="lg:ml-56 md:ml-12 pt-14">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Main;
