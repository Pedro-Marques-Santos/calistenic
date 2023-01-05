import { Base, ButtonGoogle, ButtonLogin, ButtonRegister, Container, ErrorOrPassword, ImgLogo, Input, Error } from "./styles";
import logo from '../../images/logo-final.png';
import google from '../../images/Google.svg';

export function Register() {
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
        <ButtonLogin>
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