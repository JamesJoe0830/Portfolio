import React, { useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Archiving from "./Archiving";
import Skills from "./Skills";
import Project from "./Project";
import "./Pages.css";
import waves from "../videos/waves.mp4";

export default function Home() {
  const [start, setStart] = useState(false);
  const handleStart = () => {
    setStart((prev) => !prev);
  };
  if (!start) {
    return (
      <div>
        <div className="start__wrapper">
            <div className="overlay"></div>
          <video className="start__video" src={waves} autoPlay loop muted />
          <div className="start__container">

            <h1>Welcome</h1>
            <div>JaeKyeun site</div>
          <button className="start__button" onClick={handleStart}>
                <div>Visit</div>
          </button>
          
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Banner />
        <About />
        <Skills />
        <Archiving />
        <Project/>
      </div>
    );
  }
}
