import React from "react";
export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200" data-theme="night">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img
                src="https://i.postimg.cc/DZRftwxp/yaba.png"
                className="max-w-sm rounded-lg shadow-2xl"
                width={320}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold flex justify-center lg:justify-end">
            Yet Another <br />
            Budget App
          </h1>
          <p className="py-6 flex justify-center lg:justify-end">
            From the minds that brought you Groomify.
          </p>
          <div className="btn-group justify-center lg:justify-end">
            <a className="link no-underline" href="/account">
              <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">
                Get Started
              </button>
            </a>
            <a className="link no-underline" href="/overview">
              <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline">
                View Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
