/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dashboard } from "./components/Dashboard";
import { Exercise } from "./components/Exercise";
import { Introduction } from "./components/Introduction";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Exercise />
      <GlobalStyle />
    </>
  );
}
