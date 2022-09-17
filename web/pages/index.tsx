import React, { useState } from "react";
import video from "../assets/videos/video.webm";
import videoSecondary from "../assets/videos/video-secondary.webm";
import LPBody from "../components/LandingPage/LPBody";
import LPFooter from "../components/LandingPage/LPFooter";
import LPHero from "../components/LandingPage/LPHero";
import LPNavbar from "../components/LandingPage/LPNavbar";
import LPEnd from "../components/LandingPage/LPEnd";
export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const [theme, setTheme] = useState<boolean>(true);
  console.log(theme);
  return (
    <>
      <LPNavbar setTheme={setTheme} theme={theme} />

      <div className="font-Questrial" data-theme={theme ? "night" : "lofi"}>
        <main>
          <LPHero bgVideo={theme ? video : videoSecondary} />
          <LPBody />
          <LPEnd />
        </main>
      </div>
      <LPFooter />
    </>
  );
};
export default Home;
