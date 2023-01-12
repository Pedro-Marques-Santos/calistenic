import { Beginnersexercise } from "../Beginnersexercise";
import { Bestexercise } from "../Bestexercise";
import { Footer } from "../Footer";
import { Intermediateexercise } from "../Intermediateexercises";
import { Container } from "./styles";

export function Allexercise() {
  return (
    <Container>
      <Bestexercise />
      <Beginnersexercise />
      <Intermediateexercise />
      <Footer />
    </Container>
  );
}