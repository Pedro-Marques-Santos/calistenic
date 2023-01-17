/* eslint-disable @typescript-eslint/no-unused-vars */
import { Authentication } from "./components/Authentication";
import { Dashboard } from "./components/Dashboard";
import { Exercise } from "./components/Exercise";
import { Introduction } from "./components/Introduction";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthenticationProvider } from "./context/authentication";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <AuthenticationProvider>
      <Authentication />
      <GlobalStyle />
    </AuthenticationProvider>
  );
}
