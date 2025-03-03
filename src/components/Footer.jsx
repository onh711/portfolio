import styled from "styled-components";
import { links } from "../data/links";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterContainer>
      <StoreName>らーめん 〇〇</StoreName>
      <LinkContent>
        {links.map((link, index) => (
          <LinkWrapper key={index}>
            <StyledLink to={link.href}>
              <span>{link.label}</span>
            </StyledLink>
          </LinkWrapper>
        ))}
      </LinkContent>
      <Copyright>©Hiroaki Ono. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const StoreName = styled.div`
  margin: 25px auto;
  font-size: 2rem;
  color: white;
`;

const LinkContent = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkWrapper = styled.div`
  margin: 10px;
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;
  transition: 0.3s;

  &:hover {
    color: #5bffffe1;
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: #ffffff;
    bottom: 4px;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover::after {
    bottom: -4px;
    opacity: 1;
  }

  @media (max-width: 769px) {
    display: none;
  }
`;

const Copyright = styled.div`
  font-size: 1rem;
  color: white;
  margin-bottom: 30px;
`;
