import { Link } from "react-router-dom";
import styled from "styled-components";
import complete from "../images/completePage.jpg";

export const SubmitCompletePage = () => {
  return (
    <>
      <SubmitContainer>
        <SubmitTitle>お問い合わせ完了</SubmitTitle>
        <SubmitImg src={complete} alt="お問い合わせ完了" />
        <SubmitTextWrapper>
          <SubmitTextContainer>
            <Text>お問い合わせありがとうございます。</Text>
            <Text>
              内容を確認後、ご連絡を差し上げますので今しばらくお待ちください。
            </Text>
          </SubmitTextContainer>
        </SubmitTextWrapper>
        <ButtonContainer>
          <Link to={"/"}>
            <StyledButton>トップページに戻る</StyledButton>
          </Link>
        </ButtonContainer>
      </SubmitContainer>
    </>
  );
};

const SubmitContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SubmitTitle = styled.div`
  margin: 0 auto;
  padding-top: 180px;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1.5rem;
`;

const SubmitTextContainer = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #f5f5f5;
  overflow-x: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin: 15px 5px;
`;

const SubmitImg = styled.img`
  display: block;
  margin: 100px auto;
  width: 70%;
  max-width: 640px;
`;

const SubmitTextWrapper = styled.div`
  margin: 0 20px;
`;

const ButtonContainer = styled.div`
  margin: 50px auto;
`;

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: black;
  color: white;
  transition: 0.3s;
  text-decoration: none;
  border: none;

  &:hover {
    background-color: gray;
  }
`;
