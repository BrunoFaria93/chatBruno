import React from "react";
import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <C.Container>
      <div onClick={() => window.location.reload()} className="icone">
        <FaArrowLeft />
      </div>
      <C.UserInfo>
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        <MdSearch />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default ChatHeader;
