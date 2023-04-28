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
          src={require("../../images/chatimage.png")}
          alt="illustrationChat"
        ></img>
        <C.Button onClick={handleSignin}>
          <FaGoogle className="mt-1 mr-3"/> 
          <span>Login com Google</span>
        </C.Button>
      </div>
    </C.Container>
  );
};

export default Login;
