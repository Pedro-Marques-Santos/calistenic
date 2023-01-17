import { Base, ButtonGoogle, ButtonLogin, ButtonRegister, Container, ErrorOrPassword, ImgLogo, Input, Error, ForgetPassword } from "./styles";
import logo from '../../assets/images/logo-final.png';
import google from '../../assets/images/Google.svg';
import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication";

export function Login() {

  const authentication = useContext(AuthenticationContext);

  function goStateLogin() {
    authentication?.dispatch({ type: "REGISTER" });
  }

  return (
    <Base>
      <Container>
        <ImgLogo>
          <img src={logo} alt="" />
        </ImgLogo>
        <Input>
          <input type="text" placeholder="Email" />
        </Input>
        <Input>
          <input type="password" placeholder="Password" />
        </Input>
        <ErrorOrPassword>
          <Error>Password or email incorrect!</Error>
          <ForgetPassword>Forget Password?</ForgetPassword>
        </ErrorOrPassword>
        <ButtonLogin>
          Login
        </ButtonLogin>
        <ButtonRegister onClick={goStateLogin}>
          Register
        </ButtonRegister>
        <ButtonGoogle>
          <div><img src={google} alt="" /></div>
          <div>Google</div>
        </ButtonGoogle>
      </Container>
    </Base>
  );
}