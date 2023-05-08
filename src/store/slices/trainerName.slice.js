import { createSlice } from "@reduxjs/toolkit";

const trainerName = createSlice({
  name: "trainerName",
  initialState: "",
  reducers: {
    setTrainerName: (state, action) => action.payload,
  },
});

export const { setTrainerName } = trainerName.actions;

export default trainerName.reducer;
