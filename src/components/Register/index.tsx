import { Base, ButtonGoogle, ButtonLogin, ButtonRegister, Container, ErrorOrPassword, ImgLogo, Input, Error } from "./styles";

import validator from "validator";

import logo from '../../assets/images/logo-final.png';
import google from '../../assets/images/Google.svg';
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../context/authentication";

import { useNavigate } from "react-router-dom";

interface ResponseUser {
  token: string;
  name: string;
}

export function Register() {

  const navegate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function verifyRegister(name: string, password: string, error: string) {
    if(!name) {
      setError('Missing characters in name');
    }
    if(!email) {
      setError('Enter a valid email address!');
    }
    if(!password) {
      setError('Password is missing characters!');
    }
    if(name && password && email) {
      setError('');
    }
  }

  async function handleRegister() {
    let emailState = false;

    verifyRegister(name, password, email);

    if (validator.isEmail(email)) {
      emailState = true;
    }
    
    if(name && password && email && emailState) {

      let data = {
        name: name,
        email: email,
        password: password
      }

      let response = await fetch('http://localhost:3333/createUser', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if(response.status === 401) {
        setError('Email already registered!');
      }

      if(response.status === 200) {
        setError('');

        let result = await response.json() as ResponseUser;
        
        navegate('/dashboard', {
          state: {
            user: {
              name: result.name,
              token: result.token
            }
          }
        })
      }
    }
  }

  const authentication = useContext(AuthenticationContext);

  function goStateLogin() {
    authentication?.dispatch({ type: "LOGAR" });
  }

  return (
    <Base>
      <Container>
        <ImgLogo>
          <img src={logo} alt="" />
        </ImgLogo>
        <Input>
          <input type="text" placeholder="Name" 
          onChange={event => setName(event.target.value)} />
        </Input>
        <Input>
          <input type="text" placeholder="Email" 
          onChange={event => setEmail(event.target.value)}  />
        </Input>
        <Input>
          <input type="password" placeholder="Password" 
          onChange={event => setPassword(event.target.value)}  />
        </Input>
        <ErrorOrPassword>
          <Error>{error}</Error>
        </ErrorOrPassword>
        <ButtonRegister onClick={handleRegister}>
          Register
        </ButtonRegister>
        <ButtonLogin onClick={goStateLogin}>
          Login
        </ButtonLogin>
        <ButtonGoogle>
          <div><img src={google} alt="" /></div>
          <div>Google</div>
        </ButtonGoogle>
      </Container>
    </Base>
  );
}