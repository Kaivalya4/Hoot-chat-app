import React, { useEffect, useState } from "react";
import Message from "./Message";

import { doc, onSnapshot } from "firebase/firestore";

import { firebaseDB } from "../../../common/db/firebaseDB";

const Messages = ({ userChat }) => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const doSnapshot = () => {
      const unsub = onSnapshot(doc(firebaseDB, "chats", userChat.id), (doc) => {
        setMessages(doc.data().message);
      });

      return () => {
        unsub();
      };
    };

    userChat.id && doSnapshot();
  }, [userChat.id]);
  return (
    <div className="between">
      {messages &&
        messages.length > 0 &&
        messages.map((message) => {
          if (message.senderId === userChat.uid)
            return (
              <Message
                message={message}
                photoURL={message.photoURL}
                key={message.id}
              />
            );
          else
            return (
              <Message
                owner={true}
                message={message}
                key={message.id}
                photoURL={message.photoURL}
              />
            );
        })}
    </div>
  );
};

export default Messages;
