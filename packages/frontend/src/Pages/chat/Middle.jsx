import React from "react";
import MiddleChat from "./MiddleChat";

const Middle = () => {
    return (
        <div className="middle">
            <h2>Chats</h2>
            <br />
            <br />
            <form action="">
                <input
                    type="search"
                    name=""
                    id="search-user"
                    placeholder="Search"
                />
            </form>
            <br />
            <hr className="middle-hr1" />
            <br />
            <MiddleChat />
        </div>
    );
};

export default Middle;
