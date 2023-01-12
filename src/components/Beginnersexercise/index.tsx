import { Container, ContainerExercise, Exercise, TypeExercise } from "./styles";

import img1 from '../../imagesbeginners/img1.svg'
import img2 from '../../imagesbeginners/img2.svg'
import img3 from '../../imagesbeginners/img3.svg'
import img4 from '../../imagesbeginners/img4.svg'

export function Beginnersexercise() {
  return (
    <Container>
      <TypeExercise>exercises for beginners</TypeExercise>
      <ContainerExercise>
        <Exercise>
          <img src={img1} alt="" />
        </Exercise>
        <Exercise>
          <img src={img2} alt="" />
        </Exercise>
        <Exercise>
          <img src={img3} alt="" />
        </Exercise>
        <Exercise>
          <img src={img4} alt="" />
        </Exercise>
      </ContainerExercise>
    </Container>
  );
}