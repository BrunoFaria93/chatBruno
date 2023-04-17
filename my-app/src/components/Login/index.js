import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <div className="login">
        <img
          src="https://i.pinimg.com/originals/87/c1/5b/87c15b1c7c465c9a8f9e979559fe87ac.png"
          alt=""
        ></img>
        <C.Button onClick={handleSignin}>
          <FaGoogle className="mt-1"/> 
          <span>Login com Google</span>
        </C.Button>
      </div>
    </C.Container>
  );
};

export default Login;
