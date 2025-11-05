import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Landing from "./LandingComponent/Landing";
import Timeline from "./TimelineComponent/Timeline";
import Navigation from "./Navigation/Navigation";
import AboutMe from "./AboutMeComponent/AboutMe";
import Projects from "./ProjectsComponent/Projects";
import Skills from "./SkillsComponent/Skills";
import Socials from "./SocialsComponent/Socials";
import TimelineSecond from "./TimelineComponent/TimelineSecond";
import FancySocial from "./SocialsComponent/FancySocial";
import ScrollToTop from "./assets/ScrollToTop";
import Footer from "./Footer/Footer";
import FloatSection from "./assets/FloatSection";
import LiquidEther from "./LiquidEther/LiquidEther";
import Particles from "./Particles/Particles";

function App() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          inset: 0, // shorthand for top:0, right:0, bottom:0, left:0
          // zIndex: -1, // push it behind everything
        }}
      >
        {/* <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        /> */}
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navigation />
      <div className="main-content">
        <ScrollToTop />
        <Landing />
        <TimelineSecond />
        {/* <Timeline /> */}
        <FloatSection>
          <div className="skills-and-projects">
            {/* <FancySocial /> */}
            <Projects />
          </div>
        </FloatSection>
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
