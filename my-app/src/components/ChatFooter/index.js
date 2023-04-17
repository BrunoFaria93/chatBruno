import React, { useState } from "react";
import * as C from "./styles";
import { MdSend } from "react-icons/md";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    if (message?.length > 0) {
      e.preventDefault();

      db.collection("chats").doc(chatId).collection("messages").add({
        message: message,
        user: user.email,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setMessage("");
    } else {
      return;
    }
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSendMessage}>
        <C.Input
          type={"text"}
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <img onClick={handleSendMessage} className="absolute right-6 h-6 w-6" src={require("../../images/send.png")} alt="sendMsg" />
      </C.Form>
    </C.Container>
  );
};

export default ChatFooter;
