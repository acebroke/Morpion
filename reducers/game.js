import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {},
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    createGame: (state, action) => {
      state.value = action.payload;
    },
    addPreferencesGame: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    updateScoreGame: (state, action) => {
      if (action.payload === "circle") {
        state.value.pseudo1.score += 1;
      } else {
        state.value.pseudo2.score += 1;
      }
    },
    restartGame: (state) => {
      state.value.pseudo1.score = 0;
      state.value.pseudo2.score = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createGame, addPreferencesGame, updateScoreGame, restartGame } =
  gameSlice.actions;

export default gameSlice.reducer;
