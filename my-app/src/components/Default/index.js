import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <img
        src="https://i.pinimg.com/originals/87/c1/5b/87c15b1c7c465c9a8f9e979559fe87ac.png"
        alt=""
      ></img>
      <C.Title>Bruno Chat</C.Title>
      <C.Info>Bem vindo(a) ao Bruno Chat</C.Info>
    </C.Container>
  );
};

export default Default;
