import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "./Nav.css";
export default function Nav() {
  const MenuList = [
    {
      id: 1,
      Label: "ABOUT ME",
    },
    {
      id: 2,
      Label: "ABOUT ME",
    },{
      id: 3,
      Label: "ABOUT ME",
    },
  ];
  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPosition,setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);
  
  return (
    <div>
      <NavContainer className={scrollPosition<80 ? "basic_navContainer":"scroll_navContainer"}>
        <NavElements>
          <PortfolioNameBox>
          <PortfolioName onClick={()=>{MoveToTop();}}>JaeKyeun</PortfolioName>
          </PortfolioNameBox>
          {windowWidth > 1200 ?
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
           : <PortfolioToggleMenu><Menubutton onClick={()=>{toggleMenu();}}>☰</Menubutton>
           {menuOpen && <PortfolioToggleMenu>
            <ToggleMenuItem>
              <Link
                activeClass="active"
                to="ABOUT ME"
                spy={true}
                smooth={true}
                duration={500}
                onClick = {() =>{toggleMenu();}}
              >
                {/* spy: 스크롤 이벤트를 감지하여 자동으로 활성화된 링크를 업데이트할지 여부를 나타냅니다.  */}
                ABOUT ME
              </Link>
              
            </ToggleMenuItem>
            <ToggleMenuItem>
              <Link
                activeClass="active"
                to="SKILLS"
                spy={true}
                smooth={true}
                duration={500}
                onClick = {() =>{toggleMenu();}}
              >
                SKILLS
              </Link>
            </ToggleMenuItem>
            <ToggleMenuItem>
              <Link
                activeClass="active"
                to="ARCHIVING"
                spy={true}
                smooth={true}
                duration={500}
                onClick = {() =>{toggleMenu();}}
              >
                ARCHIVING
              </Link>
            </ToggleMenuItem>
            <ToggleMenuItem>
              <Link
                activeClass="active"
                to="PROJECTS"
                spy={true}
                smooth={true}
                duration={500}
                onClick = {() =>{toggleMenu();}}
              >
                PROJECTS
              </Link>
            </ToggleMenuItem>
          </PortfolioToggleMenu>}</PortfolioToggleMenu> }
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
  /* border-bottom: 1px solid; */

`;

const NavElements = styled.div`
  display:flex;
  justify-content:space-between;
  position: relative;
  width: 1100px;
  margin: 0 auto;
  text-align: center; 
  @media screen and (max-width: 1200px) {
    width: 700px;
  }
  @media screen and (max-width: 800px) {
    width: 500px;
  }

`;
const PortfolioNameBox =styled.div`
  display:flex;
  height:70px;
  width:fit-content;
  align-items: center;
`;
const PortfolioName = styled.div`
  float: left;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0px auto;
  height: 70px
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
  padding: 26px 0px;
`;

const PortfolioToggleMenu = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  padding: 20px 0px;
`;


const MenuItem = styled.div`
  margin-left: 20px;
  cursor: pointer;
  &:hover{
    color: #000000;
    font-weight: 700;
  }
`;
const Menubutton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 30px;
  cursor: pointer;
`;

const ToggleMenuItem = styled.div`
  margin-left: 20px;
  margin: 5px 0px;
  padding 3px 15px;
  cursor: pointer;
  &:hover{
    color: #02c4c1;
    font-weight: 600;
    background-color: rgb(240, 234, 226);
    border-radius: 10px;
  }
`;