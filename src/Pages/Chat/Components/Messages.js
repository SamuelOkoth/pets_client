import Message from "./Message";

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default Messages;
