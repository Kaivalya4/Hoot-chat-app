import React from "react";
import { useDispatch } from "react-redux";

import { updateUserChat } from "../../../common/redux/chatSlice";

const MiddleChat = ({ chats }) => {
  const dispatch = useDispatch();

  const handleClick = (userChat) => {
    dispatch(
      updateUserChat({
        id: userChat[0],
        uid: userChat[1].uid,
        displayName: userChat[1].displayName,
        photoURL: userChat[1].photoURL,
      })
    );
  };

  return (
    <div>
      {chats &&
        Object.entries(chats)?.map((chat) => (
          <div key={chat[0]}>
            <div className="each-chat" onClick={() => handleClick(chat)}>
              <div className="dp">
                <img
                  src={
                    chat[1].photoURL || require("../../../../resources/4.jpg")
                  }
                  alt=""
                />
              </div>
              <div className="each-chat_detail">
                <div className="each-chat_name">{chat[1].displayName}</div>
                {chat[1]?.lastMessage && (
                  <p className="recent-message">{chat[1].lastMessage}</p>
                )}
              </div>
              {chat[1]?.lastMessage && (
                <div className="recent-chat-time">9:38</div>
              )}
            </div>
            <br />
          </div>
        ))}
    </div>
  );
};

export default MiddleChat;
