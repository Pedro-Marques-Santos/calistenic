import styled from "styled-components";

export const ContainerContent = styled.div`
  background: red;
  width: 200px;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  color: #0f5132;
  background-color: #aecfc0;
  text-align: center;
  font-size: 13px;
`;

interface AlertProps {
  alertSuccess: boolean;
}

export const Container = styled.div<AlertProps>`
  position: fixed;
  transition: 2s;
  right: ${(props) => (props.alertSuccess ? "1px" : "-50%")};
  top: 1px;
`;
