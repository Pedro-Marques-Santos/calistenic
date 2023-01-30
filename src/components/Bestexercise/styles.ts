import styled from "styled-components";

export const Container = styled.div``;

export const ImgLogo = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 400px;
    min-width: 220px;
    object-fit: cover;
  }
`;

export const TypeExercise = styled.div`
  font-family: "Gotu", sans-serif;
  font-size: 19px;
  display: flex;
  justify-content: center;
  color: var(--white);
  margin-top: -40px;
`;

export const CarouselContainer = styled.div`
  .slick-prev:before {
    margin-left: -8px;
    content: "←";
  }

  max-width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  div {
    img {
      cursor: pointer;
      margin: 0 auto;
      box-shadow: 0px 4px 4px 0px var(--dark);
      object-fit: cover;
      @media (max-width: 500px) {
        width: 100%;
      }
    }
  }
  @media (max-width: 900px) {
    max-width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 240px;
  }

  @media (max-width: 305px) {
    max-width: 220px;
  }
`;
