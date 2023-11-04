import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { GetUserProfileAsync } from "../../../store/reducers/auth.reducer";

const Chats = () => {
  const [currentUserID, setcurrentUserID] = useState("");
  const dispatch = useDispatch();

  const getcurrentUserID = async () => {
    try {
      const response = await dispatch(GetUserProfileAsync());
      setcurrentUserID(response.id);
      console.log(response.id);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    getcurrentUserID();
  }, []);

  const partnerInfoArray = [];

  const messages = useSelector((state) => state.chats.messages).forEach(
    (message) => {
      const partnerID =
        message.senderID == currentUserID
          ? message.recipientID
          : message.senderID;

      if (partnerID != currentUserID) {
        const partnerIndex = partnerInfoArray.findIndex(
          (partner) => partner.partnerID == partnerID
        );
        if (partnerIndex == -1) {
          partnerInfoArray.push({
            partnerID: partnerID,
            partnerName:
              partnerID == message.senderID
                ? message.senderName
                : message.recipientName,
            lastMessage: message.message,
            timestamp: message.timestamp,
          });
        } else if (
          message.timestamp > partnerInfoArray[partnerIndex].timestamp
        ) {
          partnerInfoArray[partnerIndex].lastMessage = message.message;
          partnerInfoArray[partnerIndex].timestamp = message.timestamp;
        }
      }
    }
  );
  return (
    <div className="chats">
      {partnerInfoArray.map((chat, index) => (
        <div key={index} className="userChat">
          <img src="" alt="user image" />
          <Link to={"/chat/" + chat.partnerID} className="userChatInfo">
            <span>{chat.partnerName}</span>
            <p>{chat.lastMessage}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Chats;
