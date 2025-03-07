import { Link } from "react-router-dom";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import menuImg from "../images/menu.jpg";

export const Menu = () => {
  const { ref: titleRef, inView: titleInview } = useInView({
    rootMargin: "-200px",
    triggerOnce: true,
  });
  const { ref: fadeInRef, inView: fadeInInView } = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <>
      <Title ref={titleRef} $inView={titleInview}>
        メニュー
      </Title>
      <FadeInContent ref={fadeInRef} $inView={fadeInInView}>
        <MenuContainer>
          <MenuImgContent>
            <MenuImg src={menuImg} alt="メニューラーメン画像" />
          </MenuImgContent>
          <MenuTopicsContent>
            <h2>心も体も満たす一杯</h2>
            <MenuIntroduction>
              <span>
                味噌ラーメンを中心にご提供しています。
                <br />
                寒い季節にも心と体を温める一杯を、ぜひ味わってみてください。
                <br />
                醤油や塩もご用意しておりますので、お好みの一杯をお楽しみいただけます。
              </span>
            </MenuIntroduction>
            <MenuBox>
              <StyledLink to="/menu">メニュー一覧</StyledLink>
            </MenuBox>
          </MenuTopicsContent>
        </MenuContainer>
      </FadeInContent>
    </>
  );
};

const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1.5rem;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  animation: ${({ $inView }) => ($inView ? "1s fade ease-in-out forwards" : "none")};

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MenuContainer = styled.div`
  margin: 30px auto 0;
  width: 95%;
  display: flex;
  max-width: 1300px;
  background-color: #ebebeb81;
  box-shadow: 10px 5px 5px gray;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  h2 {
    font-size: 2rem;
    padding-top: 30px;
    margin: auto 0;
    text-align: center;
  }

  span {
    font-size: 1.4rem;
    line-height: 2;
  }
`;

const FadeInContent = styled.div`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? " translateY(0px)" : "translateY(90px)")};
  transition: all 0.8s ease-out;
  transition-delay: 0.2s;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  line-height: 50px;
  font-size: 1.4rem;
  min-width: 50%;
  height: 50px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 25px;
  margin-bottom: 25px;
  text-decoration: none;

  &:hover {
    background-color: gray;
  }
`;

const MenuImgContent = styled.div`
  width: 50%;

  @media (max-width: 769px) {
    width: 100%;
  }
`;

const MenuImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MenuTopicsContent = styled.div`
  width: 50%;
  @media (max-width: 769px) {
    width: 90%;
  }
`;

const MenuBox = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const MenuIntroduction = styled.div`
  margin: 15px;
  text-align: center;
`;
