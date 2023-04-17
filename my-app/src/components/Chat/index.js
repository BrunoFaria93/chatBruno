import React from "react";
import ChatHeader from "../ChatHeader";
import * as C from "./styles";
import Default from "./../Default";
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Loading";

const Chat = ({ userChat }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, "500");
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-screen w-full bg-[#191818]">
          <Default />
        </div>
      ) : (
        <C.Container>
          <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
          <ChatBody chatId={userChat?.chatId} />
          <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
      )}
    </>
  );
};

export default Chat;
