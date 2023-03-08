import {
  Base,
  ButtonLogin,
  ButtonRegister,
  Container,
  ErrorOrPassword,
  ImgLogo,
  Input,
  Error,
  ForgetPassword,
} from "./styles";

import validator from "validator";

import logo from "../../assets/images/logo-final.png";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../context/authentication";

import { useNavigate } from "react-router-dom";

interface ResponseUser {
  token: string;
}

export function Login() {
  const navegate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function verifyLogin(email: string, password: string, emailState: boolean) {
    if (!password) {
      setError("Password is missing characters!");
    }
    if (password) {
      setError("");
    }
    if (!email || !emailState) {
      setError("Enter a valid email address!");
    }
    if (email && emailState) {
      setError("");
    }
  }

  async function handleLogin() {
    let emailState = false;

    if (validator.isEmail(email)) {
      emailState = true;
    }

    verifyLogin(email, password, emailState);

    if (password && email && emailState) {
      let data = {
        email: email,
        password: password,
      };

      let response = await fetch("http://localhost:3333/loginUser", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (response.status === 401) {
        setError("Password or email incorrect!");
      }

      if (response.status === 200) {
        setError("");
        let result = (await response.json()) as ResponseUser;
        navegate("/dashboard", {
          state: {
            data: {
              token: result.token,
            },
          },
        });
      }
    }
  }

  const authentication = useContext(AuthenticationContext);

  function goStateLogin() {
    authentication?.dispatch({ type: "REGISTER" });
  }

  function sendForgotPassword() {
    navegate("/forgotpassword");
  }

  return (
    <Base>
      <Container>
        <ImgLogo>
          <img src={logo} alt="" />
        </ImgLogo>
        <Input>
          <input
            type="text"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Input>
        <Input>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Input>
        <ErrorOrPassword>
          <Error>{error}</Error>
          <ForgetPassword onClick={sendForgotPassword}>
            Forget Password?
          </ForgetPassword>
        </ErrorOrPassword>
        <ButtonLogin onClick={handleLogin}>Login</ButtonLogin>
        <ButtonRegister onClick={goStateLogin}>Register</ButtonRegister>
      </Container>
    </Base>
  );
}
