import React from "react";
import { useSelector } from "react-redux";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";

import Messages from "./Messages";
import SendBox from "./SendBox";

const Right = () => {
  const userChat = useSelector((state) => state.chatuser.currentUserChat);

  return (
    <div className="right">
      {userChat.id && (
        <>
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
          <Messages userChat={userChat} />
          <SendBox userChat={userChat} />
        </>
      )}
    </div>
  );
};

export default Right;
