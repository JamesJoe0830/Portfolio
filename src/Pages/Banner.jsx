import React from "react";
import "./Pages.css";
import Fade from "react-reveal/Fade";
import { SiVelog } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
export default function Banner() {
  return (
    <div id="Banner" className="banner_wrapper">
        <div className="banner_info">
      <Fade>
          <div className="banner_circle"></div>
          <div >
          <div className="banner__aboutMeName">JaeKyeun</div>
          <div className="banner__aboutMe">Frontend Developer</div>
            </div>
          <div className="banner__websites">
            <span className="websiteIcon__github" onClick={()=>{window.open("https://github.com/joejames0830");}}>
              <BsGithub />
            </span>
            <span className="websiteIcon__velog" onClick={()=>{window.open("https://velog.io/@kyeun95");}}>
              <SiVelog />
            </span>
          </div>
      </Fade>
        </div>
    </div>
  );
}
