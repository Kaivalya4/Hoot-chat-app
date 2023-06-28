import React from "react";
import { useSelector } from "react-redux";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { TbSend } from "react-icons/tb";

import Messages from "./Messages";

const Right = () => {
  const userChat = useSelector((state) => state.chatuser.currentUserChat);

  return (
    <div className="right">
      <div className="top">
        <div className="dp">
          <img
            src={
              (userChat.photoURL.length && userChat.photoURL) ||
              require("../../../../resources/4.jpg")
            }
            alt=""
          />
        </div>

        <div className="each-chat_detail">
          <div className="each-chat_name">{userChat.displayName}</div>
          <p className="status">online</p>
        </div>
        <div className="fasci">
          <BsCameraVideo />
          <IoIosCall />
        </div>
      </div>
      <Messages />
      <form className="bottom">
        <input type="text" />
        <button>
          <TbSend />
        </button>
      </form>
    </div>
  );
};

export default Right;
