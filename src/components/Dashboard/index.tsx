/* eslint-disable @typescript-eslint/no-unused-vars */
import { LegacyRef, RefObject, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Allexercise } from "../Allexercise";
import { Header } from "../Header";
import { NavbarMenu } from "../NavbarMenu";
import { Container } from "./styles";
import { useRef } from "react";
import { ModalProfile } from "../ModalProfile";

import { ModalEditMotivation } from "../ModalEditMotivation";

interface ResponseUser {
  token: string;
  name: string;
}

export function Dashboard() {

  const [userId, setUserid] = useState('');

  const bestExercise = useRef<HTMLDivElement>(null);
  const begginExercise = useRef<HTMLDivElement>(null);
  const intermediateExercise = useRef<HTMLDivElement>(null);

  const location = useLocation();
  
  const user = location.state.user as ResponseUser;

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

  // ModalEditMotivation
  const [stateModalMotivation, setStateModalMotivation] = useState(false);

  function handleOpenModalMotivation() {
    setStateModalMotivation(true);
  }

  function handleCloseModalMotivation() {
    setStateModalMotivation(false)
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
        openModalMotivation={handleOpenModalMotivation}
        tokenUser={user.token}
        stateModalProfile={stateModalProfile} 
        closeModalProfile={handleCloseModalProfile}
        setUserId={setUserid}
      />
      <ModalEditMotivation
        userId={userId}
        stateModalMotivation={stateModalMotivation}
        closeModalMotivation={handleCloseModalMotivation}
      />
    </>
  );
}