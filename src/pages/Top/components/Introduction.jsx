import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import introImg from "../../../images/Intro.jpg";

export const Introduction = () => {
  const { ref, inView } = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <>
      <IntroductionTitle>記憶に残る一杯を届けたい</IntroductionTitle>
      <IntroductionTitleSentence>
        私たちが目指すのは、初めて食べたときの感動がいつまでも記憶に残るラーメンです。
        <br />
        北海道産の厳選した味噌をベースに、特製のブレンドだれを使用したスープは、
        <br />
        濃厚でありながらも、最後まで飽きることなく食べられる味わいを追求しました。
      </IntroductionTitleSentence>
      <ImgWrapper>
        <IntroductionImg src={introImg} alt="ラーメン画像" ref={ref} $inView={inView} />
      </ImgWrapper>
    </>
  );
};

const IntroductionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  width: 70%;
  margin: 50px auto;
  text-align: center;
`;

const IntroductionTitleSentence = styled.div`
  font-size: 1.6rem;
  text-align: center;
  margin: 0 auto 50px;
  width: 80%;
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 1300px;
`;

const IntroductionImg = styled.img`
  display: flex;
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? " translateX(0px)" : "translateX(90px)")};
  transition: all 0.8s ease-out;
  transition-delay: 0.6s;
`;
