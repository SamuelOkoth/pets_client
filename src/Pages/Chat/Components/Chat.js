import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Messages from "./Messages";
import Input from "./Input";
import { GetUserProfileAsync } from "../../../store/reducers/auth.reducer";
import { GetMyMessageAsync } from "../../../store/reducers/messages.reducer";

const Chat = () => {
  const [currentUserID, setcurrentUserID] = useState("");
  const conversations = useSelector((state) => state.chats.messages);
  const [messages, setMessages] = useState([]);
  const { conversationID } = useParams();
  const dispatch = useDispatch();

  const getcurrentUserID = async () => {
    try {
      const response = await dispatch(GetUserProfileAsync());
      setcurrentUserID(response.id);
    } catch (error) {
      // Handle error
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getcurrentUserID();
  }, []);

  useEffect(() => {
    console.log(conversationID);
    const fetchData = async () => {
      if (conversationID) {
        try {
          const messages = await dispatch(GetMyMessageAsync(conversationID));
          setMessages(messages);
        } catch (error) {
          // Handle error
          console.error("Error fetching messages:", error);
        }
      }
    };
  
    fetchData(); // Call the async function
  }, [conversationID, dispatch]);
  console.log(messages)

  return (
    <>
      <div className="chat">
        <div className="chatInfo">
          Request for Ad {messages.subject}
        </div>
          <Messages messages={messages.messages} />
        <Input />
      </div>
    </>
  );
};

export default Chat;