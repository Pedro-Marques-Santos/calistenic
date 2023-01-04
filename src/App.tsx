/* eslint-disable @typescript-eslint/no-unused-vars */
import { Introduction } from "./components/Introduction";
import { Login } from "./components/Login";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Login />
      <GlobalStyle />
    </>
  );
}
