import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Allexercise } from "../Allexercise";
import { Header } from "../Header";
import { NavbarMenu } from "../NavbarMenu";
import { Container } from "./styles";
import { useRef } from "react";
import { ModalProfile } from "../ModalProfile";

import { ModalEditMotivation } from "../ModalEditMotivation";

interface CustomizedState {
  data: {
    token: string;
  } | null;
}

interface IResponseUser {
  motivation: string;
  avatar: string | null;
  name: string;
}

export function Dashboard() {
  const [profile, setProfile] = useState({
    motivation: "",
    avatar: null as string | null,
    name: "",
  });

  const [error, setError] = useState({
    invalidToken: false,
  });

  const bestExercise = useRef<HTMLDivElement>(null);
  const begginExercise = useRef<HTMLDivElement>(null);
  const intermediateExercise = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const state = location.state as CustomizedState;

  const token = state?.data?.token;
  console.log(token);

  useEffect(() => {
    const profileUser = async () => {
      let response = await fetch("http://localhost:3333/profileUser", {
        method: "POST",
        headers: new Headers({
          Authorization: "Bearer " + token,
          "Content-type": "application/json; charset=UTF-8",
        }),
      });

      if (response.status === 200) {
        let result = (await response.json()) as IResponseUser;
        setProfile({
          motivation: result.motivation,
          name: result.name,
          avatar: result.avatar,
        });
      } else {
        setError({
          invalidToken: true,
        });
      }
    };
    profileUser();
  }, [token]);

  async function editUserProfile() {
    let response = await fetch("http://localhost:3333/profileUser", {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
    });

    if (response.status === 200) {
      let result = (await response.json()) as IResponseUser;
      console.log(result);
      setProfile({
        motivation: result.motivation,
        name: result.name,
        avatar: result.avatar,
      });
    } else {
      setError({
        invalidToken: true,
      });
    }
  }

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
    setStateModalProfile(false);
    setStateModalMotivation(true);
  }

  function handleCloseModalMotivation() {
    setStateModalProfile(true);
    setStateModalMotivation(false);
  }

  return (
    <>
      {error.invalidToken === true ? (
        <>Token inválido, faça login novamente!</>
      ) : (
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
            stateModalProfile={stateModalProfile}
            closeModalProfile={handleCloseModalProfile}
            userProfile={profile}
          />
          <ModalEditMotivation
            tokenUser={token}
            stateModalMotivation={stateModalMotivation}
            closeModalMotivation={handleCloseModalMotivation}
            editUserProfile={editUserProfile}
          />
        </>
      )}
    </>
  );
}
