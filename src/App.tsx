import { Authentication } from "./components/Authentication";
import { Dashboard } from "./components/Dashboard";
import { Exercise } from "./components/Exercise";
import { Introduction } from "./components/Introduction";
import { AuthenticationProvider } from "./context/authentication";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./components/ForgotPassword";
import { PasswordResetToken } from "./components/PasswordResetToken";

export function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction />}></Route>
        </Routes>
        <Routes>
          <Route path="authentication" element={<Authentication />}></Route>
        </Routes>
        <Routes>
          <Route path="passwordReset" element={<PasswordResetToken />}></Route>
        </Routes>
        <Routes>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Routes>
          <Route path="exercise" element={<Exercise />}></Route>
        </Routes>
        <Routes>
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </AuthenticationProvider>
  );
}
