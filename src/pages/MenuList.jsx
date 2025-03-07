import styled from "styled-components";
import { mainMenu, sideMenu, toppingMenu } from "../data/menuItems";
import noImage from "../images/noimage.png";

export const MenuList = () => {
  return (
    <>
      <MainMenuContent>
        <Title>メニュー</Title>
        <MainMenu>
          {mainMenu.map((main, index) => (
            <div key={index}>
              <MenuImg src={main.img === "" ? noImage : main.img} alt={main.name} />
              <h3>{main.name}</h3>
              <Description>{main.description}</Description>
              <Price>{main.price}</Price>
            </div>
          ))}
        </MainMenu>
      </MainMenuContent>

      <OtherMenuContent>
        <ToppingMenuContent>
          <MenuTitle>トッピング</MenuTitle>
          {toppingMenu.map((item, index) => (
            <MenuItem key={index}>
              <MenuName>{item.name}</MenuName>
              <MenuPrice>{item.price}</MenuPrice>
            </MenuItem>
          ))}
        </ToppingMenuContent>

        <SideMenuContent>
          <MenuTitle>サイドメニュー</MenuTitle>
          {sideMenu.map((item, index) => (
            <MenuItem key={index}>
              <MenuName>{item.name}</MenuName>
              <MenuPrice>{item.price}</MenuPrice>
            </MenuItem>
          ))}
        </SideMenuContent>
      </OtherMenuContent>
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
`;

const MainMenuContent = styled.div`
  margin: 70px auto 0;
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainMenu = styled.div`
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 150px;
  margin: 100px 30px 0 30px;
  transition: 0.3s;

  @media (min-width: 769px) {
    display: grid;
  }

  @media (max-width: 1250px) {
    gap: 70px;
  }

  @media (max-width: 1048px) {
    gap: 60px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h3 {
    margin-top: 30px;
    font-size: 2rem;
    font-weight: 500;
  }
`;

const MenuImg = styled.img`
  max-width: 100%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: red;
`;

const Description = styled.p`
  margin: 0 auto;
  font-size: 1.5rem;
  white-space: pre-line;
`;

const OtherMenuContent = styled.div`
  margin: 100px auto;

  justify-content: space-between;
  max-width: 1300px;
  @media (min-width: 769px) {
    display: flex;
  }
`;

const ToppingMenuContent = styled.div`
  flex: 1;
  text-align: center;
`;

const SideMenuContent = styled.div`
  flex: 1;
  text-align: center;
`;

const MenuTitle = styled.h2`
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: 1.5rem;
  margin: 50px;
  @media (max-width: 870px) {
    font-size: 1.5rem;
  }
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  margin: 0 50px 0 50px;
`;

const MenuName = styled.span`
  font-size: 1.4rem;
  text-align: left;
  flex: 1;
`;

const MenuPrice = styled.span`
  font-size: 1.3rem;
  text-align: right;
  flex: 0.5;
  color: red;
`;
