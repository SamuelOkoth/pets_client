import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { GetUserProfileAsync } from "../../../store/reducers/auth.reducer";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

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
    <div className="chats p-4">
      {partnerInfoArray.map((chat, index) => (
        <div key={index} className="userChat">
          <img src="" alt="user image" />
          <Link to={"/chat/" + chat.partnerID} className="userChatInfo">
            <span>{chat.partnerName}</span>
            <p>{chat.lastMessage}</p>
          </Link>
        </div>
      ))}
      {!partnerInfoArray[0] && <p>No Messages</p>}
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next"; // Import the useTranslation hook
// import { getRequest } from "../../../config/axiosConfig"; // Import the getRequest function

// const Chats = () => {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { t } = useTranslation(); // Use the useTranslation hook
//   useEffect(() => {
//     // Define a function to fetch chats
//     const fetchChats = async () => {
//       try {
//         // Use getRequest from your axiosConfig to fetch data
//         const data = await getRequest("api/v1/conversations");
//         setChats(data);
//       } catch (error) {
//         // Handle error if needed
//         console.error("An error occurred:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Call the fetchChats function when the component mounts
//     fetchChats();
//   }, []);

//   return (
//     <div className="chats p-4">
//       {loading ? (
//         <p>Loading chats...</p>
//       ) : chats.length > 0 ? (
//         chats.map((chat, index) => (
//           <div className="userChat" key={index}>
//             <img src={chat.userImage} alt="user image" />
//             <div className="userChatInfo">
//               <span>{chat.userName}</span>
//               <p>{chat.lastMessage}</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>{t("No messages yet")}</p>
//       )}
//     </div>
//   );
// };

export default Chats;
