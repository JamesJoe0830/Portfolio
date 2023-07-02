import React from "react";
import "./Pages.css";

export default function Skills() {
  return (
    <div id="SKILLS">
      <div className="skills__wrapper">
        <section className="sectionTitle">
          <div className="title">SKILLS</div>
        </section>
        <section className="skills__section">
         <div className="skills_element">
            <div className="skills_title">Frontend</div>
            <img src ="/images/Frontend.png" className="skills__img" alt="Frontend"/>
        </div>
        <div className="skills_element">
            <div className="skills_title">Ect</div>
            <img src ="/images/Ect.png" className="skills__img" alt="Ect"/>
         </div>
        </section>

      </div>
    </div>
  );
}
