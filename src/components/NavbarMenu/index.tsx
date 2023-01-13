import { CloseNavbarMenu, Container, ItemMenu } from "./styles";

interface NavbarMenuProps {
  stateNavbarMenu: boolean;
  closeNavbar: () => void;
}

export function NavbarMenu({ stateNavbarMenu, closeNavbar }: NavbarMenuProps) {

  function closeNavBarMenu() {
    closeNavbar();
  }

  return (
    <Container
      stateNavbarMenu={stateNavbarMenu}
    >
      <CloseNavbarMenu>
        <div>Calisthenic</div>
        <i onClick={closeNavBarMenu} className="fa-solid fa-circle-xmark"></i>
      </CloseNavbarMenu>
      <ItemMenu>
        <i className="fa-solid fa-infinity"></i>
        <div>Best exercise</div>
      </ItemMenu>
      <ItemMenu>
        <i className="fa-solid fa-chart-simple"></i>
        <div>Exercises for beginners</div>
      </ItemMenu>
      <ItemMenu>
        <i className="fa-solid fa-chart-line"></i>
        <div>Intermediate exercises</div>
      </ItemMenu>
      <ItemMenu>
        <i className="fa-solid fa-user"></i>
        <div>Profile</div>
      </ItemMenu>
      <ItemMenu>
        <i className="fa-solid fa-envelope"></i>
        <div>About us</div>
      </ItemMenu>
      <ItemMenu>
        <i className="fa-solid fa-right-from-bracket"></i>
        <div>Logaut</div>
      </ItemMenu>
    </Container>
  )
}