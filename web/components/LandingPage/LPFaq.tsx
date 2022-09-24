import Link from "next/link";
import React from "react";
import { ILPFaqProps } from "../../types/LPinterface";

const LPFaq: React.FC<ILPFaqProps> = () => {
  return (
    <>
      <div className="relative mx-auto w-full py-16 px-5 font-sans sm:px-20 md:max-w-screen-lg lg:py-24">
        <h1 className="mb-5 text-center font-sans text-3xl md:text-5xl font-bold">
          Frequently asked Questions
        </h1>
        <p className="mb-12 text-center text-lg text-gray-500">
          We have written down answers to some of the frequently asked
          questions. But, if you still have any queries, feel free to ping us on
          chat.
        </p>
        <ul className="space-y-4">
          <li className="text-left">
            <label
              htmlFor="accordion-1"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input
                className="peer hidden"
                type="checkbox"
                id="accordion-1"
                checked
                onChange={() => {
                  console.log("clicked");
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                <h3 className="text-sm lg:text-base">
                  Is there a free trial with Appsy?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, consectetur adipisicing elit. Adipisci
                    eligendi, recusandae voluptatum distinctio facilis
                    necessitatibus aperiam ut? Dolor mollitia modi aliquam, non
                    sint at reprehenderit commodi dignissimos quo unde
                    asperiores officiis quos laboriosam similique nihil.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              htmlFor="accordion-2"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-2" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                <h3 className="text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                    elit. Adipisci eligendi, recusandae voluptatum distinctio
                    facilis necessitatibus aperiam ut? Dolor mollitia modi
                    aliquam, non sint at reprehenderit commodi dignissimos quo
                    unde asperiores officiis quos laboriosam similique nihil.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              htmlFor="accordion-3"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-3" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                <h3 className="text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio.?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                    elit. Adipisci eligendi, recusandae voluptatum distinctio
                    facilis necessitatibus aperiam ut? Dolor mollitia modi
                    aliquam, non sint at reprehenderit commodi dignissimos quo
                    unde asperiores officiis quos laboriosam similique nihil.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              htmlFor="accordion-4"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-4" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
                <h3 className="text-sm border-indigo-600 lg:text-base">
                  Lorem ipsum dolor sit amet.?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                    elit. Adipisci eligendi, recusandae voluptatum distinctio
                    facilis necessitatibus aperiam ut? Dolor mollitia modi
                    aliquam, non sint at reprehenderit commodi dignissimos quo
                    unde asperiores officiis quos laboriosam similique nihil.
                  </p>
                </div>
              </div>
            </label>
          </li>
        </ul>
        <div className="mt-20 flex justify-center">
          <Link href="/questions">
            <span className="mt-10 bg-blue-600 px-6 py-3 font-bold text-white outline-none ring-blue-300 focus:ring">
              Still have questions?
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default LPFaq;
