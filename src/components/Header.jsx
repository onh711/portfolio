import styled from "styled-components";
import { HamburgerMenuUi } from "./HamburgerMenuUi";
import { Link } from "react-router-dom";
import { links } from "../data/links";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <Logo>
            <LogoLink to={"/"}>らーめん〇〇</LogoLink>
          </Logo>
          <HeaderMenuContainer>
            {links.map((link, index) => (
              <HeaderMenu key={index}>
                <HeaderLink to={link.href}>
                  <link.Icon viewBox="-2 0 24 18" />
                  {link.label}
                </HeaderLink>
              </HeaderMenu>
            ))}
          </HeaderMenuContainer>
        </HeaderWrapper>
        <HamburgerMenuUi links={links} />
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  height: 70px;
  background-color: #000000d8;
  width: 100%;
  margin: 0;
  display: flex;
  line-height: 70px;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 2.4rem;
  color: white;
  margin-left: 5%;

  @media (max-width: 769px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const HeaderMenuContainer = styled.ul`
  display: flex;
  padding: 0;
  margin-right: 3%;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

const HeaderMenu = styled.li`
  font-size: 1.3rem;
  color: white;
  list-style: none;
  margin-left: 40px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: 0.5s;

  &:hover {
    color: #5bffffe1;
  }

  &::after {
    position: absolute;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #ffffff;
    bottom: -1px;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scale(1, 1);
  }
`;
