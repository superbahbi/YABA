import React from "react";
import video from "../assets/videos/video.mp4";
import LPBody from "../components/LandingPage/LPBody";
import LPFooter from "../components/LandingPage/LPFooter";
import LPHero from "../components/LandingPage/LPHero";
import LPNavbar from "../components/LandingPage/LPNavbar";
export default function Home() {
  return (
    <>
      <main>
        <LPNavbar />
        <LPHero bgVideo={video} />
        <LPBody />
      </main>
      <LPFooter />
    </>
  );
}
