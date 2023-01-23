import styled from "styled-components";

import background from '../../assets/images/teste.png'

export const Base = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 500px;
  margin-left: 7px;
  margin-right: 7px;
  background: white;
  box-shadow: 0px 1px 1px 1px var(--dark);
  border-radius: 20px;



  h1 {
    margin-top: 20px;
    margin-bottom: 30px;
    font-family: 'Balthazar';
    font-size: 30px;
    letter-spacing: 0em;
    font-family: Balthazar;

    font-weight: 400;
    text-shadow: 0px 4px 4px var(--dark);
  }
`

export const Cardcontent = styled.div`
  width: 98%; /* 7px de cada lados a menos. Essa width está centralizada */
  max-width: 360px;
`

export const Level = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0em;

  display: flex;
  align-items: center;

  h2 {
    font-family: 'Inter';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0em;
    font-weight: 500;
    margin-right: 7px;
  }
`

export const Difficulty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 127px;
  border-radius: 10px;
  background: linear-gradient(93.63deg, var(--blue) 0%, var(--red) 100%);

  font-family: 'Inter';
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white);
`

export const Video = styled.div`
  width: 100%;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 12px;

  video {
    width: 100%;
  }
`

export const Muscles = styled.div`
  margin-bottom: 10px;
  h3 {
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--gray-black);

  }

  div {
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: justify;
  }

  :last-child {
    margin-bottom: 20px;
  }
`