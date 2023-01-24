import { Container, ContainerExercise, Exercise, TypeExercise } from "./styles";

import img1 from '../../assets/imagesbeginners/img1.svg'
import img2 from '../../assets/imagesbeginners/img2.svg'
import img3 from '../../assets/imagesbeginners/img3.svg'
import img4 from '../../assets/imagesbeginners/img4.svg'
import { RefObject } from "react";

interface BeginnerexerciseProps {
  refBegginerExercise: RefObject<HTMLDivElement>;
}

export function Beginnersexercise({ refBegginerExercise }: BeginnerexerciseProps) {
  return (
    <Container>
      <TypeExercise ref={refBegginerExercise}>exercises for beginners</TypeExercise>
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