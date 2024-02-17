import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axInstance } from "../../../utils/axios.instance";

export const moviesAcion = createAsyncThunk("fav/getAll", async () => {
  const res = await axInstance.get("movie/popular", {
    params: {
      page: 1,
    },
  });
  return res.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(moviesAcion.fulfilled, (state, action) => {
      state.value.push(...action.payload.results);
    });
    //   .addCase(moviesAcion.rejected, (state, action) => {
    //     state.push(...action.payload.results);
    //   });
  },
});

export default movieSlice.reducer;
