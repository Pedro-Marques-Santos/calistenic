import { Container, ContainerExercise, Exercise, TypeExercise } from "./styles";

import img1 from '../../imagesintermediate/img1.svg'
import img2 from '../../imagesintermediate/img2.svg'
import img3 from '../../imagesintermediate/img3.svg'
import img4 from '../../imagesintermediate/img4.svg'

export function Intermediateexercise() {
  return (
    <div>
      <Container>
        <TypeExercise>intermediate exercises</TypeExercise>
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