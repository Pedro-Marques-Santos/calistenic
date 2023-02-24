import styled from "styled-components";

interface ContainerProps {
  stateNavbarMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 80px;
  transition: 1.5s;
  left: ${(props) => (props.stateNavbarMenu ? "0px" : "-50%")};
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 300px;
  background: var(--gray-dark);
  color: var(--gray-fundo);
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  @media (max-width: 650px) {
    left: ${(props) => (props.stateNavbarMenu ? "0px" : "-100%")};
  }
  @media (max-width: 400px) {
    border-radius: 0;
    width: 100%;
  }
`;

export const ItemMenu = styled.div`
  cursor: pointer;
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  i {
    margin-left: 20px;
    margin-right: 40px;
    width: 30px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    font-size: 17px;
    font-family: "Saira";
  }

  :last-child {
    margin-bottom: 20px;
  }
`;

export const CloseNavbarMenu = styled.div`
  font-family: "Shadows Into Light";
  padding-left: 20px;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-right: 10px;

  i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10%;
  }
`;
