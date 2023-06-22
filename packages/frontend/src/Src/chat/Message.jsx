import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="dp">
        <img src={require("../../resources/4.jpg")} alt="" />
        <div className="status">just now</div>
      </div>
      <div className="msg-body owner">Jai Shree Ram</div>
    </div>
  );
};

export default Message;
