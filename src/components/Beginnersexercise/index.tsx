import { Container, ContainerExercise, Exercise, TypeExercise } from "./styles";

import img1 from '../../imgcarousel/img1.svg'

export function Beginnersexercise() {
  return (
    <Container>
      <TypeExercise>exercises for beginners</TypeExercise>
      <ContainerExercise>
        <Exercise>
          <img src={img1} alt="" />
        </Exercise>
        <Exercise>
          <img src={img1} alt="" />
        </Exercise>
        <Exercise>
          <img src={img1} alt="" />
        </Exercise>
        <Exercise>
          <img src={img1} alt="" />
        </Exercise>
      </ContainerExercise>
    </Container>
  );
}