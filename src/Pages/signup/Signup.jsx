import React from "react";
import { FaEarlybirds } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="signup-page">
            <span className="signup-page_top">
                <FaEarlybirds />
                Hoot Messaging App
            </span>
            <form className="signup-form">
                <FaEarlybirds className="hoot-icon" />
                <br />
                <br />
                <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="signup-form_inpt"
                />
                <br />
                <br />
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    className="signup-form_inpt"
                />
                <br />
                <br />
                <input
                    type="password"
                    id="email"
                    placeholder="Enter password"
                    className="signup-form_inpt"
                />
                <br />
                <br />
                <label htmlFor="avatar" id="signup-form_avatar">
                    <FcAddImage id="avatar-icon" /> Add an Avatar
                </label>
                <input type="file" name="" id="avatar" />
                <br />
                <br />
                <button className="signup-form_btn">signup</button>
                <br />
                <p className="signup-form_last">
                    Don't have any account ?{" "}
                    <span>
                        <Link to="#" id="signup-link">
                            Signup
                        </Link>
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Signup;
