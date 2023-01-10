import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import Messages from "./Messages";
import { TbSend } from "react-icons/tb";

const Right = () => {
    return (
        <div className="right">
            <div className="top">
                <div className="dp">
                    <img src={require("../resources/4.jpg")} alt="" />
                </div>

                <div className="each-chat_detail">
                    <div className="each-chat_name">Hanuman</div>
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
