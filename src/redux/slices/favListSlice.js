import { createSlice } from "@reduxjs/toolkit";

export const favListSlice = createSlice({
  name: "favList",
  initialState: {
    value: [],
  },
  reducers: {
    addToFav: (state, action) => {
      // console.log(state.value, action);
      state.value.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.value = state.value.filter((e) => e.id != action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFav, removeFromFav } = favListSlice.actions;

export default favListSlice.reducer;
