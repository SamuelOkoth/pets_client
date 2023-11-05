const Message = ({ message }) => {
  const messageOwner = "123";
  return (
    <>
      <div
        className={
          (message.senderID == messageOwner ? " message owner" : "message ")
        }
      >
        <div className="messageContent"><p>{message.message}</p></div>
        <div className="messageInfo">{/* <span>just now</span> */}</div>
      </div>
    </>
  );
};

export default Message;
