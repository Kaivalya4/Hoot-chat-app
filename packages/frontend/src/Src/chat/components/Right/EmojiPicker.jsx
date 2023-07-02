import React from "react";
import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const EmojiPicker = ({ selectEmoji }) => {
  return (
    <div className="emoji-picker">
      <Picker
        data={emojiData}
        theme="light"
        perLine={7}
        onEmojiSelect={selectEmoji}
      />
    </div>
  );
};

export default EmojiPicker;
