import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
export default function Nav() {
  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div>
      <NavContainer>
        <NavElements>
          <PortfolioName onClick={()=>{MoveToTop();}}>James</PortfolioName>
          <PortfolioMenu>
            <MenuItem>
              <Link
                activeClass="active"
                to="ABOUT ME"
                spy={true}
                smooth={true}
                duration={500}
              >
                {/* spy: 스크롤 이벤트를 감지하여 자동으로 활성화된 링크를 업데이트할지 여부를 나타냅니다.  */}
                ABOUT ME
              </Link>
              
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="SKILLS"
                spy={true}
                smooth={true}
                duration={500}
              >
                SKILLS
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="ARCHIVING"
                spy={true}
                smooth={true}
                duration={500}
              >
                ARCHIVING
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="PROJECTS"
                spy={true}
                smooth={true}
                duration={500}
              >
                PROJECTS
              </Link>
            </MenuItem>
          </PortfolioMenu>
        </NavElements>
      </NavContainer>
    </div>
  );
}

const NavContainer = styled.div`
  position: fixed;
  top:0;
  z-index: 9999;
  width: 100%;
  border-bottom: 1px solid;
  background-color: rgba(255, 255, 255, 0.5);
`;

const NavElements = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  padding: 28px 0 24px;
`;

const PortfolioName = styled.div`
  float: left;
  font-size: 22px;
  font-weight: 600;
  margin: 0px auto;
  cursor: pointer;
  color: #4a4a4a;
  &:hover{
    color: #000000;
    font-weight: 700;
  }
`;

const PortfolioMenu = styled.div`
  display: flex;
  float: right;
`;

const MenuItem = styled.div`
  margin-left: 10px;
  cursor: pointer;
  &:hover{
    color: #000000;
    font-weight: 700;
  }
`;
