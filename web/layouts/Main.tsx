import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { IMainProps } from "../types/interface";

const Main: React.FC<IMainProps> = ({ children }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center w-full bg-base-100">
        <div className="md:max-w-screen-xl w-screen md:mx-auto">
          <Header />
          <div className="flex flex-row">
            <Navbar />
            <div className="lg:ml-56 md:ml-12">{children}</div>
          </div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
export default Main;
