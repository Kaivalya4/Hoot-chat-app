import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userChatReducer from "./chatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chatuser: userChatReducer,
  },
});
