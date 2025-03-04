import styled from "styled-components";
import { Link } from "react-router-dom";
import { noticeList } from "../data/noticeList";

export const TopicsLists = () => {
  return (
    <>
      <TitleWrapper>
        <Title>お知らせ一覧</Title>
      </TitleWrapper>
      <TopicsWrapper>
        <TopicsContainer>
          {noticeList.map((notice, index) => (
            <StyledLink key={index} to={`/topic/${notice.id}`}>
              <TopicsContent>
                <ContentTitle>{notice.title}</ContentTitle>
                <UpdatedDate>記載日: {notice.date}</UpdatedDate>
              </TopicsContent>
            </StyledLink>
          ))}
        </TopicsContainer>
      </TopicsWrapper>
    </>
  );
};

const TitleWrapper = styled.div`
  margin: 70px auto 0;
`;

const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1.5rem;
`;

const TopicsWrapper = styled.div`
  margin: 0 30px;
`;

const TopicsContainer = styled.div`
  margin: 50px auto 100px;
  width: 100%;
  max-width: 1000px;
`;

const ContentTitle = styled.h3`
  font-size: 1.7rem;
  margin: 0 auto;
  padding-top: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: 0.3s;

  &:hover {
    color: #f54747;
  }
`;

const TopicsContent = styled.div`
  border-bottom: 1px dotted;
`;

const UpdatedDate = styled.p`
  text-align: end;
  font-size: 1.2rem;
`;
