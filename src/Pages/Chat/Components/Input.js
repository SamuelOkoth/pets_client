import Img from "../../../assets/images/chat/img.png";
import Attach from "../../../assets/images/chat/attach.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { sendMessageAsync } from "../../../store/reducers/messages.reducer";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      dispatch(sendMessageAsync({ text, img }));
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
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </form>
  );
};

export default Input;
