
const Message = ({ message, currentUserID }) => {

  return (
    <>
      <div
        className={
          (message.user_id == currentUserID ? " message owner" : "message ")
        }
      >
        <div className="messageContent"><p>{message.body}</p></div>
        <div className="messageInfo">{/* <span>just now</span> */}</div>
      </div>
    </>
  );
};

export default Message;
