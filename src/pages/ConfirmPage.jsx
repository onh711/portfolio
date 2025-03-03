import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { formItems } from "../data/formItems";

export const ConfirmPage = () => {
  const location = useLocation();
  const formData = location.state;

  //ContactFormPage.jsxからのデータを送信ボタンを押したときに削除する
  const handleClick = () => {
    const sessionItems = [
      "contactName",
      "mailAddress",
      "phoneNumber",
      "contactDetail",
    ];
    sessionItems.forEach((item) => sessionStorage.removeItem(item));
  };

  return (
    <>
      <ConfirmContainer>
        <ConfirmWrapper>
          <Title>確認画面</Title>
          <SubTitle>
            以下の内容で送信してよろしいですか？
            <br />
            内容に間違いなければ「送信」ボタンを押してください。
          </SubTitle>
          <Container>
            <ConfirmLead>送信内容</ConfirmLead>

            {Object.keys(formData).map((key, index) => (
              <Item key={key}>
                <ConfirmLabel>{formItems[index].item}</ConfirmLabel>
                <ConfirmText>{formData[key]}</ConfirmText>
              </Item>
            ))}
          </Container>
          <ButtonContainer>
            <Link to={"/submit"}>
              <StyledButton onClick={handleClick}>送信</StyledButton>
            </Link>
            <Link to={"/form"}>
              <StyledButton>戻る</StyledButton>
            </Link>
          </ButtonContainer>
        </ConfirmWrapper>
      </ConfirmContainer>
    </>
  );
};

const ConfirmContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const ConfirmWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  margin: 30px;
  padding: 30px;
  border-radius: 10px;
  background-color: #f5f5f5;
  overflow-x: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  margin: 0 auto;
  padding-top: 180px;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1.5rem;
`;

const SubTitle = styled.div`
  padding: 50px;
  font-size: 2rem;
  font-weight: 600;
`;

const ConfirmLead = styled.div`
  margin: 10px 0 40px 0;
  font-size: 2rem;
  font-weight: 600;
`;

const Item = styled.div`
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
  border-top: 1px solid #cccccc;
`;

const ConfirmLabel = styled.span`
  font-weight: bold;
`;

const ConfirmText = styled.span`
  width: 65%;
  float: right;
  padding: 0 0 25px 10%;
  overflow-wrap: break-word;

  @media (max-width: 769px) {
    width: 100%;
    float: left;
    padding: 0;
    display: block;
  }
`;

const ButtonContainer = styled.div`
  margin: 90px auto 133px;
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
