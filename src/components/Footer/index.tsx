import { Card, Container, Level, Tags } from "./styles";

export function Footer() {
  return (
    <Container>
      <Card>
        <h1>Who is this website for?</h1>
        <div>
          Anyone who wants to train at home, or who wants to prepare for
          military training
        </div>
      </Card>
      <Card>
        <h1>Training levels</h1>
        <Level>beginner</Level>
        <Level>intermediate</Level>
      </Card>
      <Card>
        <h1>About Me</h1>
        <div>
          my name is pedro, i'm a react and nodejs programmer, i developed this
          site to test my knowledge in programming
        </div>
        <Tags>
          <a href="https://www.instagram.com/pedromarquess0/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/pedromarques01/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </Tags>
      </Card>
    </Container>
  );
}
