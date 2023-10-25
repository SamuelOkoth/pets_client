import React from "react";
import Cam from "../../../assets/images/chat/cam.png";
import Add from "../../../assets/images/chat/add.png";
import More from "../../../assets/images/chat/more.png";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <>
      <div className="chat">
        <div className="chatInfo">
          <span>Jhon</span>
          {/* <div className="chatIcons">
            <img src={Cam} alt="" />
            <img src={Add} alt="" />
            <img src={More} alt="" />
          </div> */}
        </div>
        <Messages />
        <Input />
        
      </div>
    </>
  );
};

export default Chat;
