import React from "react";

const MiddleChat = () => {
  return (
    <div>
      <div className="each-chat">
        <img
          src={require("../../../../resources/4.jpg")}
          alt=""
          className="dp"
        />
        <div className="each-chat_detail">
          <div className="each-chat_name">Hanuman</div>
          <p className="recent-message">Khush raho vats !!!!</p>
        </div>
        <div className="recent-chat-time">9:38</div>
      </div>
      <br />
      <div className="each-chat">
        <img
          src={require("../../../../resources/4.jpg")}
          alt=""
          className="dp"
        />
        <div className="each-chat_detail">
          <div className="each-chat_name">Hanuman</div>
          <p className="recent-message">Khush raho vats !!!!</p>
        </div>
        <div className="recent-chat-time">9:38</div>
      </div>
      <br />
      <div className="each-chat">
        <img
          src={require("../../../../resources/4.jpg")}
          alt=""
          className="dp"
        />
        <div className="each-chat_detail">
          <div className="each-chat_name">Hanuman</div>
          <p className="recent-message">Khush raho vats !!!!</p>
        </div>
        <div className="recent-chat-time">9:38</div>
      </div>
      <br />

      <br />
    </div>
  );
};

export default MiddleChat;