import React, { useState, useEffect } from "react";
import Input from "./Input";
import Messages from "./Messages";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetUserProfileAsync } from "../../../store/reducers/auth.reducer";

const Chat = () => {
  const [currentUserID, setcurrentUserID] = useState("");
  const { partnerID } = useParams();

  const dispatch = useDispatch();

  const getcurrentUserID = async () => {
    try {
      const response = await dispatch(GetUserProfileAsync());
      setcurrentUserID(response.id);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    getcurrentUserID();
  }, []);

  const messages = useSelector((state) => state.chats.messages).filter(
    (message) =>
      (message.senderID == currentUserID &&
        message.recipientID == partnerID) ||
      (message.senderID == partnerID && message.recipientID == currentUserID)
  );

  return (
    <>
      {(
        <div className="chat">
          <div className="chatInfo">
            <span>{messages[0]?.senderName}</span>
          </div>
          <Messages messages={messages} />
          <Input />
        </div>
      )}
    </>
  );
};

export default Chat;
