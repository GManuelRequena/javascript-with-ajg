//const { configureStore } = require("@reduxjs/toolkit");
// const { usersSlice } = require("./slices/users/usersSlice");
import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/users/usersSlice";
import { authSlice } from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    auth: authSlice.reducer,
  },
});
