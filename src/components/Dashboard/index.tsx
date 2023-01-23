import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Allexercise } from "../Allexercise";
import { Header } from "../Header";
import { NavbarMenu } from "../NavbarMenu";
import { Container } from "./styles";

interface ResponseUser {
  token: string;
  name: string;
}

export function Dashboard() {
  const location = useLocation();

  const user = location.state.user as ResponseUser;
  console.log(user)


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
      <Allexercise />
      <NavbarMenu
        stateNavbarMenu={stateNavbarMenu}
        closeNavbar={handleCloseNavbarMenu}
      />
    </Container>
  );
}