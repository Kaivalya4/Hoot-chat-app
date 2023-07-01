import React from "react";

const MessageBox = ({ userDetail, handleOnClick }) => {
  return (
    <div
      className="each-chat"
      data-user={userDetail}
      onClick={() => handleOnClick(userDetail)}
    >
      <div className="dp">
        <img
          src={userDetail.photoURL || require("../../../../resources/4.jpg")}
          alt=""
        />
      </div>
      <div className="each-chat_detail">
        <div className="each-chat_name">{userDetail.displayName}</div>
        <p className="recent-message">Khush raho vats !!!!</p>
      </div>
      <div className="recent-chat-time">9:38</div>
    </div>
  );
};

export default MessageBox;
