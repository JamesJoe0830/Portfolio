import React from "react";
import "./Pages.css";
import Fade from "react-awesome-reveal";

const frontEnd = [
  {
    id: 1,
    img: "https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white",
    alter: "html5",
  },
  {
    id: 2,
    img: "https://img.shields.io/badge/css-1572B6?style=flat&logo=css3&logoColor=white",
    alter: "css",
  },
  {
    id: 3,
    img: "https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black",
    alter: "react",
  },
  {
    id: 4,
    img: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flate&logo=javascript&logoColor=white",
    alter: "node.js",
  },
  {
    id: 4,
    img: "https://img.shields.io/badge/node.js-339933?style=flate&logo=Node.js&logoColor=white",
    alter: "node.js",
  },
  {
    id: 4,
    img: "https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=javascript&logoColor=white",
    alter: "node.js",
  },
  {
    id: 5,
    img: "https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white",
    alter: "styled-components",
  },
];
const ect = [
  {
    id: 1,
    img: "https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white",
  },
  {
    id: 2,
    img: "https://img.shields.io/badge/python-3776AB?style=flat&logo=python&logoColor=white",
    alter: "python",
  },
];

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
              <div className="skillBox">
                <div className="skills">
                  {frontEnd.map((data) => {
                    return (
                      <div className="skill_element" key={data.id}>
                        <img
                          className="skills_img"
                          src={data.img}
                          alt={data.alter}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <img src ="/images/Frontend.png" className="skills__img" alt="Frontend"/> */}
            </div>
          </Fade>
          <Fade bottom>
            <div className="skills_element">
              <div className="skills_title">Ect</div>
              <div className="skills">
                {ect.map((data) => {
                  return (
                    <div key={data.id}>
                      <img
                        className="skills_img"
                        src={data.img}
                        alt={data.alter}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  );
}
