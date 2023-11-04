import Message from "./Message";

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {!messages[0] ? (
        <h5>No messages</h5>
      ) : (
        messages.map((message) => <Message message={message} />)
      )}
    </div>
  );
};

export default Messages;
