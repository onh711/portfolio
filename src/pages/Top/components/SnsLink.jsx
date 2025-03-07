import { FaSquareXTwitter, FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

export const SnsLink = () => {
  const { ref, inView } = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  const { ref: xRef, inView: isXInView } = useInView({
    rootMargin: "-70px",
    triggerOnce: true,
  });

  const { ref: faceBookRef, inView: isFaceBookInView } = useInView({
    rootMargin: "-70px",
    triggerOnce: true,
  });

  const { ref: instagramRef, inView: isInstagramInView } = useInView({
    rootMargin: "-70px",
    triggerOnce: true,
  });

  const { ref: youtubeRef, inView: isYoutubeInView } = useInView({
    rootMargin: "-70px",
    triggerOnce: true,
  });

  return (
    <>
      <SnsLinks>
        <Lead ref={ref} $inView={inView}>
          Follow Us!
        </Lead>
        <div ref={xRef} style={{ display: "inline-block" }}>
          <XLink $isXInView={isXInView} />
        </div>
        <div ref={faceBookRef} style={{ display: "inline-block" }}>
          <FaceBookLink $isFaceBookInView={isFaceBookInView} />
        </div>
        <div ref={instagramRef} style={{ display: "inline-block" }}>
          <InstagramLink $isInstagramInView={isInstagramInView} />
        </div>
        <div ref={youtubeRef} style={{ display: "inline-block" }}>
          <YoutubeLink $isYoutubeInView={isYoutubeInView} />
        </div>
      </SnsLinks>
    </>
  );
};

const SnsLinks = styled.div`
  max-width: 240px;
  margin: 50px auto 60px;
  text-align: center;
`;

const Lead = styled.div`
  margin: 30px;
  font-size: 2.5rem;
  position: relative;
  color: #000;
  transition: all 0.5s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: ${({ $inView }) => ($inView ? "100%" : "0")};
    height: 2px;
    background-color: #000;
    transition: width 0.5s ease-in-out;
  }
`;

const XLink = styled(FaSquareXTwitter)`
  margin: 0 auto;
  font-size: 60px;
  transition: color 0.4s ease-in-out;
  cursor: pointer;
  color: ${({ $isXInView }) => ($isXInView ? "#000000" : "#808080")};
  position: relative;

  &:hover {
    opacity: 0.7;
  }
`;

const FaceBookLink = styled(FaFacebookSquare)`
  margin: 0 auto;
  font-size: 60px;
  transition: color 0.8s ease-in-out;
  cursor: pointer;
  color: ${({ $isFaceBookInView }) => ($isFaceBookInView ? "#4267b2" : "#000000")};

  &:hover {
    opacity: 0.7;
  }
`;

const InstagramLink = styled(FaSquareInstagram)`
  margin: 0 auto;
  font-size: 60px;
  transition: color 1s ease-in-out;
  cursor: pointer;

  color: ${({ $isInstagramInView }) => ($isInstagramInView ? "#e1306c" : "#000000")};

  &:hover {
    opacity: 0.7;
  }
`;

const YoutubeLink = styled(FaSquareYoutube)`
  margin: 0 auto;
  font-size: 60px;
  transition: color 1.4s ease-in-out;
  cursor: pointer;
  color: ${({ $isYoutubeInView }) => ($isYoutubeInView ? "#ff0000" : "#000000")};
  &:hover {
    opacity: 0.7;
  }
`;
