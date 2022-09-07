import React, { useState } from "react";
import video from "../assets/videos/video.webm";
import videoSecondary from "../assets/videos/video-secondary.webm";
import LPBody from "../components/LandingPage/LPBody";
import LPFooter from "../components/LandingPage/LPFooter";
import LPHero from "../components/LandingPage/LPHero";
import LPNavbar from "../components/LandingPage/LPNavbar";
import Auth from "../layouts/Auth";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const [theme, setTheme] = useState<boolean>(true);
  console.log(theme);
  return (
    <>
      <div data-theme={theme ? "night" : "lofi"}>
        <main>
          <LPNavbar setTheme={setTheme} theme={theme} />
          <LPHero bgVideo={theme ? video : videoSecondary} />
          <LPBody />
        </main>
        <LPFooter />
      </div>

      {/* <Auth /> */}
    </>
  );
};
export default Home;
