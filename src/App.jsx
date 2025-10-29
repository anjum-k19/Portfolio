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


function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };
  return (
    <div className="main-content">
      <ScrollToTop/>
      <Navigation />
      <Landing />
      <TimelineSecond/>
      {/* <Timeline /> */}
      <div className="skills-and-projects">
      <FancySocial/>
        <Projects />
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
