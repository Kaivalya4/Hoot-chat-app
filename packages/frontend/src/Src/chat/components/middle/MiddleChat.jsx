import React from "react";

const MiddleChat = ({ chats }) => {
  return (
    <div>
      {Object.entries(chats)?.map((chat) => (
        <div key={chat[0]}>
          <div className="each-chat">
            <img
              src={chat[1].photoURL || require("../../../../resources/4.jpg")}
              alt=""
              className="dp"
            />
            <div className="each-chat_detail">
              <div className="each-chat_name">{chat[1].displayName}</div>
              <p className="recent-message">Khush raho vats !!!!</p>
            </div>
            <div className="recent-chat-time">9:38</div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default MiddleChat;
