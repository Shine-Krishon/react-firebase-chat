import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

import "./Chat.css";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="userdata">
            <span>Time Lord</span>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              sapiente laborum corrupti excepturi harum quas repellendus facilis
              fugit sunt ratione enim, corporis, dicta, voluptates consequuntur?
              Maxime at nisi quae distinctio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              sapiente laborum corrupti excepturi harum quas repellendus facilis
              fugit sunt ratione enim, corporis, dicta, voluptates consequuntur?
              Maxime at nisi quae distinctio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              sapiente laborum corrupti excepturi harum quas repellendus facilis
              fugit sunt ratione enim, corporis, dicta, voluptates consequuntur?
              Maxime at nisi quae distinctio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              sapiente laborum corrupti excepturi harum quas repellendus facilis
              fugit sunt ratione enim, corporis, dicta, voluptates consequuntur?
              Maxime at nisi quae distinctio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              sapiente laborum corrupti excepturi harum quas repellendus facilis
              fugit sunt ratione enim, corporis, dicta, voluptates consequuntur?
              Maxime at nisi quae distinctio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./bg.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              sapiente laborum corrupti excepturi harum quas repellendus facilis
              fugit sunt ratione enim, corporis, dicta, voluptates consequuntur?
              Maxime at nisi quae distinctio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Enter your Message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="emojiPicker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
