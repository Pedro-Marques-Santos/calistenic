import { Card, Container, Level, Tags } from "./styles";

export function Footer() {
  return (
    <Container>
      <Card>
        <h1>Who is this website for?</h1>
        <div>Anyone who wants to train at home, or who wants to prepare for military training</div>
      </Card>
      <Card>
        <h1>Training levels</h1>
        <Level>beginner</Level>
        <Level>intermediate</Level>
      </Card>
      <Card>
        <h1>About Me</h1>
        <div>my name is pedro, i'm a react and nodejs programmer, i developed this site to test my knowledge in programming</div>
        <Tags>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-envelope"></i>
        </Tags>
      </Card>
    </Container>
  );
}