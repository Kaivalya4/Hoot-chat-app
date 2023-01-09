import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";

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
            <div className="between">middle</div>
            <div className="bottom">bottom</div>
        </div>
    );
};

export default Right;
