import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import { ILPHeroProps } from "../../types/LPinterface";

const LPHero: React.FC<ILPHeroProps> = ({ bgVideo }) => {
  console.log(bgVideo);
  return (
    <section>
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
          <Image
            src="https://i.postimg.cc/mZFsrnbZ/i-Phone-13-Pro.png"
            className="max-w-sm rounded-lg shadow-2xl"
            width={300}
            height={600}
            alt="yaba mockup"
          />
          <div className="grid">
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
              <NextLink className="link no-underline" href="/auth/register">
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
    </section>
  );
};
export default LPHero;
