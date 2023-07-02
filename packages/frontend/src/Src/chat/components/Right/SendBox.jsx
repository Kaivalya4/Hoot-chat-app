import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { TbSend } from "react-icons/tb";
import { BiLink } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";

import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import EmojiPicker from "./EmojiPicker";
import { firebaseDB } from "../../../common/db/firebaseDB";

const SendBox = ({ userChat }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [showpicker, setShowPicker] = useState(false);
  const msgTextRef = useRef();

  const sendMessage = async (event) => {
    event.preventDefault();
    const textmsg = event.target[1].value;

    msgTextRef.current.value = "";
    await updateDoc(doc(firebaseDB, "chats", userChat.id), {
      message: arrayUnion({
        id: uuid(),
        text: textmsg,
        senderId: currentUser.uid,
        photoURL: currentUser.photoURL,
        date: Timestamp.now(),
      }),
    });

    const combinedId = userChat.id;

    await updateDoc(doc(firebaseDB, "usersChats", currentUser.uid), {
      [combinedId + ".lastMessage"]: textmsg,
      [combinedId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(firebaseDB, "usersChats", userChat.uid), {
      [combinedId + ".uid"]: currentUser.uid,
      [combinedId + ".displayName"]: currentUser.displayName,
      [combinedId + ".photoURL"]: currentUser.photoURL,
      [combinedId + ".date"]: serverTimestamp(),
      [combinedId + ".lastMessage"]: textmsg,
    });
  };

  const toggleEmojiPicker = () => {
    setShowPicker((prev) => !prev);
  };

  const selectEmoji = (emoji) => {
    msgTextRef.current.value += emoji.native;
    setShowPicker((prev) => !prev);
  };

  return (
    <div className="bottom">
      {showpicker && <EmojiPicker selectEmoji={selectEmoji} />}
      <form className="form" onSubmit={sendMessage}>
        <div className="input-block">
          <label htmlFor="attach" className="attach-file-label">
            <BiLink />
          </label>
          <input type="file" name="" id="attach" className="attach-file" />
          <input
            type="text"
            className="input-area"
            placeholder="Write a message..."
            ref={msgTextRef}
          />
          <button
            type="button"
            className="attach-emoji"
            onClick={toggleEmojiPicker}
          >
            <VscSmiley />
          </button>
        </div>
        <button className="send">
          <TbSend />
        </button>
      </form>
    </div>
  );
};

export default SendBox;
