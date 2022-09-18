import React, { useEffect } from "react";
import video from "../assets/videos/video.webm";
import videoSecondary from "../assets/videos/video-secondary.webm";
import LPBody from "../components/LandingPage/LPBody";
import LPFooter from "../components/LandingPage/LPFooter";
import LPHero from "../components/LandingPage/LPHero";
import LPNavbar from "../components/LandingPage/LPNavbar";
import LPEnd from "../components/LandingPage/LPEnd";
import { themeChange } from "theme-change";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <div>
        <LPNavbar />
        <main>
          <LPHero bgVideo={true ? video : videoSecondary} />
          <LPBody />
          <LPEnd />
        </main>
      </div>
      <LPFooter />
    </>
  );
};
export default Home;
