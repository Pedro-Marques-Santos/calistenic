import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication";
import { Login } from "../Login";
import { Register } from "../Register";

export function Authentication() {

  const authentication = useContext(AuthenticationContext);

  console.log(authentication);

  if (!authentication) {
    return <></>
  }

  return (
    <>
      {authentication.state.authenticationStage === 'login' && <Login />}
      {authentication.state.authenticationStage === 'register' && <Register />}
    </>
  );
}