import { useEffect, useState } from "react";

import { CarouselContainer, Container, ImgLogo, TypeExercise } from "./styles";

import Slider from "react-slick";

import imgLogo from "../../images/logo.svg";

import img1 from '../../imgcarousel/img1.svg'
import img2 from '../../imgcarousel/img2.svg'
import img3 from '../../imgcarousel/img3.svg'
import img4 from '../../imgcarousel/img4.svg'

let settings = {
  infinite: false,
  speed: 700,
  slidesToShow: 2,
  adaptiveHeight: true,
};

export function Bestexercise() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  console.log(windowWidth)

  if (windowWidth < 900) {
    settings = {
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      adaptiveHeight: true,
    };
  }

  if (windowWidth > 900) {
    settings = {
      infinite: false,
      speed: 700,
      slidesToShow: 2,
      adaptiveHeight: true,
    };
  }

  return (
    <Container>
      <ImgLogo>
        <img src={imgLogo} alt="" />
      </ImgLogo>
      <TypeExercise>Best exercise</TypeExercise>
      <CarouselContainer>
        <Slider {...settings} className="carousel">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </Slider>
      </CarouselContainer>
    </Container>
  );
}
