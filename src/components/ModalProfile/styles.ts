import styled from "styled-components";

export const Container = styled.div``;

export const ImgProfile = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModifyProfile = styled.div`
  margin-top: 5px;
  cursor: pointer;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-decoration: underline;
  display: flex;
  justify-content: center;
`;

export const Name = styled.div`
  margin-top: 25px;
  font-size: 25px;
  font-weight: 500;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Motivation = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: green;

  margin-top: 12px;
  text-align: center;
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
