import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import { ILPHeroProps } from "../../types/LPinterface";

const LPHero: React.FC<ILPHeroProps> = ({ bgVideo }) => {
  console.log(bgVideo);
  return (
    <section data-theme="night">
      <div className="hero min-h-screen bg-base-200">
        <video
          className="top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          preload="auto"
        >
          <source src={bgVideo} type="video/webm"></source>
        </video>
        <div className="hero-content flex-col lg:flex-row-reverse lg:mw-[1440px]">
          {/* <div className="mockup-phone border-primary">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <Image
                  src="https://i.postimg.cc/DZRftwxp/yaba.png"
                  className="max-w-sm rounded-lg shadow-2xl"
                  width={300}
                  height={475}
                  alt="yaba mockup"
                />
              </div>
            </div>
          </div> */}
          <Image
            src="https://i.postimg.cc/cHG0h7FT/i-Phone-13.png"
            className="max-w-sm rounded-lg shadow-2xl"
            width={460}
            height={500}
            alt="yaba mockup"
          />
          <div>
            <label className="swap">
              <input type="checkbox" />
              <div className="swap-on">
                <h1 className="text-5xl text-primary tracking-wide lg:text-8xl font-bold flex justify-center lg:justify-end">
                  YABA.
                </h1>
              </div>
              <div className="swap-off">
                <h1 className="text-5xl text-primary tracking-wide lg:text-8xl font-bold flex justify-center lg:justify-end">
                  yaba.
                </h1>
              </div>
            </label>

            <h2 className="text-accent text-3xl lg:text-5xl font-bold flex justify-center lg:justify-end">
              save more, <br />
              feel better.
            </h2>
            <div className="btn-group mt-4 justify-center lg:justify-end">
              <NextLink className="link no-underline" href="/account">
                <button className="btn btn-primary lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md">
                  Get Started
                </button>
              </NextLink>
              <NextLink className="link no-underline" href="/overview">
                <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline">
                  View Demo
                </button>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
      {/* <div
            className="flex flex-col w-full border-opacity-50"
            data-theme="night"
          >
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              <h1 className="text-5xl tracking-wide lg:text-3xl font-bold flex justify-center lg:justify-end">
                explore
              </h1>
            </div>
            <div className="divider">
              <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline">
                <h1 className="text-5xl tracking-wide lg:text-4xl font-bold flex justify-center lg:justify-end">
                  &#8595;
                </h1>
              </button>
            </div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              <h1 className="text-5xl tracking-wide lg:text-3xl font-bold flex justify-center lg:justify-end">
                experience.
              </h1>
            </div>
          </div> */}
    </section>
  );
};
export default LPHero;
