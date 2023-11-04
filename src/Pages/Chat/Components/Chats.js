import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { getRequest } from "../../../config/axiosConfig"; // Import the getRequest function

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(); // Use the useTranslation hook
  useEffect(() => {
    // Define a function to fetch chats
    const fetchChats = async () => {
      try {
        // Use getRequest from your axiosConfig to fetch data
        const data = await getRequest("api/v1/conversations");
        setChats(data);
      } catch (error) {
        // Handle error if needed
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchChats function when the component mounts
    fetchChats();
  }, []);

  return (
    <div className="chats p-4">
      {loading ? (
        <p>Loading chats...</p>
      ) : (
        chats.length > 0 ? (
          chats.map((chat, index) => (
            <div className="userChat" key={index}>
              <img src={chat.userImage} alt="user image" />
              <div className="userChatInfo">
                <span>{chat.userName}</span>
                <p>{chat.lastMessage}</p>
              </div>
            </div>
          ))
        ) : (
          <p>{t("No messages yet")}</p>
        )
      )}
    </div>
  );
};

export default Chats;