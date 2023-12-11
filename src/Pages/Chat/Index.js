import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "./Components/SideBar";
import Chat from "./Components/Chat";
import { useDispatch, useSelector } from "react-redux";
import { GetMyMessagesAsync } from "../../store/reducers/messages.reducer";

export default function Index() {
  const dispatch = useDispatch();

  const fetchChats = async () => {
    const response = await dispatch(GetMyMessagesAsync());
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <div className="home">
        <Container>
          <Sidebar />
          <Chat />
        </Container>
      </div>
    </>
  );
}
