import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;

  margin-top: 114px;
  @media (max-width: 500px) {
    max-width: 350px;
    padding-left: 3px;
    padding-right: 3px;
  } 
`

export const TypeExercise = styled.div`
  font-family: 'Gotu', sans-serif;
  font-size: 19px;
  display: flex;
  justify-content: center;
  color: var(--white);
  margin-top: -40px;
`

export const ContainerExercise = styled.div`
  background: #282851;
  width: 100%;
  border-radius: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Exercise = styled.div`
  margin: 0 auto;
  margin-top: 55px;
  :last-child {
    margin-bottom: 55px;
  }

  img {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px var(--dark);
    object-fit: cover;
    @media (max-width: 500px) {
        width: 240px;
    } 
  }
`