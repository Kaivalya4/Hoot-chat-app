import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "",
  },
  reducers: {
    updateUser: (state, action) => {
      state.displayName = action.displayName;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
