import React from "react";
import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <C.Container>
      <div onClick={() => window.location.reload()} className="icone lg:hidden">
        <FaArrowLeft />
      </div>
      <C.UserInfo>
        {photoURL ? (
          <img
            src={photoURL}
            width={35}
            height={35}
            className="rounded-full cursor-pointer mr-1 lg:ml-2"
            alt="Avatar"
          />
        ) : (
          <img
            src={MdPerson}
            width={35}
            height={35}
            className="rounded-full cursor-pointer mr-1"
            alt="Avatar"
          />
        )}

        <C.NameContent>
          <C.Name>
            <span className="ml-1">{name}</span>
          </C.Name>
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        {/* <MdSearch />
        <MdMoreVert /> */}
      </C.Options>
    </C.Container>
  );
};

export default ChatHeader;
