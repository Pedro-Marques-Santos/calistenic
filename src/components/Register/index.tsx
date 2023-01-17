import { Base, ButtonGoogle, ButtonLogin, ButtonRegister, Container, ErrorOrPassword, ImgLogo, Input, Error } from "./styles";
import logo from '../../assets/images/logo-final.png';
import google from '../../assets/images/Google.svg';
import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication";

export function Register() {

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
          <input type="text" placeholder="Name" />
        </Input>
        <Input>
          <input type="text" placeholder="Email" />
        </Input>
        <Input>
          <input type="password" placeholder="Password" />
        </Input>
        <ErrorOrPassword>
          <Error>Email already exists!</Error>
        </ErrorOrPassword>
        <ButtonRegister>
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