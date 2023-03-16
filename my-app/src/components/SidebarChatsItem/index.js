import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as C from "./styles";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  };

  return (
    <C.Container onClick={handleNewChat} className={active}>
      {Avatar ? (
        <C.ImagePhoto
          src={Avatar?.photoURL}
          width={45}
          height={45}
          className="rounded-full cursor-pointer"
          alt="Avatar"
        />
      ) : (
        <C.ImagePhoto
          src={require("../../images/noPhoto.png")}
          width={45}
          height={45}
          className="rounded-full cursor-pointer"
          alt="Avatar"
        />
      )}
      <C.Name>{item.split("@")[0]}</C.Name>
    </C.Container>
  );
};

export default SidebarChatsItem;
