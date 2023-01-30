import { RefObject } from "react";
import { CloseNavbarMenu, Container, ItemMenu } from "./styles";

interface NavbarMenuProps {
  stateNavbarMenu: boolean;
  closeNavbar: () => void;
  refBestExercise: RefObject<HTMLDivElement>;
  refBegginerExercise: RefObject<HTMLDivElement>;
  refIntermediateExercise: RefObject<HTMLDivElement>;
  openModalProfile: () => void;
}

export function NavbarMenu({ 
  stateNavbarMenu, 
  closeNavbar, 
  refBestExercise, 
  refBegginerExercise, 
  openModalProfile,
  refIntermediateExercise }: NavbarMenuProps) {

  function closeNavBarMenu() {
    closeNavbar();
  }

  function handleBestExercise() {
    closeNavbar();
    window.scrollTo({
      top: refBestExercise.current?.offsetTop,
    });
  }

  function handleBegginersExercise() {
    closeNavbar();
    window.scrollTo({
      top: refBegginerExercise.current?.offsetTop,
    });
  }

  function handleIntermediateExercise() {
    closeNavbar();
    window.scrollTo({
      top: refIntermediateExercise.current?.offsetTop,
    });
  }

  function handleOpenModalProfile() {
    closeNavbar();
    openModalProfile();
  }

  return (
    <Container
      stateNavbarMenu={stateNavbarMenu}
    >
      <CloseNavbarMenu>
        <div>Calisthenic</div>
        <i onClick={closeNavBarMenu} className="fa-solid fa-circle-xmark"></i>
      </CloseNavbarMenu>
      <ItemMenu onClick={handleBestExercise}>
        <i className="fa-solid fa-infinity"></i>
        <div>Best exercise</div>
      </ItemMenu>
      <ItemMenu onClick={handleBegginersExercise}>
        <i className="fa-solid fa-chart-simple"></i>
        <div>Exercises for beginners</div>
      </ItemMenu>
      <ItemMenu onClick={handleIntermediateExercise}>
        <i className="fa-solid fa-chart-line"></i>
        <div>Intermediate exercises</div>
      </ItemMenu>
      <ItemMenu onClick={handleOpenModalProfile}>
        <i className="fa-solid fa-user"></i>
        <div>Profile</div>
      </ItemMenu>
      <ItemMenu>
        <i className="fa-solid fa-right-from-bracket"></i>
        <div>Logaut</div>
      </ItemMenu>
    </Container>
  )
}