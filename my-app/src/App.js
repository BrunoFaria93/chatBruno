import React, { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import * as C from "./styles/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";
import "./index.css";

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setIsMobile(false);
    }
  }, []);
  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <>
      {isMobile ? (
        <>
          <C.Container>
            {userChat ? (
              <>
                <Chat userChat={userChat} />
              </>
            ) : (
              <>
                <Sidebar setUserChat={setUserChat} userChat={userChat} />
              </>
            )}
          </C.Container>
        </>
      ) : (
        <>
          <C.Container>
            {userChat ? (
              <section className="flex">
                <Sidebar setUserChat={setUserChat} userChat={userChat} />
                <Chat userChat={userChat} />
              </section>
            ) : (
              <div className="flex">
                <Sidebar setUserChat={setUserChat} userChat={userChat} />
                <div className="flex justify-center items-center bg-[#0F0E0E] w-[70vw] h-screen">
                  <div className="float w-72">
                    <img
                      src={require("./images/chatimage.png")}
                      alt="illustrationChat"
                    ></img>
                  </div>
                </div>
              </div>
            )}
          </C.Container>
        </>
      )}x
    </>
  );
};

export default App;
