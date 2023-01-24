import { Container, ContainerExercise, Exercise, TypeExercise } from "./styles";

import img1 from '../../assets/imagesintermediate/img1.svg'
import img2 from '../../assets/imagesintermediate/img2.svg'
import img3 from '../../assets/imagesintermediate/img3.svg'
import img4 from '../../assets/imagesintermediate/img4.svg'
import { RefObject } from "react";

interface IIntermediateexerciseProps {
  refIntermediateExercise: RefObject<HTMLDivElement>;
}

export function Intermediateexercise({ refIntermediateExercise }: IIntermediateexerciseProps) {
  return (
    <div>
      <Container>
        <TypeExercise ref={refIntermediateExercise}>intermediate exercises</TypeExercise>
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
    </div>
  );
}