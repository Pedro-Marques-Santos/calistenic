import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Allexercise } from "../Allexercise";
import { Header } from "../Header";
import { NavbarMenu } from "../NavbarMenu";
import { Container } from "./styles";
import { useRef } from "react";

interface ResponseUser {
  token: string;
  name: string;
}

export function Dashboard() {
  const bestExercise = useRef<HTMLDivElement>(null);
  const begginExercise = useRef<HTMLDivElement>(null);
  const intermediateExercise = useRef<HTMLDivElement>(null);

  const location = useLocation();
  

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = location.state.user as ResponseUser;
  // console.log(user)


  const [stateNavbarMenu, setNewStateNavbarMenu] = useState(false);

  function handleOpenNavbarMenu() {
    setNewStateNavbarMenu(true);
  }

  function handleCloseNavbarMenu() {
    setNewStateNavbarMenu(false);
  }

  return (
    <Container>
      <Header
        openNavbar={handleOpenNavbarMenu}
        closeNavbar={handleCloseNavbarMenu}
        stateNavbarMenu={stateNavbarMenu}
      />
      <Allexercise 
        refBestExercise={bestExercise}
        refBegginerExercise={begginExercise}
        refIntermediateExercise={intermediateExercise}
      />
      <NavbarMenu
        stateNavbarMenu={stateNavbarMenu}
        closeNavbar={handleCloseNavbarMenu}

        refBestExercise={bestExercise}
        refBegginerExercise={begginExercise}
        refIntermediateExercise={intermediateExercise}
      />
    </Container>
  );
}