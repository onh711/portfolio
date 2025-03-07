import Iframe from "react-iframe";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { shopInfo } from "../../../data/shopInfo";

export const StoreInformation = () => {
  const { ref: titleRef, inView: titleInview } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });

  const { ref: mapRef, inView: mapInView } = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <>
      <Title ref={titleRef} $inView={titleInview}>
        店舗情報
      </Title>
      <StoreInformationContent>
        <IframeContainer ref={mapRef} $inView={mapInView}>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4119.775439167681!2d141.34081623442643!3d43.101968814437136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b28c69cbf94d1%3A0xd4979b0ad8efca0c!2z44CSMDAxLTAwMzUg5YyX5rW36YGT5pyt5bmM5biC5YyX5Yy65YyX77yT77yV5p2h6KW_77yT5LiB55uu77yS4oiS77yR!5e0!3m2!1sja!2sjp!4v1737009761686!5m2!1sja!2sjp"
            width="100%"
            height="97%"
            style="border:0;"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Iframe>
        </IframeContainer>

        <StoreInformationWrapper>
          <StoreInformationContainer ref={infoRef} $inView={infoInView}>
            {shopInfo.map((info, index) => (
              <StoreInformationText key={index}>
                {info.title}:{info.Content}
              </StoreInformationText>
            ))}
          </StoreInformationContainer>
        </StoreInformationWrapper>
      </StoreInformationContent>
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

const StoreInformationContent = styled.div`
  width: 95%;
  display: flex;
  margin: 30px auto 0;
  max-width: 1300px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StoreInformationWrapper = styled.div`
  width: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StoreInformationContainer = styled.div`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? " translateX(0px)" : "translateX(90px)")};
  transition: all 0.8s ease-out;
  transition-delay: 0.6s;

  @media (max-width: 768px) {
    width: 90%;
    margin: 25px;
  }
`;

const IframeContainer = styled.div`
  margin-top: 25px;
  width: 50%;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? " translateX(0px)" : "translateX(-90px)")};
  transition: all 0.8s ease-out;
  transition-delay: 0.6s;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    height: 480px;
  }
`;

const StoreInformationText = styled.p`
  border-bottom: 1px solid;
  font-size: 1.4rem;
  padding-bottom: 15px;
  margin-left: 10px;
`;
