import React, { useEffect, useReducer, useRef, useState } from "react";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import MiddleChat from "./MiddleChat";
import DisplaySearchResult from "./DisplaySearchResult";
import { firebaseDB } from "../../../common/db/firebaseDB";
import { loadingReducer } from "../../utils/utils";
import { useSelector } from "react-redux";

const Middle = () => {
  const inputRef = useRef();
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState({});
  const [dataLoadingStatus, loadingDispatch] = useReducer(loadingReducer, {
    isloaded: true,
    showsearch: false,
    error: false,
    message: "",
  });

  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (currentUser) {
      const unsub = onSnapshot(
        doc(firebaseDB, "usersChats", currentUser.uid),
        (doc) => {
          setChats(doc.data());
        }
      );

      return () => {
        unsub();
      };
    }
  }, [currentUser]);

  const handleChange = (event) => {
    if (event.target.value === "") {
      loadingDispatch({ type: "clear" });
    }
  };

  const handleSearch = async (event) => {
    try {
      loadingDispatch({ type: "start" });
      const usersRef = collection(firebaseDB, "users");
      const usersq = query(
        usersRef,
        where("displayName", "==", inputRef.current.value)
      );
      const usersqSnapshot = await getDocs(usersq);
      usersqSnapshot.forEach((userdoc) => {
        if (currentUser.uid !== userdoc.data().uid) {
          setUsers((users) => {
            users.push(userdoc.data());
            return users;
          });
        }
      });
      loadingDispatch({ type: "success" });
    } catch (error) {}
  };

  const handleKeyPress = (event) => {
    setUsers([]);
    if (event.code === "Enter" && inputRef.current.value !== "") {
      handleSearch();
    }
  };

  const handleOnClick = async (user) => {
    inputRef.current.value = "";
    setUsers([]);
    loadingDispatch({ type: "clear" });
    try {
      console.log(user);
      const combinedId =
        currentUser.uid > user.uid
          ? currentUser.uid + user.uid
          : user.uid + currentUser.uid;
      const res = await getDoc(doc(firebaseDB, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(firebaseDB, "chats", combinedId), { messages: [] });

        await updateDoc(doc(firebaseDB, "usersChats", currentUser.uid), {
          [combinedId + ".uid"]: user.uid,
          [combinedId + ".displayName"]: user.displayName,
          [combinedId + ".photoURL"]: user.photoURL,
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
  };

  return (
    <div className="middle">
      <h2>Chats</h2>
      <div className="search-user-form">
        <input
          type="search"
          name=""
          id="search-user"
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Search"
        />
      </div>
      <br />
      <hr className="middle-hr1" />
      <br />
      {dataLoadingStatus.showsearch && !dataLoadingStatus.isloaded && (
        <>Loading ...</>
      )}
      {dataLoadingStatus.showsearch && dataLoadingStatus.isloaded && (
        <DisplaySearchResult users={users} handleOnClick={handleOnClick} />
      )}
      {dataLoadingStatus.isloaded && !dataLoadingStatus.showsearch && (
        <MiddleChat chats={chats} />
      )}
    </div>
  );
};

export default Middle;
