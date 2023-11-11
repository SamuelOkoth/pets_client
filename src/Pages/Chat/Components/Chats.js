import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GetUserProfileAsync } from "../../../store/reducers/auth.reducer";
import { GetMyMessagesAsync } from "../../../store/reducers/messages.reducer";
import { useTranslation } from "react-i18next";

const Chats = () => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.chats.conversations);


  const fetchData = async () => {
    try {
       await dispatch(GetMyMessagesAsync());
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Error fetching messages");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chats p-4">
      {conversations.map((conversation, index) => (
        <div key={index} className="userChat">
          <img src={conversation.profile_image} alt="user image" />
          <Link to={`/chat/${conversation.id}`} className="userChatInfo">
            <span>{conversation.recipient_first_name}</span>
            <p>{conversation.last_message.body}</p>
          </Link>
        </div>
      ))}
      {!conversations.length && <p>No Messages</p>}
    </div>
  );
};

export default Chats;