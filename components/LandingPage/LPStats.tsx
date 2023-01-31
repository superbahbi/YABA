import React from "react";

import { ILPStatsProps } from "../../types/LPinterface";
const LPStats: React.FC<ILPStatsProps> = () => {
  return (
    <section className=" bg-base-300 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-semibold leading-7  sm:text-4xl xl:text-5xl">
            we are <br className="sm:hidden" />
            growing <span className="text-accent-focus">rapidly.</span>
          </h2>
          <hr className="mt-4 h-1 w-32 border-none bg-[#0b1840] sm:mx-auto sm:mt-8" />
        </div>

        <div className="mx-auto mt-20 grid max-w-screen-xl grid-cols-1  gap-x-8 gap-y-12 text-center sm:grid-cols-3 sm:text-left lg:gap-0">
          <div className="relative mb-3 text-left lg:px-12">
            <div className="absolute left-3 -top-4 h-16 w-16 rounded-full bg-accent-focus"></div>
            <p className="relative text-2xl font-semibold md:text-6xl">25m+</p>
            <p className="relative mt-5">customer served</p>
          </div>

          <div className="relative mb-3 text-left lg:px-12">
            <div className="absolute left-3 -top-4 h-16 w-16 rounded-full bg-accent-focus"></div>
            <div className="absolute bottom-0 left-0 hidden h-16 w-px lg:block"></div>
            <p className="relative text-2xl font-semibold md:text-6xl">99%</p>
            <p className="relative mt-5 ">customer retention rate</p>
          </div>

          <div className="relative mb-3 text-left lg:px-12">
            <div className="absolute left-3 -top-4 h-16 w-16 rounded-full bg-accent-focus"></div>
            <div className="absolute bottom-0 left-0 hidden h-16 w-px lg:block"></div>
            <p className="relative m-0 text-2xl font-semibold md:text-6xl">
              100+
            </p>
            <p className="relative mt-5 ">
              supported bank and financial institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LPStats;
