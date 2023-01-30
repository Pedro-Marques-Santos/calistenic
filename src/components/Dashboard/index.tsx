import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Allexercise } from "../Allexercise";
import { Header } from "../Header";
import { NavbarMenu } from "../NavbarMenu";
import { Container } from "./styles";
import { useRef } from "react";
import { ModalProfile } from "../ModalProfile";

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


  //NavbarMenu
  const [stateNavbarMenu, setNewStateNavbarMenu] = useState(false);

  function handleOpenNavbarMenu() {
    setNewStateNavbarMenu(true);
  }

  function handleCloseNavbarMenu() {
    setNewStateNavbarMenu(false);
  }

  // ModalProfile
  const [stateModalProfile, setStateModalProfile] = useState(false);

  function handleOpenModalProfile() {
    setStateModalProfile(true);
  }

  function handleCloseModalProfile() {
    setStateModalProfile(false);
  }

  return (
    <>
    <Container>
      <Header
        openNavbar={handleOpenNavbarMenu}
        closeNavbar={handleCloseNavbarMenu}
        stateNavbarMenu={stateNavbarMenu}

        openModalProfile={handleOpenModalProfile}
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

        openModalProfile={handleOpenModalProfile}
      />
    </Container>
    <ModalProfile 
        stateModalProfile={stateModalProfile} 
        closeModalProfile={handleCloseModalProfile}
      />
    </>
  );
}