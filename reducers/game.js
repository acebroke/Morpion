import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {},
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    createGamePlayer2: (state, action) => {
      state.value = action.payload;
    },
    addPreferencesGamePlayer2: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { createGamePlayer2, addPreferencesGamePlayer2 } =
  gameSlice.actions;

export default gameSlice.reducer;
