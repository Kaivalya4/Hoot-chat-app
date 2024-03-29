import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chatuser",
  initialState: {
    currentUserChat: {
      id: null,
      uid: null,
      photoURL: "",
      displayName: "",
    },
  },
  reducers: {
    updateUserChat: (state, action) => {
      state.currentUserChat.id = action.payload.id;
      state.currentUserChat.uid = action.payload.uid;
      state.currentUserChat.displayName = action.payload.displayName;
      state.currentUserChat.photoURL = action.payload.photoURL;
    },
    resetUserChat: (state) => {
      state.currentUserChat = {
        id: null,
        uid: null,
        photoURL: "",
        displayName: "",
      };
    },
  },
});

export const { updateUserChat, resetUserChat } = chatSlice.actions;
export default chatSlice.reducer;
