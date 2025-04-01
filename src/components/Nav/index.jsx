import styled from "styled-components";
import logoUnifenas from "../../assets/Logo_Unifenas.png";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBar>
      <A href="https://www.unifenas.br/" target="_blank">
        <Img src={logoUnifenas} alt="Logo Unifenas" />
      </A>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>☰</MenuIcon>
      <NavList menuOpen={menuOpen}>
        <NavItem>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="sobre" smooth={true} duration={500}>
            Sobre
          </Link>
        </NavItem>
        <NavItem>
          <Link to="contato" smooth={true} duration={1000}>
            Contato
          </Link>
        </NavItem>
      </NavList>
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  background: black;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const MenuIcon = styled.div`
  font-size: 2rem;
  color: #ffffff;

  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    background: black;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
  }
`;

const NavItem = styled.li`
  color: #ffd700; /* Dourado vibrante */
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: #ffa500; /* Laranja forte */
  }

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: #ffa500;
    transition: width 0.3s ease-in-out;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 180px;
  height: auto;
`;

const A = styled.a``;
