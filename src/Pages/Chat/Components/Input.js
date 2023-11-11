import Img from "../../../assets/images/chat/img.png";
import Attach from "../../../assets/images/chat/attach.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { sendMessageAsync } from "../../../store/reducers/messages.reducer";

const Input = ({conversation}) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      const response = await dispatch(sendMessageAsync({ text, img, conversation }));
    // Add a 1-second delay using setTimeout
    setTimeout(() => {
      // Reload the page after the delay
      window.location.reload();
    }, 1000);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };
  
  return (
    <form className="input" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        name="body"
      />
      <input type="hidden" name="conversation" value={conversation} />
      <div className="send">
        <button>Send</button>
      </div>
    </form>
  );
};

export default Input;
