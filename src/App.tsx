import { Authentication } from "./components/Authentication";
import { Dashboard } from "./components/Dashboard";
import { Exercise } from "./components/Exercise";
import { Introduction } from "./components/Introduction";
import { AuthenticationProvider } from "./context/authentication";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="index" element={<Introduction />}></Route>
        </Routes>
        <Routes>
          <Route path="authentication" element={<Authentication />}></Route>
        </Routes>
        <Routes>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Routes>
          <Route path="exercise" element={<Exercise />}></Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </AuthenticationProvider>
  );
}
