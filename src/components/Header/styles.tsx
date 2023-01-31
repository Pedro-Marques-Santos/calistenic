import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--black-main);
  box-shadow: 0px 3px 3px 0px var(--black-light);
  display: flex;
  align-items: center;
  @media (max-width: 400px) {
    justify-content: center;
  }
`

export const Menu = styled.div`
  margin-left: 28px;
  display: flex;
`

export const ItemMenu = styled.div`
  cursor: pointer;
  color: var(--gray-fundo);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
  i {
    font-size: 21px;
  }
`

export const Profile = styled.div`
  cursor: pointer;
  width: 74px;
  height: 60px;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`