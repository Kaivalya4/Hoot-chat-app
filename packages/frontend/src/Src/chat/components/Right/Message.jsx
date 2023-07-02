import React from "react";

const Message = ({ owner = false, message, photoURL }) => {
  return (
    <div className={"message" + (owner ? " owner" : "")}>
      <div className="dp">
        <img src={photoURL || require("../../../../resources/4.jpg")} alt="" />
        <div className="status">just now</div>
      </div>
      <div className={"msg-body" + (owner ? " owner" : "")}>{message.text}</div>
    </div>
  );
};

export default Message;
