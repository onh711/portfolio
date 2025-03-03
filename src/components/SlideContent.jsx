// Import Swiper React components
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import topImg from "../images/top.jpg";
import kitchen from "../images/kitchen.jpg";
import yakimeshi from "../images/yakimeshi.jpg";
import yakibuta from "../images/yakibuta.jpg";

export const SlideContent = () => {
  return (
    <StyledSwiper
      modules={[Pagination, Navigation, Autoplay]}
      breakpoints={{
        770: {
          slidesPerView: 3,
        },
      }}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      spaceBetween={0}
      pagination={true}
      autoplay={{
        delay: 4000,
      }}
      navigation={true}
      className="mySwiper"
    >
      <StyledSlide className="slide1"></StyledSlide>
      <StyledSlide className="slide2"></StyledSlide>
      <StyledSlide className="slide3"></StyledSlide>
      <StyledSlide className="slide4"></StyledSlide>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%; /* Swiperの幅を指定 */
  height: 800px; /* Swiperの高さを指定 */
  margin: 0 auto; /* 中央揃え */
`;

const StyledSlide = styled(SwiperSlide)`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &.slide1 {
    background-image: url(${topImg});
  }

  &.slide2 {
    background-image: url(${kitchen});
  }

  &.slide3 {
    background-image: url(${yakimeshi});
  }

  &.slide4 {
    background-image: url(${yakibuta});
  }
`;
