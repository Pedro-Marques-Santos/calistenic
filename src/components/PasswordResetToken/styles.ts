import styled from "styled-components";

export const Home = styled.div`
  background: var(--gray-fundo);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  img {
    max-width: 350px;
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

export const Button = styled.div`
  cursor: pointer;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin-top: 18px;
  background: #6a00bf;
  border: 1px solid #550299;
`;

export const ErrorPassword = styled.div`
  font-size: 14px;
  color: red;
  height: 20px;
`;
