import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import {signin} from "container/signinFunction";

import "./index.css";

const AuthApp = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/auth/signin/" element={<SignIn onSignIn={signin} />} />
        <Route path="/auth/signup/" element={<SignUp onSignIn={() => {}} />} />
      </Routes>
    </React.StrictMode>
  );
};

export default AuthApp;
