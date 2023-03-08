import {
  Button,
  Container,
  Content,
  Img,
  EmailInvalido,
  Introduction,
} from "./styles";

import validator from "validator";

import password from "../../assets/images/Forgot password-bro (1).png";

import { useState } from "react";

import { AlertSuccess } from "../AlertSuccess";

interface IResponseError {
  message: string;
}

export function ForgotPassword() {
  const [alertSuccess, setAlertSucess] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleVerifySetError(email: string, emailState: boolean) {
    if (!email || !emailState) {
      setError("Digite um email válido!");
    }
    if (email && emailState) {
      setError("");
    }
  }

  async function handleForgotPassword() {
    let emailState = false;

    if (validator.isEmail(email)) {
      emailState = true;
    }

    handleVerifySetError(email, emailState);

    if (email && emailState) {
      let data = {
        email: email,
      };

      let response = await fetch("http://localhost:3333/passwordForgot", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (response.status === 200) {
        setAlertSucess(true);
        setTimeout(() => {
          setAlertSucess(false);
        }, 4900);
        setError("");
        setEmail("");
      } else {
        let { message } = (await response.json()) as IResponseError;

        setError(message);
      }
    }
  }

  return (
    <Content>
      <Container>
        <Img>
          <img src={password} alt="" />
        </Img>
        <Introduction>Esqueceu sua senha?</Introduction>
        <p>
          Digite o seu email para enviarmos um código de verificação ao seu
          email!
        </p>
        <input
          value={email}
          type="text"
          name=""
          placeholder="Digite seu e-mail"
          id=""
          onChange={(event) => setEmail(event.target.value)}
        />
        <EmailInvalido>{error}</EmailInvalido>
        <Button onClick={handleForgotPassword}>Enviar</Button>
      </Container>
      <AlertSuccess alertSuccess={alertSuccess} message={"Código enviado!"} />
    </Content>
  );
}
