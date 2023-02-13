import styled from "styled-components";

export const Container = styled.div``;

export const InputMotivation = styled.div`
  textarea {
    font-size: 18px;
    border: 1px solid black;
    width: 100%;
    height: 200px;
    text-align: justify;
    outline: 0;
    background: white;
  }
`;

export const ContentButton = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  margin-left: 12px;
  height: 40px;
  background: var(--gray-light);
  border: 1px solid var(--gray-border);
  transition: 0.6s;
  :hover {
    background: var(--gray-border);
    border: 1px solid #696969;
  }
`;
