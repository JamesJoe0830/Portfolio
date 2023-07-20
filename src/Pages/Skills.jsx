import React from "react";
import "./Pages.css";
import Fade from "react-reveal/Fade";

export default function Skills() {
  return (
    <div id="SKILLS">
      <div className="skills__wrapper">
        <section className="sectionTitle">
          <div className="title">SKILLS</div>
        </section>
        
        <section className="skills__section">
        <Fade bottom>
         <div className="skills_element">
            <div className="skills_title">Frontend</div>
            <img src ="/images/Frontend.png" className="skills__img" alt="Frontend"/>
        </div>
        </Fade>
        <Fade bottom>
        <div className="skills_element">
            <div className="skills_title">Ect</div>
            <img src ="/images/Ect.png" className="skills__img" alt="Ect"/>
         </div>
         </Fade>
        </section>

      </div>
    </div>
  );
}
