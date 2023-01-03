import { Base, ButtonStart, CoachContent, Container, Emoji, ImgPeaplo, Instructor, Name, TextInitial, TypeCoach, TypeTraining } from "./styles";

import peaplo from "../../images/peaplo-test.png"

export function Introduction() {
  return (
    <Base>
      <Container>
        <ImgPeaplo>
          <img src={peaplo} alt="" />
        </ImgPeaplo>
        <TextInitial>
          <TypeTraining>Military Training for Beginners</TypeTraining>
          <TypeCoach>
            <Name>Pedro Marques</Name>
            <Instructor>Calistenic</Instructor>
            <CoachContent>teaching how to do physical exercises are present in military physical tests</CoachContent>
          </TypeCoach>
        </TextInitial>
        <ButtonStart>
          <div>Let’s Start</div>
          <Emoji>↠</Emoji>
        </ButtonStart>
      </Container>
    </Base>
  );
}