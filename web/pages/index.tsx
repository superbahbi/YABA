import React from "react";
// @ts-nocheck comment
export default function Home() {
  return (
    <>
      <main>
        <section>
          <div></div>
          <div className="hero min-h-screen bg-base-200" data-theme="night">
            {/* <video
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
              autoPlay={true}
              muted={true}
              loop
            >
              <source type="video/mp4"></source>
            </video> */}
            <div className="hero-content flex-col lg:flex-row-reverse lg:mw-[1440px]">
              <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <img
                      src="https://i.postimg.cc/DZRftwxp/yaba.png"
                      className="max-w-sm rounded-lg shadow-2xl"
                      width={315}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-5xl tracking-wide lg:text-8xl font-bold flex justify-center lg:justify-end">
                  yaba.
                </h2>
                <h2 className="text-accent text-3xl lg:text-5xl font-bold flex justify-center lg:justify-end">
                  save more, <br />
                  feel better.
                </h2>
                <div className="btn-group mt-4 justify-center lg:justify-end">
                  <a className="link no-underline" href="/account">
                    <button className="btn btn-primary lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md">
                      Get Started
                    </button>
                  </a>
                  <a className="link no-underline" href="/overview">
                    <button className="btn btn-ghost lowercase btn-xs sm:btn-sm md:btn-md lg:btn-md no-underline">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="hero min-h-screen" data-theme="cyberpunk">
            <div className="hero-content flex-col lg:flex-row-reverse lg:mw-[1440px]">
              <div className="stack">
                <div className="card shadow-md bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">Notification 1</h2>
                    <p>You have 3 unread messages. Tap here to see.</p>
                  </div>
                </div>
                <div className="card shadow bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">Notification 2</h2>
                    <p>You have 3 unread messages. Tap here to see.</p>
                  </div>
                </div>
                <div className="card shadow-sm bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">Notification 3</h2>
                    <p>You have 3 unread messages. Tap here to see.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-theme="cyberpunk">
          <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                className="fill-current"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <p>
                YABA.
                <br />
                helping you save money.
              </p>
            </div>
            <div>
              <span className="footer-title lowercase text-2xl">services</span>
              <a className="link link-hover">branding</a>
              <a className="link link-hover">design</a>
              <a className="link link-hover">marketing</a>
              <a className="link link-hover">advertisement</a>
            </div>
            <div>
              <span className="footer-title lowercase text-2xl">company</span>
              <a className="link link-hover">about us</a>
              <a className="link link-hover">contact</a>
              <a className="link link-hover">jobs</a>
              <a className="link link-hover">press kit</a>
            </div>
            <div>
              <span className="footer-title lowercase text-2xl">legal</span>
              <a className="link link-hover">terms of use</a>
              <a className="link link-hover">privacy policy</a>
              <a className="link link-hover">cookie policy</a>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
