import { CarouselContainer, Container, ImgLogo, TypeExercise } from "./styles";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import imgLogo from "../../assets/images/logo.svg";

import img1 from '../../assets/imgcarousel/img1.svg'
import img2 from '../../assets/imgcarousel/img2.svg'
import img3 from '../../assets/imgcarousel/img3.svg'
import img4 from '../../assets/imgcarousel/img4.svg'
import { RefObject, useEffect, useRef, useState } from "react";

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
  const navegate = useNavigate();

  const pullaps = useRef<HTMLDivElement>(null);
  const pushaps = useRef<HTMLDivElement>(null);
  const negativePullUps = useRef<HTMLDivElement>(null);
  const squat = useRef<HTMLDivElement>(null);

  const carouselExercise = (elementRef : RefObject<HTMLDivElement>) => {
    let typeExercise = '';
    if( elementRef.current?.id ) {
      typeExercise = elementRef.current.id;
    }

    navegate('/exercise', {
      state: {
        exercise: {
        typeExercise: typeExercise
        }
      }
    })
  }

  // Carousel edit
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
      <TypeExercise ref={refBestExercise}>Best exercise</TypeExercise>
      <CarouselContainer>
        <Slider {...settings} className="carousel">
          <div id="PULL UPS" ref={pullaps} onClick={() => carouselExercise(pullaps)}>
            <img src={img1} alt="" />
          </div>
          <div id="PUSH UPS" ref={pushaps} onClick={() => carouselExercise(pushaps)}>
            <img src={img2} alt="" />
          </div>
          <div id="NEGATIVE PULL APS" ref={negativePullUps} onClick={() => carouselExercise(negativePullUps)}>
            <img src={img3} alt="" />
          </div>
          <div id="SQUAT" ref={squat} onClick={() => carouselExercise(squat)}>
            <img src={img4} alt="" />
          </div>
        </Slider>
      </CarouselContainer>
    </Container>
  );
}
