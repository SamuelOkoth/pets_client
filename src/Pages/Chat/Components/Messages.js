import Message from "./Message";

const Messages = ({ messages, currentUserID }) => {
  console.log(currentUserID);
  return (
    <div className="messages">
      {!messages || messages.length === 0 ? (
        <h5>No messages</h5>
      ) : (
        messages.map((message) => <Message message={message} currentUserID={currentUserID} />)
      )}
    </div>
  );
};

export default Messages;
