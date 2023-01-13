import { useState } from "react";
import { Allexercise } from "../Allexercise";
import { Header } from "../Header";
import { NavbarMenu } from "../NavbarMenu";
import { Container } from "./styles";

export function Dashboard() {

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