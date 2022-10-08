import React from "react";
import Image from "next/image";
import FeatureImage from "../../assets/images/feature-image.png";
import { ILPFeatureProps } from "../../types/LPinterface";

const LPFeature: React.FC<ILPFeatureProps> = () => {
  return (
    <>
      <section className="mx-auto mt-24 flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-md pr-20 lg:pt-28">
          <Image
            src={FeatureImage}
            alt="Feature Image"
            width={900}
            height={900}
          />
        </div>
        <div className="">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-focus text-white shadow-lg shadow-indigo-600/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>
          </div>
          <h2 className="mb-10 max-w-lg text-4xl font-semibold leading-snug lg:text-5xl lg:leading-snug">
            a <span className="text-accent-focus">revolutionary</span> way to
            manage your finances.
          </h2>
          <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
            <div>
              <p className="mb-6 border-l-4 border-accent-focus pl-4 text-2xl leading-10 text-accent-focus">
                all your accounts. All in one place.
              </p>
              <p className="text-lg">
                see it all at a glance when you link your cash accounts, credit
                cards, investments, and bills.
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 border-accent-focus pl-4 text-2xl leading-10 text-accent-focus">
                keep your cashflow crystal clear.
              </p>
              <p className="text-lg">
                effortlessly track your cashflow and gain insights that’ll help
                you see easy opportunities to save.
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 border-accent-focus pl-4 text-2xl leading-10 text-accent-focus">
                bill negotiation.
              </p>
              <p className="text-lg">
                join the other Minters who’ve already racked up a combined $2m+
                in savings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LPFeature;
