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

  console.log("Avatar?.photoURL ", Avatar?.photoURL);
  return (
    <C.Container onClick={handleNewChat} className={active}>
      <div className="relative mx-auto p-2">
        <div className="absolute bg-gradient-to-r from-slate-900 rounded-md h-24 top-2 left-2 w-20"></div>
        <img
          src={require("../../images/darkBack.jpg")}
          alt=""
          className="w-[90vw] rounded-md h-24 object-cover"
        ></img>

      
        <div className="absolute top-5 left-5">
          {Avatar ? (
            <C.ImagePhoto src={Avatar?.photoURL} alt="Avatar" />
          ) : (
            <C.ImagePhoto
              src={require("../../images/noPhoto.png")}
              alt="Avatar"
            />
          )}
        </div>
        <div className="text-white absolute top-7 left-20">
          {item.split("@")[0]}
        </div>
      </div>
    </C.Container>
  );
};

export default SidebarChatsItem;
