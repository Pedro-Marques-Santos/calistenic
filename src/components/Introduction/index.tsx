import { Base, ButtonStart, CoachContent, Container, Emoji, ImgPeaplo, Instructor, Name, TextInitial, TypeCoach, TypeTraining } from "./styles";

import peaple from "../../assets/images/peaplo-test.png";

import { useNavigate } from "react-router-dom";

export function Introduction() {

  const navegate = useNavigate();

  function goAuthentication() {
    navegate('/authentication')
  }

  return (
    <Base>
      <Container>
        <ImgPeaplo>
          <img src={peaple} alt="" />
        </ImgPeaplo>
        <TextInitial>
          <TypeTraining>Military Training for Beginners</TypeTraining>
          <TypeCoach>
            <Name>Pedro Marques</Name>
            <Instructor>Calistenic</Instructor>
            <CoachContent>teaching how to do physical exercises are present in military physical tests</CoachContent>
          </TypeCoach>
        </TextInitial>
        <ButtonStart onClick={goAuthentication}>
          <div>Let’s Start</div>
          <Emoji>↠</Emoji>
        </ButtonStart>
      </Container>
    </Base>
  );
}