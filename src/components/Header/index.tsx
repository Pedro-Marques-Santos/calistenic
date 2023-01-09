import { Container, ItemMenu, Menu, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Menu>
        <ItemMenu><i className="fa-solid fa-bars"></i></ItemMenu>
        <ItemMenu><i className="fa-solid fa-bell"></i></ItemMenu>
        <ItemMenu><i className="fa-solid fa-gear"></i></ItemMenu>
        <Profile></Profile>
      </Menu>
    </Container>
  );
}