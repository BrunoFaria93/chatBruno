import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as C from "./styles";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [messagesRes] = useCollection(
    db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);
  const [lastMsg, setLastMsg] = useState("");
  const [lastMsgTime, setLastMsgTime] = useState("");

  useEffect(() => {
    for (let i = 0; i < messagesRes?._snapshot.docChanges?.length; i++) {
      if (messagesRes?._snapshot.docChanges?.length - 1 === i) {
        if (
          messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value?.mapValue
            ?.fields?.user?.stringValue === user?.email
        ) {
          let data = "";
          if (
            new Date().toLocaleDateString() ===
            new Date(
              messagesRes?._snapshot?.docChanges[
                i
              ]?.doc?.data?.value?.mapValue?.fields?.timestamp?.timestampValue
            ).toLocaleString([], {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })
          ) {
            data = "Hoje";
          }

          let dateToday = new Date().toLocaleDateString();

          let dateFirebase = new Date(
            messagesRes?._snapshot?.docChanges[
              i
            ]?.doc?.data?.value?.mapValue?.fields?.timestamp?.timestampValue
          ).toLocaleString([], {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          if (
            Number(dateToday[0] + dateToday[1]) ===
            Number(dateFirebase[0] + dateFirebase[1]) + 1
          ) {
            data = "Ontem";
          }
          if (data === "") {
            if (
              messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value?.mapValue
                ?.fields?.image?.stringValue
            ) {
              setLastMsg("Eu: 🖼️ Foto");
            } else {
              setLastMsg(
                "Eu: " +
                  messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value
                    ?.mapValue?.fields?.message?.stringValue
              );
            }
            setLastMsgTime(
              new Date(
                messagesRes?._snapshot?.docChanges[
                  i
                ]?.doc?.data?.value?.mapValue?.fields?.timestamp?.timestampValue
              ).toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })
            );
          } else if (data === "Hoje") {
            if (
              messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value?.mapValue
                ?.fields?.image?.stringValue
            ) {
              setLastMsg("Eu: 🖼️ Foto");
            } else {
              setLastMsg(
                "Eu: " +
                  messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value
                    ?.mapValue?.fields?.message?.stringValue
              );
            }

            setLastMsgTime(
              new Date(
                messagesRes?._snapshot?.docChanges[
                  i
                ]?.doc?.data?.value?.mapValue?.fields?.timestamp?.timestampValue
              ).toLocaleString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          } else if (data === "Ontem") {
            if (
              messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value?.mapValue
                ?.fields?.image?.stringValue
            ) {
              setLastMsg("Eu: 🖼️ Foto");
            } else {
              setLastMsg(
                "Eu: " +
                  messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value
                    ?.mapValue?.fields?.message?.stringValue
              );
            }

            setLastMsgTime("Ontem");
          }
        } else {
          let data = "";
          if (
            new Date().toLocaleDateString() ===
            new Date(
              messagesRes?._snapshot?.docChanges[
                i
              ]?.doc?.data?.value?.mapValue?.fields?.timestamp?.timestampValue
            ).toLocaleString([], {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })
          ) {
            data = "Hoje";
          }
          if (data === "") {
            if (
              messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value?.mapValue
                ?.fields?.image?.stringValue
            ) {
              setLastMsg("🖼️ Foto");
            } else {
              setLastMsg(
                messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value
                  ?.mapValue?.fields?.message?.stringValue
              );
            }
            setLastMsgTime(
              new Date(
                messagesRes?._snapshot?.docChanges[
                  i
                ]?.doc?.data?.value?.mapValue?.fields?.timestamp?.timestampValue
              ).toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })
            );
          } else if (data === "Hoje") {
            if (
              messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value?.mapValue
                ?.fields?.image?.stringValue
            ) {
              setLastMsg("🖼️ Foto");
            } else {
              setLastMsg(
                messagesRes?._snapshot?.docChanges[i]?.doc?.data?.value
                  ?.mapValue?.fields?.message?.stringValue
              );
            }
            setLastMsgTime(
              new Date(
                messagesRes?._snapshot?.docChanges[
                  i
                ]?.doc?.data?.value?.mapValue?.fields?.timestamp?.timestampValue
              ).toLocaleString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          }
        }
      }
    }
  }, [messagesRes?._snapshot.docChanges]);
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
      <div className="relative mx-auto p-2">
        {/* <div className="absolute bg-gradient-to-r from-slate-900 rounded-md h-24 top-2 left-2 w-20"></div> */}
        <div className="w-[90vw] rounded-md h-24 object-cover lg:w-[30vw]"></div>

        <div className="absolute top-5 left-5">
          {Avatar ? (
            <div className="relative">
              <C.ImagePhoto src={Avatar?.photoURL} alt="Avatar" />
              <div className="absolute text-[#CBB088] top-5 left-[59px] text-xs">
                <div className="flex w-[150px]">
                  <p className="truncate">{lastMsg || "Sem mensagens"}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <C.ImagePhoto
                src={require("../../images/noPhoto.png")}
                alt="Avatar"
              />
              <div className="absolute text-[#CBB088] top-5 left-[59px] text-xs">
                <div className="flex w-[150px]">
                  <p className="truncate">{lastMsg || "Sem mensagens"}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-[#f3f3f3] absolute top-7 left-20">
          {item.split("@")[0]}
        </div>
        <div className="absolute right-6 top-8 text-xs text-[#73665A] ">
         {lastMsgTime}
        </div>
      </div>
    </C.Container>
  );
};

export default SidebarChatsItem;
