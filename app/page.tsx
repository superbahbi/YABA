"use client";
// import LPBody from "@/components/LandingPage/LPBody";
import LPFooter from "@/components/LandingPage/LPFooter";
import LPHero from "@/components/LandingPage/LPHero";
import LPNavbar from "@/components/LandingPage/LPNavbar";
import LPFeature from "@/components/LandingPage/LPFeature";
import LPFaq from "@/components/LandingPage/LPFaq";
import LPStats from "@/components/LandingPage/LPStats";
import LPTeam from "@/components/LandingPage/LPTeam";
import LPSocialProof from "@/components/LandingPage/LPSocialProof";

export default function Home() {
  return (
    <>
      <div>
        <LPNavbar />
        <main>
          <LPHero />
          <LPFeature />
          <LPSocialProof />
          {/* <LPBody /> */}
          {/* <LPEnd /> */}
          <LPStats />
          <LPTeam />
          <LPFaq />
        </main>
      </div>
      <LPFooter />
    </>
  );
}
