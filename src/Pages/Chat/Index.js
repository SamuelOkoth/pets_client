import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "./Components/SideBar";
import Chat from "./Components/Chat";

export default function Index() {
  return (
    <>
      <br/>
        <br/>
        <br/>
        <br/>
      <div className="home">
      
        <Container>
          <Sidebar />
          <Chat />
        </Container>
      </div>
    </>
  );
}
