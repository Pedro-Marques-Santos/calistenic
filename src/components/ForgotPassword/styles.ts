import styled from "styled-components";

export const Content = styled.div`
  height: 100vh;
  background: var(--gray-fundo);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  width: 100%;
  max-width: 400px;
  p {
    margin-top: 9px;
    font-size: 14.5px;
    margin-bottom: 12px;
  }
  input {
    background: white;
    outline: 0;
    font-size: 14px;
    padding-left: 15px;
    height: 40px;
    color: inherit;
    font-family: inherit;
    border: none;
    width: 100%;
    border: none;
    border-radius: 0.4rem;
    box-shadow: 0.1rem 0.1rem 0.2rem black;
  }
`;

export const Introduction = styled.div`
  font-size: 18px;
`;

export const Button = styled.div`
  cursor: pointer;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin-top: 8px;
  background: #6a00bf;
  border: 1px solid #550299;
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 300px;
  }
`;

export const EmailInvalido = styled.div`
  font-size: 13.5px;
  height: 13.5px;
  color: red;
`;

export const ResendEmail = styled.div``;
