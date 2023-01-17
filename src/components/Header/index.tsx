import { Container, ItemMenu, Menu, Profile } from "./styles";

import imgprofile from '../../assets/images/profile.jpg'

interface HeaderProps {
  openNavbar: () => void;
  closeNavbar: () => void;
  stateNavbarMenu: boolean
}

export function Header({ openNavbar, closeNavbar, stateNavbarMenu }: HeaderProps) {

  function openNavbarMenu() {
    openNavbar();
    if (stateNavbarMenu === true) {
      closeNavbar();
    }
  }

  return (
    <Container>
      <Menu>
        <ItemMenu onClick={openNavbarMenu}><i className="fa-solid fa-bars"></i></ItemMenu>
        <ItemMenu><i className="fa-solid fa-bell"></i></ItemMenu>
        <ItemMenu><i className="fa-solid fa-gear"></i></ItemMenu>
        <Profile>
          <img src={imgprofile} alt="" />
        </Profile>
      </Menu>
    </Container>
  );
}