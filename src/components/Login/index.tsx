import { Base, ButtonGoogle, ButtonLogin, ButtonRegister, Container, ErrorOrPassword, ImgLogo, Input, Error, ForgetPassword } from "./styles";
import logo from '../../images/logo-final.png';
import google from '../../images/Google.svg';

export function Login() {
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
        <ButtonRegister>
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