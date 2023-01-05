import styled from "styled-components";

import background from '../../images/teste2.jpg'

export const Base = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-image: url(${background});
`

export const Container = styled.div`
  height: 500px;
  width: 420px;
  border-radius: 15px;
  background: var(--white);
  box-shadow: 4px 4px 4px var(--purple-dark);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--white);
`

export const ImgLogo = styled.div`
  width: 170px;
  img {
    width: 170px;
  }
  margin-bottom: 20px;
`

export const Input = styled.div`
  color: var(--white);
  width: 90%;
  input {
    padding: 15px;
    width: 100%;
    background: none;
    outline: 0;
    border: none;
    border-bottom: 1px solid var(--purple);
    text-align: center;
  }
`

export const ButtonLogin = styled.div`
  cursor: pointer;
  margin-top: 15px;
  height: 40px;
  width: 175px;
  background: var(--gray-white);
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  box-shadow: 1px 1px 5px 0px var(--dark);
`

export const ButtonRegister = styled.div`
  cursor: pointer;
  margin-top: 15px;
  height: 40px;
  width: 175px;
  background: var(--purple);
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  box-shadow: 1px 1px 5px 0px var(--dark);
`

export const ButtonGoogle = styled.div`
  cursor: pointer;
  margin-top: 15px;
  height: 40px;
  width: 175px;
  background: var(--gray-white);
  box-shadow: 1px 1px 5px 0px var(--dark);

  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);

  div {
    img {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    margin-left: 10px;
  }
`

export const ErrorOrPassword = styled.div`
  font-size: 13px;
  width: 90%;
  display: flex;
  color: var(--black);
`

export const Error = styled.div`
  width: 100%;
  color: transparent;
`
