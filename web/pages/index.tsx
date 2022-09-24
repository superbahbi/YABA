import React, { useEffect } from "react";
import LPBody from "../components/LandingPage/LPBody";
import LPFooter from "../components/LandingPage/LPFooter";
import LPHero from "../components/LandingPage/LPHero";
import LPNavbar from "../components/LandingPage/LPNavbar";
import LPEnd from "../components/LandingPage/LPEnd";
import { themeChange } from "theme-change";
import LPFeature from "../components/LandingPage/LPFeature";
import LPFaq from "../components/LandingPage/LPFaq";
import { ILPIndexProps } from "../types/LPinterface";
import LPStats from "../components/LandingPage/LPStats";
import LPSocialProof from "../components/LandingPage/LPSocialProof";

const Home: React.FC<ILPIndexProps> = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <div>
        <LPNavbar />
        <main>
          <LPHero />
          <LPFeature />
          <LPSocialProof />
          <LPBody />
          {/* <LPEnd /> */}
          <LPStats />
          <LPFaq />
        </main>
      </div>
      <LPFooter />
    </>
  );
};
export default Home;
