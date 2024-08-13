import { useState } from "react";

import "./Detail.css";

const Detail = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <div className="userdetails">
          <h2>Time Lord</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      {/* TODO: Fix the Bug While clicking the arrow button every other arrows
      updates simultaneously. */}
      <div className="settings">
        <div className="item">
          <span>Chat Settings</span>
          <img
            src={open ? "./arrowDown.png" : "./arrowUp.png"}
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className="item">
          <span>Privacy & Security</span>
          <img
            src={open ? "./arrowDown.png" : "./arrowUp.png"}
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className="item">
          <span>Shared Pictures</span>
          <img
            src={open ? "./arrowDown.png" : "./arrowUp.png"}
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className="item">
          <span>Shared Files</span>
          <img
            src={open ? "./arrowDown.png" : "./arrowUp.png"}
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
