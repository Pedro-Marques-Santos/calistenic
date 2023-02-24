import {
  Base,
  Cardcontent,
  Container,
  Difficulty,
  Level,
  Muscles,
  Video,
} from "./styles";

import { useLocation } from "react-router-dom";

import background from "../../assets/videosexercicios/teste5.mp4";
import { useEffect, useState } from "react";

interface ExerciseProps {
  typeExercise: string;
}

interface ResponseExercise {
  typeexercise: {
    description: string;
    id: string;
    level: string;
    muscules: string;
    name: string;
  };
}

export function Exercise() {
  const [error, setError] = useState({
    exerciseInvalid: false,
  });

  const location = useLocation();

  const [resultResponse, setResultResponse] = useState({
    description: "",
    level: "",
    muscules: "",
    name: "",
  });

  const exercise = location.state.exercise as ExerciseProps;

  useEffect(() => {
    const buscarExercise = async () => {
      let data = {
        name: exercise.typeExercise,
      };

      let response = await fetch("http://localhost:3333/findByExercise", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (response.status === 200) {
        let result = (await response.json()) as ResponseExercise;

        setResultResponse({
          description: result.typeexercise.description,
          level: result.typeexercise.level,
          muscules: result.typeexercise.muscules,
          name: result.typeexercise.name,
        });

        setError({
          exerciseInvalid: false,
        });
      } else {
        setError({
          exerciseInvalid: true,
        });
      }
    };
    buscarExercise();
  });

  return (
    <>
      {error.exerciseInvalid === true ? (
        <>Exercício não existe!</>
      ) : (
        <Base>
          <Container>
            <h1>{resultResponse.name}</h1>
            <Cardcontent>
              <Level>
                <h2>LEVEL</h2>
                <Difficulty>{resultResponse.level}</Difficulty>
              </Level>
              <Video>
                <video src={background} controls />
              </Video>
              <Muscles>
                <h3>Grupos musculares:</h3>
                <div>{resultResponse.muscules}</div>
              </Muscles>
              <Muscles>
                <h3>Descrição:</h3>
                <div>{resultResponse.description}</div>
              </Muscles>
            </Cardcontent>
          </Container>
        </Base>
      )}
    </>
  );
}
