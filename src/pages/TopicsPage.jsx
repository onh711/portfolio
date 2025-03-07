import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import noImage from "../images/noimage.png";
import { noticeList } from "../data/noticeList";

export const TopicsPage = () => {
  const { id } = useParams();
  //useParamsフックを使用してURLのパラメータからidを取得する
  const topic = noticeList.find((item) => item.id === id);

  //noticeListに存在しないURLをリクエストしたらエラーページを表示する
  if (!topic) {
    return <NotFoundContent>該当のお知らせが見つかりません。</NotFoundContent>;
  }

  return (
    <>
      <TopicTitle>{topic.title}</TopicTitle>
      <TopicContainer>
        <TopicDate>{topic.date}</TopicDate>
        <TopicContent>{topic.content}</TopicContent>
      </TopicContainer>
      <TopicImg src={topic.img === "" ? noImage : topic.img} />

      <OtherTopics>
        <OtherTopicTitle>その他のお知らせ</OtherTopicTitle>
        <OtherTopicText>
          {noticeList
            // 現在のお知らせのidと同じidのお知らせを除外して表示する
            .filter((notice) => notice.id !== id)
            .map((notice) => (
              <li key={notice.id}>
                <StyledLink to={`/topic/${notice.id}`}>{notice.title}</StyledLink>
              </li>
            ))}
        </OtherTopicText>
      </OtherTopics>
    </>
  );
};

const NotFoundContent = styled.div`
  font-size: 1.7rem;
  margin: 100px auto;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopicTitle = styled.div`
  text-align: center;
  margin: 200px 30px 130px;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1.5rem;

  @media (max-width: 769px) {
    font-size: 2.3rem;
  }
`;

const TopicContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
`;

const TopicDate = styled.p`
  font-size: 2rem;
`;

const TopicContent = styled.p`
  margin: 0 auto;
  white-space: pre-line;
  font-size: 1.7rem;

  @media (max-width: 769px) {
    font-size: 1.5rem;
  }
`;

const TopicImg = styled.img`
  display: block;
  margin: 100px auto;
  width: 70%;
  max-width: 640px;
`;

const OtherTopics = styled.div`
  margin: 0 auto 100px;
  max-width: 1200px;
  li {
    list-style: none;
    font-size: 1.6rem;
  }
`;

const OtherTopicTitle = styled.h2`
  font-size: 1.9rem;
  text-align: center;
`;

const OtherTopicText = styled.ul`
  text-align: center;
  margin: 0 20px;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: 0.3s;

  &:hover {
    color: #f54747;
    font-weight: 600;
  }
`;
