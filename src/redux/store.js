import { configureStore } from "@reduxjs/toolkit";
import favListReducer from "./slices/favListSlice";

export default configureStore({
  reducer: {
    favList: favListReducer,
  },
});
