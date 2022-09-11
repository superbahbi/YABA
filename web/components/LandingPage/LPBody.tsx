import Image from "next/image";
import React from "react";
import { ILPBodyProps } from "../../types/LPinterface";
import LPBodyItem from "./LPBodyItem";

const LPBody: React.FC<ILPBodyProps> = () => {
  return (
    <section className="grid justify-items-center pt-12 px-4 lg:px-20">
      <div className="grid max-w-screen-xl w-full min-h-screen">
        <div className="grid lg:grid-cols-2 lg:gap-10 lg:gap-y-32">
          <h1 className="text-4xl lg:text-6xl pb-14 h-fit lg:col-span-2 lg:sticky lg:top-16 z-10">
            we do it all.
          </h1>
          <LPBodyItem
            heading="brand experience"
            imgSrc="https://i.postimg.cc/mZFsrnbZ/i-Phone-13-Pro.png"
            num={"01."}
            textOne=""
            textTwo=""
          />
          <LPBodyItem
            heading="brand experience"
            imgSrc="https://i.postimg.cc/mZFsrnbZ/i-Phone-13-Pro.png"
            num={"02."}
            textOne=""
            textTwo=""
          />
          <LPBodyItem
            heading="brand experience"
            imgSrc="https://i.postimg.cc/mZFsrnbZ/i-Phone-13-Pro.png"
            num={"03."}
            textOne=""
            textTwo=""
          />
        </div>
      </div>
    </section>
  );
};
export default LPBody;
