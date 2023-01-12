import { Container, ItemMenu, Menu, Profile } from "./styles";

export function Header() {

  function openNavbar() {
    console.log('aqui')
  }

  return (
    <Container>
      <Menu>
        <ItemMenu onClick={openNavbar}><i className="fa-solid fa-bars"></i></ItemMenu>
        <ItemMenu><i className="fa-solid fa-bell"></i></ItemMenu>
        <ItemMenu><i className="fa-solid fa-gear"></i></ItemMenu>
        <Profile></Profile>
      </Menu>
    </Container>
  );
}