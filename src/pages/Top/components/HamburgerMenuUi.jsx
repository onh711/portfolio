import { useState } from "react";
import styled from "styled-components";
import { HeaderLink } from "./Header";
import { links } from "../../../data/links";

export const HamburgerMenuUi = () => {
  const [isOpen, setIsOpen] = useState(false); //メニューの開閉状態を管理する
  const [isAnimating, setIsAnimating] = useState(false); //アニメーションの状態を管理する

  const toggleHamburgerMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <HamburgerButton onClick={toggleHamburgerMenu}>
        <HamburgerLine $isOpen={isOpen} />
        <HamburgerLine $isOpen={isOpen} />
        <HamburgerLine $isOpen={isOpen} />
      </HamburgerButton>
      {(isOpen || isAnimating) && ( //もしisOpenがtrueかisAnimatingがtrueならメニューを表示する
        <HamburgerMenu
          $isOpen={isOpen}
          onAnimationEnd={() => {
            !isOpen && setIsAnimating(false);
          }}
        >
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <HeaderLink to={link.href} onClick={() => setIsOpen(false)}>
                  {link.Icon}
                  {link.label}
                </HeaderLink>
              </li>
            ))}
          </ul>
        </HamburgerMenu>
      )}
    </>
  );
};

const HamburgerButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  border: none;
  cursor: pointer;
  background: none;
  position: relative;
  margin-top: 10px;
  margin-right: 5%;

  @media (min-width: 770px) {
    display: none;
  }
`;

const HamburgerLine = styled.span`
  background-color: white;
  width: 30px;
  height: 2px;
  position: absolute;
  transition:
    transform 0.3s,
    opacity 0.3s;

  &:nth-of-type(1) {
    top: 10px;
    ${({ $isOpen }) => $isOpen && "transform: translateY(10px) rotate(45deg);"}
  }

  &:nth-of-type(2) {
    top: 20px;
    ${({ $isOpen }) => $isOpen && "opacity: 0;"}
  }

  &:nth-of-type(3) {
    top: 30px;
    ${({ $isOpen }) => $isOpen && "transform: translateY(-10px) rotate(-45deg);"}
  }
`;

const HamburgerMenu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;
  top: 70px;
  left: 0;
  z-index: 10000;
  animation: ${({ $isOpen }) => ($isOpen ? "fadeIn 0.3s forwards" : "fadeOut 0.3s forwards")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  ul {
    list-style: none;
    margin: 150px auto 0;
    padding: 0;
    width: 100%;
    text-align: center;
  }

  li {
    font-family: "Noto Serif JP";
    font-size: 2.2rem;
    font-weight: 100;
    padding: 5%;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
