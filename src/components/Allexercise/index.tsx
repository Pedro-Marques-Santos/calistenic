import { RefObject } from "react";
import { Beginnersexercise } from "../Beginnersexercise";
import { Bestexercise } from "../Bestexercise";
import { Footer } from "../Footer";
import { Intermediateexercise } from "../Intermediateexercises";
import { Container } from "./styles";

interface AllexerciseProps {
  refBestExercise: RefObject<HTMLDivElement>;
  refBegginerExercise: RefObject<HTMLDivElement>;
  refIntermediateExercise: RefObject<HTMLDivElement>;
}

export function Allexercise({ refBestExercise, refBegginerExercise, refIntermediateExercise }: AllexerciseProps) {
  return (
    <Container>
      <Bestexercise refBestExercise={refBestExercise}/>
      <Beginnersexercise refBegginerExercise={refBegginerExercise}/>
      <Intermediateexercise refIntermediateExercise={refIntermediateExercise}/>
      <Footer />
    </Container>
  );
}