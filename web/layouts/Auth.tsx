/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { IconArrowLeft } from "../assets/icons";
import { themeChange } from "theme-change";

interface AuthProps {
  children: React.ReactNode;
}
const Auth: React.FC<AuthProps> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <div className="min-h-screen lg:bg-[linear-gradient(90deg,_white_70%,_yellow_70%)]">
        <div className="mx-auto pt-20 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="lg:max-w-lg lg:pr-5">
              <div className="max-w-xl">
                <div>
                  <p className="mb-2 inline-block rounded-full px-3 text-xs font-semibold uppercase tracking-wider text-blue-900">
                    New and improved
                  </p>
                </div>
                <h2 className="mb-6 max-w-lg text-3xl font-bold leading-snug tracking-tight text-blue-600 sm:text-5xl sm:leading-snug">
                  Budget platform for your{" "}
                  <span className="my-1 inline-block border-b-8 font-light text-blue-600">
                    financial needs
                  </span>
                </h2>
                <p className="text-base text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque it.
                </p>
              </div>
            </div>
            <div className="relative text-blue-600 lg:ml-32 lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
              <div className="-mx-4 flex flex-col bg-gray-50 px-4 py-6 text-center sm:px-12 sm:text-left lg:bg-white lg:py-10 lg:shadow-xl lg:shadow-blue-900/20">
                <button
                  className="btn btn-ghost btn-circle"
                  onClick={() => router.back()}
                >
                  <IconArrowLeft strokeColor="text-secondary" />
                </button>

                <div className="p-4">{children} </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div classNameName="min-w-screen min-h-screen">
        <div classNameName="h-screen bg-white md:from-base-300 md:to-slate-200 md:bg-linear-gradient-50  relative">
          <div classNameName="md:absolute md:top-1/2 md:left-1/2 md:w-2/5 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <div classNameName="flex flex-row justify-center">
              <div classNameName="hidden xxl:flex xxl:w-1/2 bg-white/90 rounded-l-3xl p-8">
                <div classNameName="w-3/4 flex flex-col justify-center mx-auto">
                  <div classNameName="flex my-4">
                    <div classNameName="flex-shrink-0">
                      <div classNameName="flex h-12 w-12 items-center justify-center rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          data-inspector="10:142"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                        >
                          <linearGradient
                            id="SVGID_1_"
                            x1="261.155"
                            x2="261.155"
                            y1="282.962"
                            y2="88.71"
                            classNameName="gradient-element"
                            data-inspector="11:142"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              classNameName="primary-color-gradient"
                              data-inspector="12:45"
                              offset="0"
                              stopColor="#2AFADF"
                            ></stop>
                            <stop
                              classNameName="secondary-color-gradient"
                              data-inspector="13:45"
                              offset="1"
                              stopColor="#4C83FF"
                            ></stop>
                          </linearGradient>
                          <path
                            fill="url(#SVGID_1_)"
                            d="M153.3 290c7.7-12.5 21.4-20.9 37.2-20.9h92.9c22.7 0 26.6-16.4 26.6-39.1V99l59 48.8V290H153.3z"
                            data-inspector="15:49"
                          ></path>
                          <linearGradient
                            id="SVGID_2_"
                            x1="80.197"
                            x2="444.639"
                            y1="331.982"
                            y2="331.982"
                            data-inspector="16:49"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              data-inspector="17:49"
                              offset="0"
                              stopColor="#2AFADF"
                            ></stop>
                            <stop
                              data-inspector="18:49"
                              offset="1"
                              stopColor="#4C83FF"
                            ></stop>
                          </linearGradient>
                          <path
                            fill="url(#SVGID_2_)"
                            d="M228.6 463.1H128.2c-13.3 0-25.3-5.4-33.9-14.1-8.6-8.6-14-20.4-14.1-33.5-.2-26.6 22.2-48.4 48.8-48.4h188.9c28.8 0 52.1-23.3 52.1-52.1v-69.8c0-28.8 23.3-44.3 52.1-44.3 12.4 0 22.5 10.1 22.5 22.5v206.5c0 18.4-14.9 33.3-33.3 33.3H228.6zm0 0"
                            data-inspector="20:49"
                          ></path>
                          <g data-inspector="21:49">
                            <path
                              fill="#4C83FF"
                              d="M234.3 19.1v25h-22.5v-25h22.5z"
                              classNameName="secondary-color"
                              data-inspector="22:49"
                            ></path>
                            <path
                              fill="#2AFADF"
                              d="M188.1 19.1v25h-21.6v-25h21.6z"
                              classNameName="primary-color"
                              data-inspector="23:49"
                            ></path>
                            <path
                              fill="#4C83FF"
                              d="M325.7 19.1V74h-22.5V19.1h22.5z"
                              classNameName="secondary-color"
                              data-inspector="24:49"
                            ></path>
                            <path
                              fill="#2AFADF"
                              d="M279.5 19.1V74H258V19.1h21.5z"
                              classNameName="primary-color"
                              data-inspector="25:49"
                            ></path>
                          </g>
                          <path
                            d="M131.3 33.8c0 4.4-3.6 8-8 8h-43c-4.4 0-8-3.6-8-8s3.6-8 8-8h43c4.4 0 8 3.6 8 8zm-29.5 22H28c-4.4 0-8 3.6-8 8s3.6 8 8 8h73.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM491.2 472h-15.8v-15.8c0-4.4-3.6-8-8-8s-8 3.6-8 8V472h-15.8c-4.4 0-8 3.6-8 8s3.6 8 8 8h15.8v15.8c0 4.4 3.6 8 8 8s8-3.6 8-8V488h15.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM404 66c20.1 0 36.5-16.4 36.5-36.5 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 11.3-9.2 20.5-20.5 20.5-4.4 0-8 3.6-8 8s3.6 8 8 8zm78 0c4.4 0 8-3.6 8-8s-3.6-8-8-8c-11.3 0-20.5-9.2-20.5-20.5 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 20.1 16.4 36.5 36.5 36.5zm-28.5 49.5c4.4 0 8-3.6 8-8 0-11.3 9.2-20.5 20.5-20.5 4.4 0 8-3.6 8-8s-3.6-8-8-8c-20.1 0-36.5 16.4-36.5 36.5 0 4.5 3.6 8 8 8zm-13-8c0-20.1-16.4-36.5-36.5-36.5-4.4 0-8 3.6-8 8s3.6 8 8 8c11.3 0 20.5 9.2 20.5 20.5 0 4.4 3.6 8 8 8s8-3.5 8-8zM38.3 223.3c-5.9 0-10.8 4.8-10.8 10.8s4.8 10.8 10.8 10.8c5.9 0 10.8-4.8 10.8-10.8s-4.9-10.8-10.8-10.8zm.2 38.7c-4.4 0-8 3.6-8 8v131.4c0 4.4 3.6 8 8 8s8-3.6 8-8V270c0-4.5-3.6-8-8-8zm28.9 213.9c0 14.6-11.8 26.4-26.4 26.4s-26.4-11.8-26.4-26.4 11.8-26.4 26.4-26.4 26.4 11.9 26.4 26.4zm-16 0c0-5.7-4.7-10.4-10.4-10.4s-10.4 4.7-10.4 10.4 4.7 10.4 10.4 10.4 10.4-4.7 10.4-10.4z"
                            data-inspector="27:25"
                          ></path>
                          <linearGradient
                            id="SVGID_3_"
                            x1="190.492"
                            x2="309.783"
                            y1="253.414"
                            y2="253.414"
                            data-inspector="28:25"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              data-inspector="29:25"
                              offset="0"
                              stopColor="#2AFADF"
                            ></stop>
                            <stop
                              data-inspector="30:25"
                              offset="1"
                              stopColor="#4C83FF"
                            ></stop>
                          </linearGradient>
                          <path
                            fill="url(#SVGID_3_)"
                            d="M287.7 217.2h22.1v72.6H190.5v-13.1c0-10 8.1-10.6 18.1-10.6h42.9c18 0 18.1-1.4 18.1-30.7 0-10.1 8.1-18.2 18.1-18.2z"
                            data-inspector="32:25"
                          ></path>
                          <g data-inspector="33:25">
                            <path
                              d="M446.8 265.1c4.4 0 8-3.6 8-8v-31.7c0-16.2-13.2-29.4-29.4-29.4H377v-48.3c0-2.1-.9-4.2-2.4-5.7l-32-31.8c-3.1-3.1-8.2-3.1-11.3 0-3.1 3.1-3.1 8.2 0 11.3l29.6 29.4v130.5h-43.2v-64.5c0-4.4-3.6-8-8-8h-118c-4.4 0-8 3.6-8 8v64.5h-28.8V162.3c0-.3.1-.6.1-1s0-.6-.1-1V107h146.8v72.8H199.3v-50c0-4.4-3.6-8-8-8s-8 3.6-8 8v58c0 4.4 3.6 8 8 8h118.4c4.4 0 8-3.6 8-8V99c0-4.4-3.6-8-8-8H146.9c-4.4 0-8 3.6-8 8v54.3h-34.3c-16.2 0-29.4 13.2-29.4 29.4v256.6c0 16.2 13.2 29.4 29.4 29.4h320.8c16.2 0 29.4-13.2 29.4-29.4V289.6c0-4.4-3.6-8-8-8H377v-69.5h48.4c7.4 0 13.4 6 13.4 13.4v31.7c0 4.3 3.6 7.9 8 7.9zm-247.1-39.9h102.1v56.5H199.7v-56.5zm239.1 214.1c0 7.4-6 13.4-13.4 13.4H104.6c-7.4 0-13.4-6-13.4-13.4V182.7c0-7.4 6-13.4 13.4-13.4h34.3v112.3h-24.3c-4.4 0-8 3.6-8 8v131.6c0 4.4 3.6 8 8 8s8-3.6 8-8V297.6h68.2c.3 0 .6.1.9.1h118.1c.3 0 .6 0 .9-.1h128.1v141.7z"
                              data-inspector="34:25"
                            ></path>
                            <path
                              d="M280.2 166.2c4.4 0 8-3.6 8-8v-29.6c0-4.4-3.6-8-8-8h-14.8c-4.4 0-8 3.6-8 8s3.6 8 8 8h6.8v21.6c0 4.5 3.6 8 8 8z"
                              data-inspector="35:25"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div classNameName="ml-4">
                      <h5 classNameName="flex flex-col text-lg font-bold leading-6 text-secondary">
                        <span>All your accounts</span>
                        <span>All in one place.</span>
                      </h5>
                      <p classNameName="mt-2 text-base leading-6 text-primary">
                        See it all at a glance when you link your cash accounts,
                        credit cards, investments, and bills.
                      </p>
                    </div>
                  </div>
                  <div classNameName="flex my-4">
                    <div classNameName="flex-shrink-0 ">
                      <div classNameName="flex h-12 w-12 items-center justify-center rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          data-inspector="50:49"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                        >
                          <path
                            d="M188.5 335.3c0 4.4-3.6 8-8 8h-43c-4.4 0-8-3.6-8-8s3.6-8 8-8h43c4.4 0 8 3.6 8 8zM301 461.2h-73.8c-4.4 0-8 3.6-8 8s3.6 8 8 8H301c4.4 0 8-3.6 8-8s-3.6-8-8-8zm175.7-76H461v-15.8c0-4.4-3.6-8-8-8s-8 3.6-8 8v15.8h-15.8c-4.4 0-8 3.6-8 8s3.6 8 8 8H445V417c0 4.4 3.6 8 8 8s8-3.6 8-8v-15.8h15.8c4.4 0 8-3.6 8-8s-3.6-8-8.1-8zM65.3 105.4h15.8c4.4 0 8-3.6 8-8s-3.6-8-8-8H65.3V73.6c0-4.4-3.6-8-8-8s-8 3.6-8 8v15.8H33.5c-4.4 0-8 3.6-8 8s3.6 8 8 8h15.8v15.8c0 4.4 3.6 8 8 8s8-3.6 8-8v-15.8zm321.4-39.1c20.3 0 36.8-16.5 36.8-36.8 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 11.4-9.3 20.8-20.8 20.8-4.4 0-8 3.6-8 8s3.6 8 8 8zm78.8 0c4.4 0 8-3.6 8-8s-3.6-8-8-8c-11.4 0-20.8-9.3-20.8-20.8 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 20.3 16.5 36.8 36.8 36.8zm-28.8 50c4.4 0 8-3.6 8-8 0-11.4 9.3-20.8 20.8-20.8 4.4 0 8-3.6 8-8s-3.6-8-8-8c-20.3 0-36.8 16.5-36.8 36.8 0 4.4 3.6 8 8 8zm-50-44.7c-4.4 0-8 3.6-8 8s3.6 8 8 8c11.4 0 20.8 9.3 20.8 20.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-20.3-16.5-36.8-36.8-36.8zm-238.5 157c5.9 0 10.8-4.8 10.8-10.8s-4.8-10.8-10.8-10.8c-5.9 0-10.8 4.8-10.8 10.8s4.9 10.8 10.8 10.8zm30.2 77.4c0-4.4-3.6-8-8-8H72.3c-4.4 0-8 3.6-8 8s3.6 8 8 8h98.1c4.4 0 8-3.6 8-8z"
                            data-inspector="51:49"
                          ></path>
                          <g data-inspector="52:49">
                            <path
                              fill="#4C83FF"
                              d="M57.3 369.4l57.8 57.8L57.3 485V369.4z"
                              classNameName="secondary-color"
                              data-inspector="53:49"
                            ></path>
                            <path
                              fill="#4C83FF"
                              d="M182.9 80.4h-34.7V45.8h34.7v34.6z"
                              classNameName="secondary-color"
                              data-inspector="54:49"
                            ></path>
                            <path
                              fill="#4C83FF"
                              d="M238.1 80.4h-34.7V45.8h34.7v34.6z"
                              classNameName="secondary-color"
                              data-inspector="55:49"
                            ></path>
                            <path
                              fill="#2AFADF"
                              d="M293.4 80.4h-34.7V45.8h34.7v34.6z"
                              classNameName="primary-color"
                              data-inspector="56:49"
                            ></path>
                          </g>
                          <linearGradient
                            id="SVGID_1_"
                            x1="315.56"
                            x2="304.154"
                            y1="400.794"
                            y2="78.576"
                            classNameName="gradient-element"
                            data-inspector="58:142"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              classNameName="primary-color-gradient"
                              data-inspector="59:45"
                              offset="0"
                              stopColor="#2AFADF"
                            ></stop>
                            <stop
                              classNameName="secondary-color-gradient"
                              data-inspector="60:45"
                              offset="1"
                              stopColor="#4C83FF"
                            ></stop>
                          </linearGradient>
                          <path
                            fill="url(#SVGID_1_)"
                            d="M409.9 160.8v209.5c0 16.6-18.8 26.2-32.2 16.4l-75.4-55c-7.1-5.2-16.8-5.2-23.9 0l-35.5 25.8c-13.4 9.8-32.2.2-32.2-16.4V131.3c0-11.2 9.1-20.3 20.3-20.3h129c17.3 0 49.9 10.4 49.9 49.8z"
                            data-inspector="62:25"
                          ></path>
                          <path
                            d="M417.9 475l-127.5-92.7L162.8 475V142.9h27.9c4.4 0 8 3.6 8 8s-3.6 8-8 8h-11.9v284.7l111.5-81 111.5 81V160.8c0-41.3-40.1-41.8-41.8-41.8H119v11.9c0 4.4-3.6 8-8 8s-8-3.6-8-8V103h257c4.7 0 21.3.8 36.1 11.7 9.9 7.2 21.7 21.1 21.7 46.2V475z"
                            data-inspector="63:25"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div classNameName="ml-4">
                      <h5 classNameName="text-lg font-bold leading-6 text-secondary">
                        Keep your cashflow crystal clear
                      </h5>
                      <p classNameName="mt-2 text-base leading-6 text-primary">
                        Effortlessly track your cashflow and gain insights
                        that’ll help you see easy opportunities to save.
                      </p>
                    </div>
                  </div>
                  <div classNameName="flex my-4">
                    <div classNameName="flex-shrink-0 ">
                      <div classNameName="flex h-12 w-12 items-center justify-center rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          data-inspector="77:142"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                        >
                          <linearGradient
                            id="SVGID_1_"
                            x1="272.31"
                            x2="272.31"
                            y1="451.034"
                            y2="125.04"
                            classNameName="gradient-element"
                            data-inspector="78:142"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              classNameName="primary-color-gradient"
                              data-inspector="79:45"
                              offset="0"
                              stopColor="#2AFADF"
                            ></stop>
                            <stop
                              classNameName="secondary-color-gradient"
                              data-inspector="80:45"
                              offset="1"
                              stopColor="#4C83FF"
                            ></stop>
                          </linearGradient>
                          <path
                            fill="url(#SVGID_1_)"
                            d="M260.3 466.1l157.9-157.9c5.5-5.5 1.6-14.9-6.2-14.9h-89.6c-4.8 0-8.7-3.9-8.7-8.7V121.1c0-4.8-3.9-8.7-8.7-8.7h-16.8c-4.9 0-8.8 4-8.8 8.8v157.5c0 29.3-23.8 53.1-53.1 53.1h-95.2c-6.5 0-9.7 7.8-5.1 12.4l122 122c3.4 3.3 8.9 3.3 12.3-.1z"
                            data-inspector="82:49"
                          ></path>
                          <path
                            d="M422.3 313.8l-157.9 158c-3.3 3.3-7.5 4.9-11.8 4.9-4.3 0-8.6-1.6-11.8-4.9l-157.9-158c-4.8-4.8-6.2-11.9-3.6-18.2 2.6-6.3 8.7-10.3 15.4-10.3h89.6c.4 0 .7-.3.7-.7V123.1c0-9.2 7.5-16.7 16.7-16.7h25.7c4.4 0 8 3.6 8 8s-3.6 8-8 8h-25.7c-.4 0-.7.3-.7.7v161.5c0 9.2-7.5 16.7-16.7 16.7H94.7c-.2 0-.5 0-.7.4-.2.4 0 .6.2.8l157.9 157.9c.3.3.7.3 1 0L411 302.5c.1-.1.3-.3.2-.8-.2-.4-.5-.4-.7-.4H321c-9.2 0-16.7-7.5-16.7-16.7v-197c0-4.4 3.6-8 8-8s8 3.6 8 8v197c0 .4.3.7.7.7h89.6c6.8 0 12.8 4 15.4 10.3 2.6 6.3 1.1 13.4-3.7 18.2z"
                            data-inspector="83:49"
                          ></path>
                          <g data-inspector="84:49">
                            <path
                              fill="#2AFADF"
                              d="M483.5 169.1v35.8h-35.8v-35.8h35.8z"
                              classNameName="primary-color"
                              data-inspector="85:49"
                            ></path>
                            <path
                              fill="#4C83FF"
                              d="M484.2 107.4v39.3h-37.3v-39.3h37.3zm-94.8 374.2h91.4V379l-91.4 102.6z"
                              classNameName="secondary-color"
                              data-inspector="86:49"
                            ></path>
                          </g>
                          <path
                            d="M235.3 43.4v112.8c0 4.4-3.6 8-8 8s-8-3.6-8-8V43.4c0-4.4 3.6-8 8-8s8 3.5 8 8zm-97.6 161.2c0-4.4-3.6-8-8-8-20.3 0-36.8 16.5-36.8 36.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-11.4 9.3-20.7 20.8-20.7 4.4 0 8-3.6 8-8zm-86.8-8c-4.4 0-8 3.6-8 8s3.6 8 8 8c11.4 0 20.8 9.3 20.8 20.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-20.3-16.5-36.7-36.8-36.7zm28.8-50c-4.4 0-8 3.6-8 8 0 11.4-9.3 20.8-20.8 20.8-4.4 0-8 3.6-8 8s3.6 8 8 8c20.3 0 36.8-16.5 36.8-36.8 0-4.5-3.6-8-8-8zm50 44.7c4.4 0 8-3.6 8-8s-3.6-8-8-8c-11.4 0-20.8-9.3-20.8-20.8 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 20.3 16.5 36.8 36.8 36.8zM79.9 481.6c0 5-4.1 9-9 9s-9-4.1-9-9 4.1-9 9-9 9 4.1 9 9zm30 0c0 5-4.1 9-9 9s-9-4.1-9-9 4.1-9 9-9 9 4.1 9 9zm30 0c0 5-4.1 9-9 9s-9-4.1-9-9 4.1-9 9-9 9 4.1 9 9zm-39-20.4c-2.3 0-4.6-.9-6.4-2.6-3.5-3.5-3.5-9.3 0-12.8s9.3-3.5 12.8 0 3.5 9.3 0 12.8c-1.8 1.7-4.1 2.6-6.4 2.6zm-37.4-1.6c-3.5-3.5-3.5-9.3 0-12.8s9.3-3.5 12.8 0 3.5 9.3 0 12.8c-1.8 1.8-4.1 2.6-6.4 2.6-2.3 0-4.6-.9-6.4-2.6zm-18.6-13.8c3.5 3.5 3.5 9.2 0 12.8-1.7 1.7-4 2.6-6.4 2.6-2.4 0-4.7-.9-6.4-2.6-3.5-3.5-3.5-9.2 0-12.8 1.7-1.7 4-2.6 6.4-2.6 2.5-.1 4.7.8 6.4 2.6zM362.2 35.4c-4.4 0-8 3.6-8 8v192.1c0 4.4 3.6 8 8 8s8-3.6 8-8V43.4c0-4.5-3.5-8-8-8zm-164.1-7.6H32.5c-4.4 0-8 3.6-8 8s3.6 8 8 8h165.6c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
                            data-inspector="88:25"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div classNameName="ml-4">
                      <h5 classNameName="text-lg font-bold leading-6 text-secondary">
                        Bill Negotiation
                      </h5>
                      <p classNameName="mt-2 text-base leading-6 text-primary">
                        Join the other yabars who’ve already racked up a
                        combined $2M+ in savings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div classNameName="w-full xxl:w-1/2 bg-white/90 md:rounded-3xl xxl:rounded-r-3xl xxl:rounded-l-none">
                <div classNameName="p-4">
                  <button
                    classNameName="btn btn-ghost btn-circle"
                    onClick={() => router.back()}
                  >
                    <IconArrowLeft strokeColor="text-secondary" />
                  </button>
                </div>
                <div classNameName="mx-auto flex flex-col justify-center text-secondary px-4 lg:px-8 xl:px-16 py-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Auth;
