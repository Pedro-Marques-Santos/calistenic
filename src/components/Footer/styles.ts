import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
  background: var(--black-main);
  color: var(--gray-fundo);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 300px;
  min-width: 250px;

  h1 {
    font-size: 21px;
    font-weight: 600;
    line-height: 37px;
    letter-spacing: 0em;
  }

  div {
    margin-top: 8px;
    font-family: "Inter";
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: justify;
  }
`;

export const Level = styled.div`
  cursor: pointer;
  text-decoration: underline;
`;

export const Tags = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: end;
  i {
    cursor: pointer;
    margin-right: 18px;
    font-size: 20px;
  }
`;
