import React from "react";
import { FaEarlybirds } from "react-icons/fa";
import { Link } from "react-router-dom";

const signup = () => {
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
                <button className="signup-form_btn">Login</button>
                <br />
                <p className="signup-form_last">
                    Already have an account ?{" "}
                    <span>
                        <Link to="#" id="signup-link">
                            login
                        </Link>
                    </span>
                </p>
            </form>
        </div>
    );
};

export default signup;
