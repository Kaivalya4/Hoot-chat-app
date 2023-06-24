import React from "react";
import { FaEarlybirds } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { firebaseAuth } from "../../db/firebaseDB";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateUser } from "../../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      dispatch(
        updateUser({
          currentUser: {
            displayName: response.user.name,
            uid: response.user.uid,
            email,
            photoURL: response.user.photoURL,
          },
        })
      );
      navigate("/chat");
    } catch (error) {}
  };

  return (
    <div className="signup-page">
      <span className="signup-page_top">
        <FaEarlybirds />
        Hoot Messaging App
      </span>
      <form className="signup-form" onSubmit={handleSignIn}>
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
          id="password"
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
            <Link to="/signup" id="signup-link">
              Signup
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
