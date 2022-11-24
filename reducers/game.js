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
    updateScoreGamePlayer2: (state, action) => {
      if (action.payload === "circle") {
        state.value.pseudo1.score += 1;
      } else {
        state.value.pseudo2.score += 1;
      }
    },
    restartGamePlayer2: (state) => {
      state.value.pseudo1.score = 0;
      state.value.pseudo2.score = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createGamePlayer2,
  addPreferencesGamePlayer2,
  updateScoreGamePlayer2,
  restartGamePlayer2,
} = gameSlice.actions;

export default gameSlice.reducer;
