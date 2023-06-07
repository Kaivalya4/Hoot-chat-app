import React from "react";
import { RiLogoutBoxFill } from "react-icons/ri";

const Left = () => {
  return (
    <div className="left">
      <h3>Kaivalya</h3>
      <br />
      <div>
        <img
          src={require("../../resources/3.jpg")}
          alt=""
          srcset=""
          className="dp"
        />
      </div>
      <br />
      <RiLogoutBoxFill className="logout" />
    </div>
  );
};

export default Left;
