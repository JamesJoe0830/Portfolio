import React, { useState } from "react";
import DetailModal from "../components/DetailModal";
const projectList = [
  {
    id: 1,
    title: "참조은교회",
    subtitle: "[3분만에 만드는 미자립교회 웹사이트]",
    period: "23.02.01~23.04.01(4인 팀 프로젝트)",
    info: "여러 미자립 교회들의 웹사이트를 3분이면 만들어주는 프로젝트입니다. 웹사이트를 만들기 어려운 형편에 놓인 미자립 교회를 돕는 목적을 갖고 개발하였습니다. 재사용성을 높이고자 교회에 필요한 부분을 나눠서 컴포넌트화 했습니다. ",
    features: "미자립 교회 배너, 찾아오시는 길,예배시간,블로그를 홈페이지에서",
    img: "https://github.com/JamesJoe0830/ps_study/assets/93318615/cb29fdd0-955a-4bf2-8cd5-0fcdcbd36aa9",
    github: "",
    url: "",
    frontEnd: ["Frontend", ["React.js"]],
  },
  {
    id: 2,
    title: "TODO List",
    period: "23.02.01~23.04.01",
  },
  {
    id: 3,
    title: "인스타그램",
    period: "23.02.01~23.04.01",
  },
  {
    id: 4,
    title: "Web IDE",
    period: "23.02.01~23.04.01",
  },
];

export default function Project() {
  const [isdetailModal, setIsDetailModal] = useState(false);
  const [projectId, setProjectId] = useState(-1);
  const handleDetailModal = (id) => {
    setIsDetailModal((prev) => !prev);
    setProjectId(id);
  };
  return (
    <div>
      <div id="PROJECTS">
        <div className="project__wrapper">
          <section className="sectionTitle">
            <div className="title">PROJECTS</div>
          </section>
          <div className="project__totalContainer">
            {projectList.map((data) => {
              return (
                <div id={data.id} className="project_container">
                  <div className="readMe_BtnBox">
                    <button
                      onClick={() => handleDetailModal(data.id)}
                      className="readMe_button"
                    >
                      read me
                    </button>
                  </div>
                  <div className="readMe_div"></div>
                  <div className="project_header">
                    <div className="project_title">{data.title}</div>
                    <div className="project_subtitle">{data.subtitle}</div>
                    <div className="project_period">{data.period}</div>
                  </div>
                  <div className="project_imgWrapper">
                    <img className="project_img" src={data?.img} alt="img" />
                  </div>
                  프로젝트 목적
                  <div className="project_info">{data.info}</div>
                  사이트
                  {isdetailModal && projectId === data.id && (
                    <DetailModal
                      setIsDetailModal={setIsDetailModal}
                      title={data.title}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
