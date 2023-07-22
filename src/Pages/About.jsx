import React from "react";
import "./Pages.css";
import {
  BsFileEarmarkPerson,
  BsCalendarDate,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const aboutMe = [
  {
    id: 1,
    icon: <BsFileEarmarkPerson />,
    Label: "이름",
    Value: "조재균",
  },
  {
    id: 2,
    icon: <BsCalendarDate />,
    Label: "생년월일",
    Value: "1995.08.30",
  },
  {
    id: 2,
    icon: <ImLocation />,
    Label: "주소지",
    Value: "경기도 성남시 분당구",
  },
  {
    id: 3,
    icon: <BsFillTelephoneFill />,
    Label: "연락처",
    Value: "010-3372-5455",
  },
  {
    id: 4,
    icon: <IoIosMail />,
    Label: "이메일",
    Value: "kyeun950830@gmail.com",
  },
  {
    id: 5,
    icon: <FaGraduationCap />,
    Label: "학력",
    Value: "아주대학교(산업공학과)",
  },
];

export default function About() {
  
  return (
    <div id="ABOUT ME" className="about__wrapper">
      <section className="sectionTitle">
        <div className="title">ABOUT ME</div>
      </section>
      <div className="aboutMe__contents">
        {aboutMe.map((data) => {
          return (
            <>
            <Fade bottom>
              <div className="aboutMe__elements">
                <div className="aboutMe__icon">{data?.icon}</div>
                <div className="aboutME__field">
                  <div className="aboutMe__label" key={data.id}>
                    {data.Label}{" "}
                  </div>
                  <div className="aboutMe__value">{data.Value} </div>
                </div>
              </div>
            </Fade>
            </>
          );
        })}
      </div>
    </div>
  );
}
