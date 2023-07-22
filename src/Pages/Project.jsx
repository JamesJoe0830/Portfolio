import React from "react";
const projectList = [
  {
    id: 1,
    title: "참조은교회",
    period: "23.02.01~23.04.01(4인 팀 프로젝트)",
    features: "미자립 교회 배너, 찾아오시는 길,예배시간,블로그를 홈페이지에서",
    github: "",
    url:"",
    frontEnd: ["Frontend",["React.js"]],


  },
  {
    id: 2,
    title: "참조은교회",
    period: "23.02.01~23.04.01",
  },
  {
    id: 2,
    title: "참조은교회",
    period: "23.02.01~23.04.01",
  },
  {
    id: 2,
    title: "참조은교회",
    period: "23.02.01~23.04.01",
  },
  {
    id: 2,
    title: "참조은교회",
    period: "23.02.01~23.04.01",
  },

];


export default function Project() {
    const handleModal=()=>{
    
    }
  return (
    <div id="PROJECTS">
      <div className="project__wrapper">
        <section className="sectionTitle">
          <div className="title">PROJECTS</div>
        </section>
        <div className="project__totalContainer">
          {projectList.map((data) => {
            return (
              <div id={data.id} className="project_container">
                <div className="readMe_div">
                <button onClick={handleModal} className="readMe_button">read me</button>
                </div>
                <div className="procject_header">
                <h1>{data.title}</h1>
                <div>{data.period}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
