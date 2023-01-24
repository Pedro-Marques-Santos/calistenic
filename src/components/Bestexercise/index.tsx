import { CarouselContainer, Container, ImgLogo, TypeExercise } from "./styles";

import Slider from "react-slick";

import imgLogo from "../../assets/images/logo.svg";

import img1 from '../../assets/imgcarousel/img1.svg'
import img2 from '../../assets/imgcarousel/img2.svg'
import img3 from '../../assets/imgcarousel/img3.svg'
import img4 from '../../assets/imgcarousel/img4.svg'
import { RefObject } from "react";

let settings = {
  infinite: false,
  speed: 700,
  slidesToShow: 2,
  adaptiveHeight: true,
};

interface BestexerciseProps {
  refBestExercise: RefObject<HTMLDivElement>;
}

export function Bestexercise({ refBestExercise }: BestexerciseProps) {

  return (
    <Container>
      <ImgLogo>
        <img src={imgLogo} alt="" />
      </ImgLogo>
      <TypeExercise ref={refBestExercise}>Best exercise</TypeExercise>
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
