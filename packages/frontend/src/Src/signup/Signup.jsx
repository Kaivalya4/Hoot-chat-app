import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEarlybirds } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";

import {
  firebaseAuth,
  firebaseDB,
  firebaseStorage,
} from "../common/db/firebaseDB";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const image = event.target[3].files[0];
    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      const imageRef = ref(firebaseStorage, name);
      await uploadBytesResumable(imageRef, image).then(() => {
        getDownloadURL(imageRef).then(async (downloadURL) => {
          await updateProfile(response.user, {
            displayName: name,
            photoURL: downloadURL,
          });
          await setDoc(doc(firebaseDB, "users", response.user.uid), {
            uid: response.user.uid,
            displayName: name,
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(firebaseDB, "usersChats", response.user.uid), {});
          navigate("/");
        });
      });
    } catch (error) {}
  };
  return (
    <div className="signup-page">
      <span className="signup-page_top">
        <FaEarlybirds />
        Hoot Messaging App
      </span>
      <form className="signup-form" onSubmit={handleFormSubmit}>
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
          id="password"
          placeholder="Enter password"
          className="signup-form_inpt"
        />
        <br />
        <br />
        <label htmlFor="avatar" id="signup-form_avatar">
          <FcAddImage id="avatar-icon" /> Add an Avatar
        </label>
        <input
          type="file"
          name=""
          id="avatar"
          alt="upload avatar"
          accept="image/png , image/jpeg"
        />
        <br />
        <br />
        <button className="signup-form_btn">signup</button>
        <br />
        <p className="signup-form_last">
          Don't have any account ?{" "}
          <span>
            <Link to="/login" id="signup-link">
              Login
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
