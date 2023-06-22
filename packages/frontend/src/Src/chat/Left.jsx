import React from "react";
import {useNavigate} from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

import { signOut } from "firebase/auth";
import {firebaseAuth} from "../../db/firebaseDB";

import useGetUser from "../common/hooks/useGetUser";

const Left = () => {
  const currentUser = useGetUser();
  const navigate = useNavigate();
  console.log(currentUser?.photoURL);
  const handleLogout = async (event)=>{
      try{
        await signOut(firebaseAuth);
        navigate("/login");
      }catch(error){

      }
  }

  return (
    <div className="left">
      <br />
      <div>
        <img
          src={currentUser.photoURL || require("../../resources/3.jpg")}
          alt=""
          className="dp"
        />
      </div>
      <br />
      <button className="logout-button" title="Logout">
      <RiLogoutBoxLine className="logout-icon"  onClick={handleLogout}/>
      </button>
    </div>
  );
};

export default Left;
