import React from "react";
import { useSelector } from "react-redux";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { TbSend } from "react-icons/tb";
import { BiLink } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";

import Messages from "./Messages";

const Right = () => {
  const userChat = useSelector((state) => state.chatuser.currentUserChat);
  return (
    <div className="right">
      {userChat && (
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

          <Messages />
          <div className="bottom">
            <form className="form">
              <div className="input-block">
                <label htmlFor="attach" className="attach-file-label">
                  <BiLink />
                </label>
                <input
                  type="file"
                  name=""
                  id="attach"
                  className="attach-file"
                />
                <input
                  type="text"
                  className="input-area"
                  placeholder="Write a message..."
                />
                <label htmlFor="emoji-pick" className="attach-emoji-label">
                  <VscSmiley />
                </label>
                <input
                  type="text"
                  name=""
                  id="emoji-pick"
                  className="attach-emoji"
                />
              </div>
              <button className="send">
                <TbSend />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Right;
