import styled from "styled-components";

export const Base = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--black);
`;

export const Container = styled.div`
  color: var(--white);
  height: 100%;
  max-width: 591.13px;
  min-width: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgPeaplo = styled.div`
  img {
    width: 100%;
    max-width: 400px;
  }
`;

export const TextInitial = styled.div`
  margin-top: 60px;
  display: flex;
`;

export const TypeTraining = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 30px;
  font-family: "Saira";
  font-weight: 500;
  text-align: end;
  @media (max-width: 300px) {
    font-size: 27px;
  }
`;

export const TypeCoach = styled.div`
  width: 70%;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-left: 10%;
`;

export const Instructor = styled.div`
  color: var(--gray);
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  margin-left: 10%;
`;

export const CoachContent = styled.div`
  color: var(--gray);
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  margin-top: 12px;
  margin-left: 10%;
`;

export const ButtonStart = styled.div`
  cursor: pointer;
  color: var(--black);
  margin-top: 20px;
  height: 55px;
  width: 160px;
  border-radius: 30px;
  background: linear-gradient(
    98.39deg,
    rgba(180, 149, 40, 0.85) 8.5%,
    #faff00 128.01%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Saira";
  font-size: 16px;
  font-weight: bold;
`;

export const Emoji = styled.div`
  font-size: 20px;
`;
