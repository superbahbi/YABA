import React from "react";
import { ILPBodyProps } from "../../types/LPinterface";
import LPBodyItem from "./LPBodyItem";
import yabaOne from "/assets/images/yaba-signup.png";
import yabaTwo from "/assets/images/yaba-login.png";

const LPBody: React.FC<ILPBodyProps> = () => {
  return (
    <section className="grid justify-items-center py-12 md:py-32 px-4 lg:px-20">
      <div className="grid max-w-screen-xl w-full min-h-screen">
        <div className="grid lg:grid-cols-2 lg:gap-10 lg:gap-y-32">
          <h2 className="text-4xl lg:text-6xl font-semibold pb-14 h-fit lg:col-span-2 ">
            We do it all.
          </h2>
          <LPBodyItem
            heading="Purchase guarantee."
            imgSrc="https://i.postimg.cc/mZFsrnbZ/i-Phone-13-Pro.png"
            num={"01."}
            textOne=""
            textTwo=""
          />
          <LPBodyItem
            heading="Access all accounts."
            imgSrc={yabaTwo}
            num={"02."}
            textOne=""
            textTwo=""
          />
          <LPBodyItem
            heading="Experience greatness."
            imgSrc={yabaOne}
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
