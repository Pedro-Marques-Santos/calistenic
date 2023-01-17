import { Base, Cardcontent, Container, Difficulty, Level, Muscles, Video } from "./styles";

import teste from "../../assets/videosexercicios/teste5.mp4"

export function Exercise() {
  return (
    <Base>
      <Container>
        <h1>PUSH UPS</h1>
        <Cardcontent>
          <Level>
            <h2>NÍVEL</h2>
            <Difficulty>INICIANTE</Difficulty>
          </Level>
          <Video>
            <video src={teste} controls />
          </Video>
          <Muscles>
            <h3>Grupos musculares:</h3>
            <div>Peitoral, Tríceps, Ombros</div>
          </Muscles>
          <Muscles>
            <h3>Descrição:</h3>
            <div>Alinhamento das mãos, na linha vertical do corpo, as mãos devem ficam um pouco abaixo do ombro, na direção horizontal, as mãos também devem ficar um pouco afastadas dos ombros, ative o abdômen e execute o movimento tensionando os braços para trás, não para os lados.</div>
          </Muscles>
        </Cardcontent>
      </Container>
    </Base>
  )
}