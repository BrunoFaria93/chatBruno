import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <img
        src="https://ouch-cdn2.icons8.com/duRZperhqzgTo41KtRT4sJIhgffjgsLlHmIqVkRb6LY/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjA5/LzgwNmJkNGRmLTFk/ZDEtNDI3ZC1hYmIw/LWJjMGIxMzE4NGY2/Mi5zdmc.png"
        alt=""
      ></img>
      <C.Title>Bruno Chat</C.Title>
      <C.Info>
        Agora você pode enviar e receber mensagens sem precisar manter seu
        celular conectado à internet.
      </C.Info>
    </C.Container>
  );
};

export default Default;
