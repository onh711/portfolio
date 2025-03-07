import { Link } from "react-router-dom";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { StyledLink } from "./Menu";
import { useState } from "react";
import { noticeList } from "../../../data/noticeList";

export const Topics = () => {
  const { ref: titleRef, inView: titleInview } = useInView({
    rootMargin: "-10px",
    triggerOnce: true,
  });

  const [ulAnimationFinished, setUlAnimationFinished] = useState(false);

  return (
    <>
      <Title ref={titleRef} $inView={titleInview}>
        お知らせ
      </Title>
      <TopicsWrapper>
        <TopicsContent>
          <TopicsUl>
            {noticeList.slice(0, 5).map((topic, index) => {
              const { ref: animeRef, inView: animeInView } = useInView({
                rootMargin: "-10px",
                triggerOnce: true,
              });

              return (
                <AnimationLi
                  ref={animeRef}
                  $inView={animeInView}
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onAnimationEnd={() => {
                    index === noticeList.slice(0, 5).length - 1 && setUlAnimationFinished(true);
                  }}
                >
                  <Link to={`/topic/${topic.id}`}>
                    <div>
                      <TopicsDate>{topic.date}</TopicsDate>
                      <TopicsNews>{topic.information}</TopicsNews>
                    </div>
                    <Arrow></Arrow>
                    <TopicsLabel>{topic.title}</TopicsLabel>
                  </Link>
                </AnimationLi>
              );
            })}
          </TopicsUl>
          <TopicsListLink $inView={ulAnimationFinished}>
            <StyledLink to={"/topic"}>お知らせ一覧</StyledLink>
          </TopicsListLink>
        </TopicsContent>
      </TopicsWrapper>
    </>
  );
};

const Title = styled.div`
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

const TopicsWrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
`;

const TopicsContent = styled.div`
  margin: 30px 45px 0;
  max-width: 1300px;
  border-top: 1px solid;
  animation: slideIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-180px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const TopicsUl = styled.ul`
  padding: 0;
  margin: 0;

  div {
    align-items: center;
    display: flex;
    position: relative;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const AnimationLi = styled.li`
  padding: 0;
  font-size: 2rem;
  list-style: none;
  border-bottom: 1px solid;
  transition: 0.3s;
  animation: ${({ $inView }) =>
    $inView ? "slideIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards" : "none"};
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  animation-fill-mode: backwards;

  @keyframes slideIn {
    0% {
      transform: translateX(-180px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &:hover {
    background-color: #e6f8f8e4;
  }
`;

const TopicsDate = styled.p`
  width: 145px;
  font-size: 1.5rem;
`;

const TopicsNews = styled.div`
  color: red;
  border: 1px solid;
  height: 25px;
  width: 85px;
  font-size: 1.3rem;
  font-weight: 600;
  justify-content: center;
`;

const TopicsLabel = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  margin-left: 10%;
  margin-bottom: 18px;

  @media (max-width: 805px) {
    margin-left: 10%;
  }

  @media (max-width: 769px) {
    margin-left: 10px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 10px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  transform: rotate(45deg);
  left: 95%;

  @media (max-width: 630px) {
    left: 90%;
  }
`;

const TopicsListLink = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  animation: ${({ $inView }) => ($inView ? "0.3s fadeIn ease-in-out forwards" : "none")};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
