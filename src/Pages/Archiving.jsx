import React, { useState } from "react";
import { BsGithub, BsMouse } from "react-icons/bs";
const urlInfo = [
  {
    id: 1,
    icon: <BsGithub />,
    url: "https://github.com/joejames0830",
  },
];

export default function Archiving() {
  return (
    <div id="ARCHIVING">
      <div className="skills__wrapper">
        <section className="sectionTitle">
          <div className="title">ARCHIVING</div>
        </section>

        <section className="skills__section">
          <div className="archiving_element">
            <div className="archiving_title">Github</div>
            <button
              class="archiving__icon"
              onClick={() => {
                window.open(`${urlInfo[0].url}`);
              }}
            >
              {urlInfo[0].icon}
            </button>
            <img
              src="/images/Github.png"
              className="archiving__githubImg"
              alt="Github"
            />
          </div>
          <div className="archiving_element">
            <div>
              <div className="archiving_title">Blog</div>
              <div>
                <a href="https://velog.io/@kyeun95">
                  <img
                    src="https://velog-readme-stats.vercel.app/api/badge?name=James"
                    alt="Velog's GitHub stats"
                  />
                </a>
              </div>
            </div>
            <div className="archiving_container">
              <div>
                <img
                  src="/images/Blog.png"
                  className="archiving__blogImg"
                  alt="Ect"
                />
              </div>
              <div className="scroll_icon">
                <BsMouse /> <div className="scroll_text">Scroll</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
