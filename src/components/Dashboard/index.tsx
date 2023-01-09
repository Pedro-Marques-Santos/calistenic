import { Allexercise } from "../Allexercise";
import { Header } from "../Header";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Allexercise />
    </Container>
  );
}