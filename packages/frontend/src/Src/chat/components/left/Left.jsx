import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../../common/db/firebaseDB";

import useGetUser from "../../../common/hooks/useGetUser";
import { resetUserChat } from "../../../common/redux/chatSlice";

const Left = () => {
  const dispatch = useDispatch();
  const currentUser = useGetUser();
  const navigate = useNavigate();
  const handleLogout = async (event) => {
    try {
      dispatch(resetUserChat());
      await signOut(firebaseAuth);
      navigate("/login");
    } catch (error) {}
  };

  return (
    <div className="left">
      <br />
      <div className="dp">
        <img
          src={currentUser.photoURL || require("../../../../resources/3.jpg")}
          alt=""
        />
      </div>
      <br />
      <button className="logout-button" title="Logout">
        <RiLogoutBoxLine className="logout-icon" onClick={handleLogout} />
      </button>
    </div>
  );
};

export default Left;
