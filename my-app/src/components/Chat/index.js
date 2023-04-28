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
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, "500");
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-screen w-full bg-[#242526]">
          <Default />
        </div>
      ) : (
        <C.Container style={{height: height}} className="overflow-hidden">
          <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
          <ChatBody chatId={userChat?.chatId} />
          <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
      )}
    </>
  );
};

export default Chat;
