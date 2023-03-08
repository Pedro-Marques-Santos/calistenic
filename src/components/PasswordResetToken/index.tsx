import { Button, Container, ErrorPassword, Title } from "./styles";
import { Home } from "./styles";

import img from "../../assets/images/resetPassword.png";

import { AlertSuccess } from "../AlertSuccess";
import { useState } from "react";

export function PasswordResetToken() {
  const [alertSuccess, setAlertSucess] = useState(false);
  const url = window.location.href as string;
  const [, token] = url.split("token=");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleVerifySetError(password: string) {
    if (!password) {
      setError("Faltam caracteres para criar uma senha!");
    }
    if (password) {
      setError("");
    }
  }

  if (!token) {
    return (
      <div>
        Para liberar a troca de senha, acesse o link após enviar o código de
        verificação no email.
      </div>
    );
  }

  async function handleForgotPassword() {
    handleVerifySetError(password);

    if (password) {
      let data = {
        password: password,
      };

      let response = await fetch(
        `http://localhost:3333/passwordReset?token=${token}`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );

      if (response.status === 200) {
        setAlertSucess(true);
        setTimeout(() => {
          setAlertSucess(false);
        }, 4900);
        setPassword("");
        setError("");
      } else {
        setError("Token expirou, peça um novo link de verificação de senha!");
      }
    }
  }

  return (
    <Home>
      <Container>
        <img src={img} alt="" />
        <Title>Digite a sua nova senha!</Title>
        <input
          type="password"
          placeholder="Nova senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <ErrorPassword>{error}</ErrorPassword>
        <Button onClick={handleForgotPassword}>Alterar senha</Button>
      </Container>
      <AlertSuccess alertSuccess={alertSuccess} message={"Senha modificada!"} />
    </Home>
  );
}
