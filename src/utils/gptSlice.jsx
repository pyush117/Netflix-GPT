import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { showGptSearch: false },

  reducers: {
    // eslint-disable-next-line no-unused-vars
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
